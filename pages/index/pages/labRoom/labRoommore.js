// pages/index/pages/meetingRoom/meetingRoom.js
import { $wuxCalendar } from '../../../../dist/index'

const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    labRoommore: [
      {
        id: "138",
        ordered: false,
        orderPerson: null,
        orderTime: null,
        orderDate: null
      },
      {
        id: "230 & 231",
        ordered: false,
        orderPerson: null,
        orderTime: null,
        orderDate: null
      },
      {
        id: "234 & 235",
        ordered: false,
        orderPerson: null,
        orderTime: null,
        orderDate: null
      },
      {
        id: "236",
        ordered: false,
        orderPerson: null,
        orderTime: null,
        orderDate: null
      },
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    if (!app.globalData.workNum) {
      wx.navigateTo({ url: '../mine/bindup/bindup', })
    }
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

  toOrder(e) {
    var roomNumber = e.detail.label
    wx.setStorageSync("labRoomNum", roomNumber)
    wx.redirectTo({
      url: "../orderlab/orderlab",
    })
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
      },
    })
  }
})