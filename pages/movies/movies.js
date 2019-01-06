var app = getApp() // 获取小程序App实例
var utils = require('../../utils/util.js')

Page({
  data: {
    inTheaters: {},
    comingSoon: {},
    top250: {}
  },
  onLoad() {
    // 豆瓣baseUrl
    var baseUrl = app.globalData.doubanBaseUrl
    // 各个具体接口url
    var inTheatersUrl = baseUrl + '/v2/movie/in_theaters' + '?count=3'
    var comingSoonUrl = baseUrl + '/v2/movie/coming_soon' + '?count=3'
    var top250Url = baseUrl + '/v2/movie/top250' + '?count=3'
    //数据请求
    this.getMovieListData(inTheatersUrl, 'inTheaters')
    this.getMovieListData(comingSoonUrl, 'comingSoon')
    this.getMovieListData(top250Url, 'top250')
  },
  // 获取电影数据
  getMovieListData(url, settedKey) {
    var that = this
    wx.request({
      url: url,
      method: 'GET',
      header: {
        "Content-Type": "application/json"
      },
      success(res) {
        console.log('success', res)
        // 对获取的电影数据进行处理
        that.processData(res.data, settedKey)
      },
      fail(err) {
        console.log('err', err)
      }
    })
  },
  // 对获取的电影数据进行处理
  processData(data, settedKey) {
    var arr = []
    var movieInfo = {}
    var type
    // 星星图片路径
    var movieAllStar = '/images/icon/star.png'
    var movieHalfStar = '/images/icon/star_half.png'
    var movieGreyStar = '/images/icon/none-star.png'
    for (var idx in data.subjects) {
      var result = []
      var subject = data.subjects[idx]
      var title = subject.title
      if(title.length >= 6) {
        title = title.substring(0, 6) + '...'
      }
      // 提取页面要使用的数据
      var movieCoverImg = subject.images.large
      var movieScore = subject.rating.average
      var movieId = subject.id
      var movieStar = utils.movieRatingScore(subject.rating.stars, movieAllStar, movieHalfStar, movieGreyStar)

      var temp = {
        title: title,
        movieCoverImg: movieCoverImg,
        movieId: movieId,
        movieScore: movieScore,
        movieStar: movieStar
      }
      arr.push(temp)
    }
    // 根据请求的电影类进行数据映射
    switch (settedKey) {
      case 'inTheaters':
        type = '正在热映';
        break;
      case 'comingSoon':
        type = '即将上映';
        break;
      case 'top250':
        type = '豆瓣top250';
        break;
    }
    // 根据请求的电影类型动态绑定属性
    movieInfo[settedKey] = {
      movies: arr,
      movieType: type
    }
    console.log('movieInfo', movieInfo)
    this.setData(movieInfo)
  }
})