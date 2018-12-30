var postData = require('../../data/localData.js')
// 获取App实例， 通过实例可以获取在全局定义的变量数据
var app = getApp()

Page({
  data: {
    post_content: []
  },
  onLoad(options) {
    // options为跳转后所带的参数
    console.log(options);
    console.log(app.globalData.allData);
    this.setData({
      post_content: postData.postList
    })
  },
  goPostDetail(event) {
    var postId = event.currentTarget.dataset.postid;
    console.log(postId)
    wx.navigateTo({
      url: 'post-detail/post-detail'
    })
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