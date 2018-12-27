Page({
  data: {
    post_content: []
  },
  onLoad(options) {
    //页面初始化 options为页面跳转所带的参数
    var post_content = [{
      date: "Sep 23 2018",
      title: "正是虾肥蟹壮时",
      post_img: "/images/post/crab.png",
      author_img: "/images/avatar/1.png",
      content: "页面的只能设置 window 相关的配置项，以决定本页面的窗口表现，所以无需写 window 这个属性。",
      view_num: "112"
    },{
        date: "Sep 02 2017",
        title: "猫和老鼠",
        post_img: "/images/post/cat.png",
        author_img: "/images/avatar/3.png",
        content: "同时 wx:if 也是惰性的，如果在初始渲染条件为 false，框架什么也不做，在条件第一次变成真的时候才开始局部渲染。相比之下，hidden 就简单的多，组件始终会被渲染，只是简单的控制显示与隐藏",
        view_num: "52"
      }, {
        date: "Nov 28 2017",
        title: "比利.琳恩",
        post_img: "/images/post/bl.png",
        author_img: "/images/avatar/2.png",
        content: "data是页面第一次渲染使用的初始数据。页面加载时，data以JSON的形式由逻辑层传到渲染层，渲染层可以通过WXML对数据进行绑定。（data必须是可以转换成JSON的类型：字符串，数字，布尔值，数组，对象）",
        view_num: "82"
      }, {
        date: "Oct 21 2017",
        title: "儿时回忆",
        post_img: "/images/post/sls.JPG",
        author_img: "/images/avatar/6.png",
        content: "Page(object)函数用来注册一个页面。接受一个object参数，其指定页面的初始数据、生命周期回调，事件处理函数等。",
        view_num: "52"
      }, {
        date: "Sep 02 2017",
        title: "微信之父",
        post_img: "/images/post/xiaolong.jpg",
        author_img: "/images/avatar/5.png",
        content: "同时 wx:if 也是惰性的，如果在初始渲染条件为 false，框架什么也不做，在条件第一次变成真的时候才开始局部渲染。相比之下，hidden 就简单的多，组件始终会被渲染，只是简单的控制显示与隐藏",
        view_num: "252"
      }, {
        date: "Sep 02 2017",
        title: "体验vr",
        post_img: "/images/post/vr.png",
        author_img: "/images/avatar/4.png",
        content: "同时 wx:if 也是惰性的，如果在初始渲染条件为 false，框架什么也不做，在条件第一次变成真的时候才开始局部渲染。相比之下，hidden 就简单的多，组件始终会被渲染，只是简单的控制显示与隐藏",
        view_num: "52"
      }]
    this.setData({
      post_content: post_content
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