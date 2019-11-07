// pages/index/pages/labRoom/labRoom.js
import { $wuxCalendar } from '../../../../dist/index'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    labRoom: [
      {
        id: "138",
        ordered: false,
        orderPerson: null,
        orderTime: null,
        orderDate: null
      },
      {
        id: "230",
        ordered: false,
        orderPerson: null,
        orderTime: null,
        orderDate: null
      },
      {
        id: "231",
        ordered: false,
        orderPerson: null,
        orderTime: null,
        orderDate: null
      },
      {
        id: "234",
        ordered: false,
        orderPerson: null,
        orderTime: null,
        orderDate: null
      },
      {
        id: "235",
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

  toOrder() {
    wx.redirectTo({
      url: "../orderlab/orderlab",
    })
  },

  openCalendar() {
    const now = new Date()
    $wuxCalendar().open({
      value: now,
      //multiple: true,
      onChange: (values, displayValues) => {
        console.log('onChange', values, displayValues)
        this.setData({
          dateTitle: displayValues,
        })
      },
    })
  }
})