var postData = require('../../data/localData.js')
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