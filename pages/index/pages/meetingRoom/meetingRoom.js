// pages/index/pages/meetingRoom/meetingRoom.js
import {$wuxCalendar} from '../../../../dist/index'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    meetingRoom:[
      {
        id:"308",
        ordered: false,
        orderPerson: null,
        orderTime: null,
        orderDate: null
      },
      {
        id: "310",
        ordered: false,
        orderPerson: null,
        orderTime: null,
        orderDate: null
      },
      {
        id: "330",
        ordered: false,
        orderPerson: null,
        orderTime: null,
        orderDate: null
      },
      {
        id: "538A",
        ordered: false,
        orderPerson: null,
        orderTime: null,
        orderDate: null
      }
    ]
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

  toOrder(){
    wx.redirectTo({
      url: "../order/order",
    })
  },

  openCalendar(){
    const now = new Date()
    const minDate = now.getTime()
    const maxDate = now.setDate(now.getDate() + 7)

    $wuxCalendar().open({
      value: now,
      minDate,
      maxDate,
      onChange: (values, displayValues) => {
        console.log('onChange', values, displayValues)
      },
    })
  }
})