// pages/index/pages/mine/history/history.js
const app=getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    orderList:[
      {
        room:'540',
        date:'2019/10/23',
        timeslot: '0',
        status:'0'
        },
        {
          room:'230',
          date:'2019/11/13',
          timeslot:'3',
          status:'1'
        }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var userInfo=app.globalData.userInfo
    var workNum=app.globalData.workNum
    console.log(userInfo.nickName,workNum)
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
      url: 'http://127.0.0.1:8000/user/history',
      data:{
        nickName:userInfo.nickName,
        workNum:workNum
      },
      method: 'POST',
      success: function (res) {
        console.log(res.data)
        var user_num = res.data.workNum
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