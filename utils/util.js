// 星星评分实现
function movieRatingScore(stars, movieAllStar, movieHalfStar, movieGreyStar) {
  var result = []
  var stars = Math.floor(stars/10 * 2)/2
  var score = Math.floor(stars)
  var half = stars/1 !== 0
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

module.exports = {
  movieRatingScore: movieRatingScore
}