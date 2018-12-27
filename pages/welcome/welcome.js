Page({
  goPosts() {
    // wx.navigateTo({
    //   url: "../posts/post?id=222"
    // })
    wx.redirectTo({
      url: "../posts/post?id=2223"
    })
  },
  onLoad() {
    //页面初始化
    console.log('onload')
  },
  onReady() {
    //页面渲染完成
    console.log('onready')
  },
  onShow() {
    //页面显示
    console.log('onshow')
  },
  onHide() {
    //页面隐藏
    console.log('onhide')
  },
  onUnload() {
    //页面关闭
    console.log('onunload')
  }
})