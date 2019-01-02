// pages/posts/post-detail/post-detail.js
var postData = require('../../../data/localData.js')
var app = getApp()

Page({
  /**
   * 页面的初始数据
   */
  data: {
    postDetailData: {},
    currentPostId: '',
    isCollect: false,
    isPlay: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(option) {
    var that = this
    // 获取全局的背景音频管理器
    const backgroundAudioManager = wx.getBackgroundAudioManager()
    var currentPostId = option.postId
    this.data.currentPostId = currentPostId
    var postDetailData = postData.postList[currentPostId]
    this.setData({
      postDetailData: postDetailData
    })

    // 初始化获取是否收藏缓存信息，若缓存则显示收藏状态
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

    // 通过获取全局的播放控制参数判断此页面是否处于播放
    // 状态，若是则修改data里的播放控制参数并同步渲染层
    if (app.globalData.g_isPlay && app.globalData.g_currentMusicPostId === currentPostId) {
      this.setData({
        isPlay: true
      })
    }
    
    // 监听音乐播放，并同步
    backgroundAudioManager.onPlay(function () {
      that.setData({
        isPlay: true
      })
      app.globalData.g_isPlay = true //同步全局的播放控制参数
      app.globalData.g_currentMusicPostId = that.data.currentPostId
    })
    // 监听音乐暂停，并同步
    backgroundAudioManager.onPause(function () {
      that.setData({
        isPlay: false
      })
      app.globalData.g_isPlay = false //同步全局的播放控制参数
      app.globalData.g_currentMusicPostId = null 
    })
  },
  // 收藏功能实现
  onCollectionTap(event) {
    var currentPostId = this.data.currentPostId
    // 异步获取收藏缓存数据
    this.storageAync(currentPostId)
    // 同步获取收藏缓存数据
    // this.storageSync(currentPostId)
  },

  storageAync(currentPostId) {
    var that = this
    // var postCollect = wx.getStorageSync('postCollect')
    wx.getStorage({
      key: 'postCollect',
      success(res) {
        console.log(res)
        // 调用显示模态对话框api
        that.showModal(currentPostId, res.data)
      }
    })
  },

  storageSync(currentPostId) {
    var postCollect = wx.getStorageSync('postCollect')
    // 调用显示模态对话框api
    this.showModal(currentPostId, postCollect)
  },

  showModal(currentPostId, postCollect) {
    var that = this
    wx.showModal({
      title: '收藏',
      content: postCollect[currentPostId] ? '取消收藏?' : '是否收藏？',
      showCancel: true,
      cancelText: '取消',
      cancelColor: '#666',
      confirmText: '确定',
      confirmColor: '#000',
      success(res) {
        if (res.confirm) {
          // 对收藏操作进行缓存，调用数据缓存api
          postCollect[currentPostId] = !postCollect[currentPostId]
          wx.setStorageSync('postCollect', postCollect)
          that.setData({
            isCollect: postCollect[currentPostId]
          })
          //调用显示消息提示框api
          that.showToast(currentPostId, postCollect)
        } else {
          return
        }
      }
    })
  },
  showToast(currentPostId, postCollect) {
    wx.showToast({
      title: postCollect[currentPostId] ? '收藏成功！' : '取消成功！',
      icon: 'none',
      duration: 1000
    })
  },

  onShareTap(event) {
    var itemShareList = [
      "分享到微信朋友",
      "分享到新浪微博",
      "分享到QQ朋友"
    ]
    // 显示分享操作菜单
    wx.showActionSheet({
      itemList: itemShareList,
      itemColor: "#405f80",
      success(res) {
        console.log(res)
        wx.showModal({
          title: '用户点击了' + itemShareList[res.tapIndex],
          content: '用户想分享到' + itemShareList[res.tapIndex]
        })
      }
    })
  },

  // 实现音乐播放功能
  onMusicPlayTap() {
    var that = this
    var isPlay = this.data.isPlay
    // 获取全局的背景音频管理器
    const backgroundAudioManager = wx.getBackgroundAudioManager()
    if (isPlay) {
      backgroundAudioManager.pause()
      this.setData({
        isPlay: false
      })
    } else {
      backgroundAudioManager.play()
      backgroundAudioManager.src = this.data.postDetailData.music.url
      backgroundAudioManager.title = this.data.postDetailData.music.title
      backgroundAudioManager.coverImgUrl = this.data.postDetailData.music.coverImg
      this.setData({
        isPlay: true
      })
    }
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {
    return {
      title: '瞎玩的哈-测试'
    }
  }
})