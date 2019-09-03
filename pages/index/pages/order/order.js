// pages/index/pages/order/order.js
import { $wuxCalendar } from '../../../../dist/index'
import {$wuxSelect}from '../../../../dist/index'
import { $wuxDialog } from '../../../../dist/index'

Page({

  /**
   * 页面的初始数据
   */
  data: {
    orderTime:'',
    orderDate:[],
    timeTitle: '',
    dateTitle: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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
      options: [
        {
          title: '第一小节课',
          value: '1',
        },
        {
          title: '第二小节课',
          value: '2',
        },
        {
          title: '第三小节课',
          value: '3',
        },
        {
          title: '第四小节课',
          value: '4',
        },
        {
          title: '第五小节课',
          value: '5',
        },
        {
          title: '第六小节课',
          value: '6',
        },
        {
          title: '第七小节课',
          value: '7',
        },
        {
          title: '第八小节课',
          value: '8',
        },
        {
          title: '第九小节课',
          value: '9',
        },
        {
          title: '第十小节课',
          value: '10',
        },
        {
          title: '第十一小节课',
          value: '11',
        },
        {
          title: '第十二小节课',
          value: '12',
        },
        {
          title: '整天',
          value: 'full'
        },
      ],
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
    $wuxDialog().confirm({
      resetOnClose: true,
      closable: true,
      title: '确认预约信息',
      content: '您将预约'+this.data.dateTitle+"的以下时间段: \n"+this.data.timeTitle,
      onConfirm(e) {
        console.log('预约成功')
      },
      onCancel(e) {
        console.log('预约取消')
      },
    })
  }
})