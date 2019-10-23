// pages/index/pages/mine/feedback/feedback.js
import { $wuxDialog } from '../../../../../dist/index.js'

Page({

  /**
   * 页面的初始数据
   */
  data: {
    suggestion:"",
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
  onChange: function (e) {
    console.log("内容改变")
    this.setData({
      suggestion: e.detail.value,
    })
  },
  submit:function(){
    console.log(this.data.suggestion)
    if(this.data.suggestion!=null&&this.data.suggestion.length>0){
      wx.navigateTo({
        url: 'result',
        success: function(res) {},
        fail: function(res) {},
        complete: function(res) {},
      })
    }else{
      $wuxDialog().alert({
        resetOnClose: true,
        title: '输入错误',
        content: '请确保您输入了内容',
        onConfirm(e) {
          console.log('ok')
        },
      })
    }
  }
})