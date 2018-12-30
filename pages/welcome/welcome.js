Page({
  data: {
    propA: '传入组件数据'
  },
  goPosts() {
    // wx.navigateTo({
    //   url: "../posts/post?id=222"
    // })
    wx.redirectTo({
      url: "../posts/post?id=2223"
    })
  },
  showOrHide() {
    console.log(this)
    this.myDialog.hide()
  },
  cancelEvent() {
    this.myDialog.hide()
  },
  confirmEvent() {
    this.myDialog.hide()
  },
  onLoad() {
    //页面初始化
    console.log('onload')
  },
  onReady() {
    //页面渲染完成
    console.log('onready')
    //
    this.myDialog = this.selectComponent('#my-dialog')
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