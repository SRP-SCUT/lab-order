Page({
  data: {
    buttons: [
    {
      type: 'positive',
      block: true,
      text: '返回',
    },
    ],
  },
  onClick(e) {
    console.log(e)
    const { index } = e.detail
    index === 0 && wx.navigateTo({
      url: '../mine/history/history',
    })
  },
})