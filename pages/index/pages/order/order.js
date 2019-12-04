// pages/index/pages/order/order.js
import { $wuxCalendar } from '../../../../dist/index'
import {$wuxSelect}from '../../../../dist/index'
import { $wuxDialog } from '../../../../dist/index'
import {serverUrl} from '../../../common/common'

const app=getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    orderTime:'',
    orderDate:[],
    timeTitle: '',
    dateTitle: '',
    options:[],
    defaultOptions: [{
      title: '第一节(9:00-10.30)',
      value: '0',
    },
      {
        title: '第二节(10:30-12:00)',
        value: '1',
      },
      {
        title: '第三节(14:00-15:30)',
        value: '2',
      },
      {
        title: '第四节(15:30-17:00)',
        value: '3',
      },
      {
        title: '第五节(18:30-20:00)',
        value: '4',
      },
      {
        title: '第六节(20:00-21:30)',
        value: '5',
      },
      {
        title: '第七节(21:30-23:00)',
        value: '6',
      },
      {
        title: '整天',
        value: 'full'
      }]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var roomNum=wx.getStorageSync("meetingRoomNum")
    this.setData({
      roomNum:roomNum,
      workNum:app.globalData.workNum
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },

  openCalendar() {
    const now = new Date()
    const minDate = now.getTime()
    const maxDate = now.setDate(now.getDate() + 7)

    $wuxCalendar().open({
      value: now,
      minDate,
      maxDate,
      onChange: (values, displayValues) => {
        console.log('onChange', values, displayValues)
        this.setData({
          dateTitle: displayValues,
          options:this.data.defaultOptions
        })
        var that=this
        console.log(that.data)
        wx.request({
          url: serverUrl.url+'user/meetingRoom/checkTime',
          method: 'POST',
          data:{
            roomNum:that.data.roomNum,
            date: that.data.dateTitle[0]
          },
          success:function(res){
            var data=res.data.data
            if(res.data.code==1){
              var option=that.data.options
              if(data[0]=='full'){
                option=[]
              }
              for(var i=0;i<data.length;i++){
                for(var j=0;j<option.length;j++){
                  if (option[j].value==data[i]){
                    option.splice(j,1)
                  }
                }
              }
              console.log(option)
              that.setData({
                options:option
              })
            }
          }
        })
      },
    })
  },
  openTimeSlot(){
    $wuxSelect('#wux-select').open({
      value: this.data.orderTime,
      multiple: true,
      toolbar: {
        title: '请选择时段',
        confirmText: '确定',
      },
      options: this.data.options,
      onChange: (value, index, options) => {
        console.log('onChange', value, index, options)
        if(index.length>0&&index[0]!=-1){
          this.setData({
            orderTime: value,
            timeTitle: index.map((n) => options[n].title),
          })
        }
      },
      onConfirm: (value, index, options) => {
        console.log('onConfirm', value, index, options)
        console.log('onChange', value, index, options)
        if (index.length > 0 && index[0] != -1) {
          this.setData({
            orderTime: value,
            timeTitle: index.map((n) => options[n].title),
          })
        }
      },
    })
  },
  confirm(){
    var that=this
    console.log(that.data)
    $wuxDialog().confirm({
      resetOnClose: true,
      closable: true,
      title: '确认预约信息',
      content: '您将预约'+this.data.dateTitle+"的以下时间段: \n"+this.data.timeTitle,
      onConfirm(e) {
        wx.request({
          url: serverUrl.url+'user/meetingRoom/order',
          method:'POST',
          data:{
            teacherId:that.data.workNum,
            roomNum: that.data.roomNum,
            date: that.data.dateTitle[0],
            timeslot:that.data.orderTime
          },
          success:function(res){
            console.log(res.data)
            if(res.data.code==1){
              wx.navigateTo({
                url: 'result',
              })
            }
          }
        })
        console.log('预约成功')
      },
      onCancel(e) {
        console.log('预约取消')
      },
    })
  }
})