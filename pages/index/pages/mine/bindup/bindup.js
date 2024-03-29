// pages/index/pages/mine/bindup/bindup.js
import { $wuxDialog } from '../../../../../dist/index.js'
import {serverUrl} from '../../../../common/common.js'

const app=getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    hasProNum:false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    if (app.globalData.workNum){
      console.log(app.globalData.workNum)
      this.setData({
        workNum:app.globalData.workNum,
        hasProNum:true
      })
    }
    this.setData({
      nickName: app.globalData.userInfo.nickName
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
  bindbreak: function () {
    var that=this
      $wuxDialog().alert({
        resetOnClose: true,
        title: '解绑确认',
        content: '您确定解绑当前工号'+this.data.workNum+'吗？解绑后需要重新绑定才能预约和查询',
        onConfirm(e) {
          console.log('ok')
          wx.request({
            url: serverUrl.url+'user/unbind',
            method:'POST',
            data:{
              nickName:that.data.nickName,
              workNum:that.data.workNum
            },
            success: function(res){
              var data=res.data
              console.log(data)
              if(data.code==1){
                that.setData({
                  workNum: null,
                  hasProNum: false
                })
              }
            }
          })
      }
      })
  },
  onBlur: function(e){
    this.setData({
      inputNum:e.detail.value
    })
    console.log(this.data.inputNum)
  },
  bindup:function(e){
    var that=this
    $wuxDialog().alert({
      resetOnClose: true,
      title: '绑定确认',
      content: '您确定绑定当前工号' + this.data.inputNum + '吗？',
      onConfirm(e) {
        console.log(that.data.nickName)
        wx.request({
          url: serverUrl.url+'user/signup',
          method:'POST',
          data: {
            nickName: that.data.nickName,
            workNum:that.data.inputNum
          },
          success: function(res){
            var data=res.data
            if(data.code==1){
              that.setData({
                workNum: that.data.inputNum,
                hasProNum: true
              })
              app.globalData.workNum = that.data.workNum
            }
          }
        })
        
      },
    })
  }
})