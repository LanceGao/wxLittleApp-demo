// pages/posts/post-detail/post-detail.js
var postData = require('../../../data/localData.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    postDetailData: {},
    currentPostId: '',
    isCollect: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (option) {
    var currentPostId = option.postId
    this.data.currentPostId = currentPostId
    var postDetailData = postData.postList[currentPostId]
    this.setData({
      postDetailData: postDetailData
    })

    var postCollect = wx.getStorageSync('postCollect')
    if (postCollect) {
      if (postCollect[currentPostId]) {
        this.setData({
          isCollect: postCollect[currentPostId]
        })
      } 
    } else {
      var postCollect = {}
      postCollect[currentPostId] = false
      wx.setStorageSync('postCollect', postCollect)
    }
  },

  onCollectionTap(event) {
    var currentPostId = this.data.currentPostId
    var postCollect = wx.getStorageSync('postCollect')
    postCollect[currentPostId] = !postCollect[currentPostId]
    wx.setStorageSync('postCollect', postCollect)
    this.setData({
      isCollect: postCollect[currentPostId]
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