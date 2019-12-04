// pages/index/pages/mine/history/history.js
import {serverUrl} from '../../../../common/common.js'
const app=getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    orderList:[],
    meetingRoom: [{
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
    }],
    labRoom: [
      {
        title: '第一小节课',
        value: '0',
      },
      {
        title: '第二小节课',
        value: '1',
      },
      {
        title: '第三小节课',
        value: '2',
      },
      {
        title: '第四小节课',
        value: '3',
      },
      {
        title: '第五小节课',
        value: '4',
      },
      {
        title: '第六小节课',
        value: '5',
      },
      {
        title: '第七小节课',
        value: '6',
      },
      {
        title: '第八小节课',
        value: '7',
      },
      {
        title: '第九小节课',
        value: '8',
      },
      {
        title: '第十小节课',
        value: '9',
      },
      {
        title: '第十一小节课',
        value: '10',
      },
      {
        title: '第十二小节课',
        value: '11',
      },
      {
        title: '整天',
        value: 'full',
      },
    ]
  },

  value2title: function (values) {
    for (var i = 0; i < values.length; i++) {
      if (values[i].roomType == 0) {
        var result = ''
        var timeslots = values[i].timeslot.split(',')
        for (var j = 0; j < this.data.meetingRoom.length; j++) {
          for(var l=0;l<timeslots.length;l++){
          if (timeslots[l] == this.data.meetingRoom[j].value) {
            result=result+this.data.meetingRoom[j].title+','
          }
          }
        }
        values[i].timeslot = result
      }
      console.log(values[i])
      if(values[i].roomType==1){
        var result = ''
        var timeslots = values[i].timeslot.split(',')
        for (var j = 0; j < this.data.labRoom.length; j++) {
          for(var l=0;l<timeslots.length;l++){
          if (timeslots[l] == this.data.labRoom[j].value) {
            result=result+this.data.labRoom[j].title+','
          }
          }
        }
        values[i].timeslot=result
      }
      if(values[i].status==0){
        values[i].status='已拒绝'
      }else if(values[i].status==1){
        values[i].status='预约成功'
      }else if(values[i].status==2){
        values[i].status='待处理'
      }
    }
    return values
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var userInfo=app.globalData.userInfo
    var workNum=app.globalData.workNum
    console.log(userInfo.nickName,workNum)
    var that=this
    if (workNum==null){
      wx.navigateTo({
        url: '../bindup/bindup',
        success: function(res) {},
        fail: function(res) {},
        complete: function(res) {},
      })
      return 0;
    }
    wx.request({
      url: serverUrl.url+'user/history',
      data:{
        nickName:userInfo.nickName,
        workNum:workNum
      },
      method: 'POST',
      success: function (res) {
        if(res.data.code==1){
          var data=res.data.data
          console.log(data)
          data=that.value2title(data)
          that.setData({
            orderList:data
          })
        }
      }
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

  }
})