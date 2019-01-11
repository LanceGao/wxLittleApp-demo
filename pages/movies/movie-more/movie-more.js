// pages/movies/movie-more/movie-more.js
var app = getApp()
var utils = require('../../../utils/util.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    navigateBarTitle: '', //导航栏title
    movies: [],
    requestUrl: '',
    totalCount: 0,
    isEmpty: true
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options.movieType)
    var url = ''
    var baseUrl = app.globalData.doubanBaseUrl
    var movieType = options.movieType
    this.setData({
      navigateBarTitle: movieType
    })
    // 根据电影类型配置请求url
    switch(movieType) {
      case '正在热映':
        url = baseUrl + '/v2/movie/in_theaters';
        break;
      case '即将上映':
        url = baseUrl + '/v2/movie/coming_soon';
        break;
      case '豆瓣top250':
        url = baseUrl + '/v2/movie/top250';
        break;
    }
    // 因为不涉及视图层的渲染，可以使用this.data.来改变值
    this.data.requestUrl = url
    // this.setData({
    //   requestUrl: url
    // })
    // 请求电影列表
    utils.getMovieData(url, this.processData)
  },
  // 对返回的电影列表进行处理
  processData(data) {
    console.log('data', data)
    if (data.subjects.length == 0) {
      console.log('没有更多了！')
      wx.showToast({
        title: '没有更多了！',
        icon: 'none'
      })
      return
    }
    var movieArr = []
    var totalMovies = {}
    // 星星图片路径
    var movieAllStar = '/images/icon/star.png'
    var movieHalfStar = '/images/icon/star_half.png'
    var movieGreyStar = '/images/icon/none-star.png'
    for (var idx in data.subjects) {
      var subject = data.subjects[idx]
      var title = subject.title
      if (title.length >= 6) {
        title = title.substring(0, 6) + '...'
      }
      // 提取页面要使用的数据
      var temp = {
        title: title,
        movieCoverImg: subject.images.large,
        movieId: subject.id,
        movieScore: subject.rating.average,
        movieStar: utils.movieRatingScore(subject.rating.stars, movieAllStar, movieHalfStar, movieGreyStar)
      }
      movieArr.push(temp)
    }
    if(this.data.isEmpty) {
      totalMovies = movieArr
      this.data.isEmpty = false
    } else {
      totalMovies = this.data.movies.concat(movieArr)
    }
    this.setData({
      movies: totalMovies
    })

    this.data.totalCount += 20
    console.log('movies', this.data.movies)
  },

  crollToLower(event) {
    var nextUrl = this.data.requestUrl + '?start=' + this.data.totalCount + '&count=20'
    utils.getMovieData(nextUrl, this.processData)
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    // 设置导航栏
    //这里导航栏没在onLoad生命周期函数里设置
    //因为对界面内容进行设置的api要在onReady后进行
    wx.showNavigationBarLoading()
    wx.setNavigationBarTitle({
      title: this.data.navigateBarTitle
    })
    wx.hideNavigationBarLoading()
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