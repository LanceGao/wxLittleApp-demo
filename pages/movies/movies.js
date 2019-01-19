var app = getApp() // 获取小程序App实例
var utils = require('../../utils/util.js')

Page({
  data: {
    inTheaters: {},
    comingSoon: {},
    top250: {},
    searchResult: {},
    containerShow: true,
    searchPanelShow: false,
    inputData: ''
  },
  onLoad() {
    // 豆瓣baseUrl
    var baseUrl = app.globalData.doubanBaseUrl
    // 各个具体接口url
    var inTheatersUrl = baseUrl + '/v2/movie/in_theaters' + '?count=3'
    var comingSoonUrl = baseUrl + '/v2/movie/coming_soon' + '?count=3'
    var top250Url = baseUrl + '/v2/movie/top250' + '?count=3'
    //请求电影列表数据
    utils.getMovieData(inTheatersUrl, this.processData, 'inTheaters')
    utils.getMovieData(comingSoonUrl, this.processData, 'comingSoon')
    utils.getMovieData(top250Url, this.processData, 'top250')
  },
  // 对获取的电影数据进行处理
  processData(data, settedKey) {
    console.log('data', data)
    var movieArr = []
    var movieInfo = {}
    var type
    // 星星图片路径
    var movieAllStar = '/images/icon/star.png'
    var movieHalfStar = '/images/icon/star_half.png'
    var movieGreyStar = '/images/icon/none-star.png'
    for (var idx in data.subjects) {
      var subject = data.subjects[idx]
      var title = subject.title
      if(title.length >= 6) {
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
    // 根据请求的电影类型 动态绑定属性
    movieInfo[settedKey] = {
      movies: movieArr,
      movieType: type
    }
    this.setData(movieInfo)
  },
  // 跳转更多电影页面
  goMoreMovie(event) {
    var movieType = event.currentTarget.dataset.movietype
    wx.navigateTo({
      url: 'movie-more/movie-more?movieType=' + movieType
    })
  },
  //点击搜索
  onBindFocus(event) {
    this.setData({
      containerShow: false,
      searchPanelShow: true
    })
  },
  // 搜索电影
  onBindConfirm(event) {
    var text = event.detail.value
    var searchUrl = app.globalData.doubanBaseUrl + '/v2/movie/search?q=' + text
    utils.getMovieData(searchUrl, this.processData, 'searchResult')
  },

  // 关闭搜索
  searchClose(event) {
    console.log('show')
    this.setData({
      containerShow: true,
      searchPanelShow: false,
      searchResult: {},
      inputData: '' //关闭搜索结果后把搜索按钮内容清空
    })
  }
})