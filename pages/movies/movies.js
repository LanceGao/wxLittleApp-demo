Page({
  data: {

  },
  onLoad() {
    wx.request({
      url: 'http://t.yushu.im/v2/movie/top250',
      data: {},
      method: 'GET',
      header: {
        "Content-Type": "application/json"
      },
      success(res) {
        console.log('success', res)
      },
      fail(err) {
        console.log('err', err)
      }
    })
  }
})