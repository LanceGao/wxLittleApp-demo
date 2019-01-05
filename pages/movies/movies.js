var app = getApp()

Page({
  data: {
    movieItem: [
      "正在热映",
      "即将热映",
      "top250"
    ],
    movieInfoList: []
  },
  onLoad() {
    var baseUrl = app.globalData.doubanBaseUrl
    var inTheatersUrl = baseUrl + '/v2/movie/in_theaters' + '?count=3'
    var comingSoonUrl = baseUrl + '/v2/movie/coming_soon' + '?count=3'
    var top250Url = baseUrl + '/v2/movie/top250' + '?count=3'
    this.getMovieListData(comingSoonUrl)
  },
  getMovieListData(url) {
    var that = this
    wx.request({
      url: url,
      method: 'GET',
      header: {
        "Content-Type": "application/json"
      },
      success(res) {
        console.log('success', res)
        that.processData(res.data)
      },
      fail(err) {
        console.log('err', err)
      }
    })
  },
  processData(data) {
    console.log(data)
    var arr = []
    for (var idx in data.subjects) {
      var subject = data.subjects[idx]
      var title = subject.title
      if(title.length >= 6) {
        title = title.substring(0, 6) + '...'
      }
      var movieCoverImg = subject.images.large
      var movieScore = subject.rating.average
      var movieId = subject.id
      var temp = {
        title: title,
        movieCoverImg: movieCoverImg,
        movieId: movieId,
        movieScore: movieScore
      }
      arr.push(temp)
    }
    console.log(arr)
    this.setData({
      movieInfoList: arr
    })
  }
})