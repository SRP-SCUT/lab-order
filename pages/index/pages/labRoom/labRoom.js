// pages/index/pages/orderlab/orderlab.js
import { $wuxCalendar } from '../../../../dist/index'
import { $wuxSelect } from '../../../../dist/index'
import { $wuxDialog } from '../../../../dist/index'

const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    value: '',
    labnum:[]
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


  onChange(e) {
    console.log(e)
    this.setData({
      value: e.detail.value,
    })
  },

  onFocus(e) {
    this.setData({
      error: isTel(e.detail.value),
    })
    console.log('onFocus', e)
  },

  onBlur(e) {
    this.setData({
      error: isTel(e.detail.value),
    })
    console.log('onBlur', e)
  },

  onConfirm(e) {
    console.log('onConfirm', e)
  },

  onClear(e) {
    console.log('onClear', e)
    this.setData({
      error: true,
      value: '',
    })
  },

  onError() {
    wx.showModal({
      title: 'Please enter numberorder',
      showCancel: !1,
    })
  },

  /*
    numberJudge(){
  
    },
  
  */

  confirm() {
    var that = this;
    $wuxDialog().confirm({
      resetOnClose: true,
      closable: true,
      title: '确认预约人数',
      content: '您将预约的班级总人数为：' + this.data.value + "\n",
      onConfirm(e) {
        var studentNum = that.data.value
        wx.setStorageSync("studentNum", studentNum)
        if(studentNum<=40){
          wx.redirectTo({
            url: "../labRoom/labRoomnum",
          })}
        else {
          wx.redirectTo({
            url: "../labRoom/labRoommore",
          })
        }
        },
     
      onCancel(e) {
        console.log('预约取消')
      },
      /*
      onChange(e){

      }
      */
    })
    
  }


  
})