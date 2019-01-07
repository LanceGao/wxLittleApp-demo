/**
 * 星星评分实现
 * stars  分数
 * movieAllStar   全星图片路径
 * movieHalfStar  半星图片路径
 * movieGreyStar  灰星图片路径
 */
function movieRatingScore(stars, movieAllStar, movieHalfStar, movieGreyStar) {
  var result = []
  var stars = Math.floor(stars / 10 * 2) / 2
  var score = Math.floor(stars)
  var half = stars / 1 !== 0
  for (var i = 0; i < score; i++) {
    result.push(movieAllStar)
  }
  if (result.length < 5 && half) {
    result.push(movieHalfStar)
  }
  while (result.length < 5) {
    result.push(movieGreyStar)
  }
  return result
}

/**
 * 请求电影列表
 * url  请求url
 * callback   回调函数
 * settedKey  请求url的type
 */
function getMovieData(url, callback, settedKey) {
  wx.request({
    url: url,
    data: {},
    header: {
      'Content-Type': 'application/xml'
    },
    success(res) {
      callback(res.data, settedKey)
    },
    fail(err) {

    }
  })
}

module.exports = {
  movieRatingScore: movieRatingScore,
  getMovieData: getMovieData
}