var localData = [{
  date: "Sep 23 2018",
  title: "正是虾肥蟹壮时",
  imgSrc: "/images/post/crab.png",
  avatar: "/images/avatar/1.png",
  content: "页面的只能设置 window 相关的配置项，以决定本页面的窗口表现，所以无需写 window 这个属性。",
  reading: "112",
  collection: "80",
  postId: 0,
  headImgSrc: "/images/post/crab.png",
  author: "小白菜",
  dateTime: "2天前",
  detail: "data是页面第一次渲染使用的初始数据。页面加载时，data以JSON的形式由逻辑层传到渲染层，渲染层可以通过WXML对数据进行绑定。（data必须是可以转换成JSON的类型：字符串，数字，布尔值，数组，对象）"
}, {
  date: "Sep 02 2017",
  title: "猫和老鼠",
  imgSrc: "/images/post/cat.png",
  avatar: "/images/avatar/3.png",
  content: "同时 wx:if 也是惰性的，如果在初始渲染条件为 false，框架什么也不做，在条件第一次变成真的时候才开始局部渲染。相比之下，hidden 就简单的多，组件始终会被渲染，只是简单的控制显示与隐藏",
  reading: "52",
  collection: "43",
  postId: 1,
    headImgSrc: "/images/post/cat.png",
  author: "小家快乐",
  dateTime: "1天前",
    detail: "如果在onLoad方法中，不是异步的对一个数据绑定，则不需要使用this.setData()方法，只需使用this.data. 赋值即可实现数据绑定"
}, {
  date: "Nov 28 2017",
  title: "比利.琳恩",
  imgSrc: "/images/post/bl.png",
  avatar: "/images/avatar/3.png",
  author_img: "/images/avatar/2.png",
  content: "data是页面第一次渲染使用的初始数据。页面加载时，data以JSON的形式由逻辑层传到渲染层，渲染层可以通过WXML对数据进行绑定。（data必须是可以转换成JSON的类型：字符串，数字，布尔值，数组，对象）",
  reading: "82",
  collection: "89",
  postId: 2,
  headImgSrc: "/images/post/bl.png",
    author: "琳恩",
  dateTime: "4天前",
  detail: "data是页面第一次渲染使用的初始数据。页面加载时，data以JSON的形式由逻辑层传到渲染层，渲染层可以通过WXML对数据进行绑定。（data必须是可以转换成JSON的类型：字符串，数字，布尔值，数组，对象）"
}, {
  date: "Oct 21 2017",
  title: "儿时回忆",
  imgSrc: "/images/post/sls.JPG",
  avatar: "/images/avatar/2.png",
  content: "Page(object)函数用来注册一个页面。接受一个object参数，其指定页面的初始数据、生命周期回调，事件处理函数等。",
  reading: "52",
  collection: "93",
  postId: 3,
    headImgSrc: "/images/post/sls.JPG",
  author: "白菜",
  dateTime: "2天前",
  detail: "data是页面第一次渲染使用的初始数据。页面加载时，data以JSON的形式由逻辑层传到渲染层，渲染层可以通过WXML对数据进行绑定。（data必须是可以转换成JSON的类型：字符串，数字，布尔值，数组，对象）"
}, {
  date: "Sep 02 2017",
  title: "微信之父",
  imgSrc: "/images/post/xiaolong.jpg",
  avatar: "/images/avatar/5.png",
  content: "同时 wx:if 也是惰性的，如果在初始渲染条件为 false，框架什么也不做，在条件第一次变成真的时候才开始局部渲染。相比之下，hidden 就简单的多，组件始终会被渲染，只是简单的控制显示与隐藏",
  reading: "252",
  collection: "73",
  postId: 4,
    headImgSrc: "/images/post/xiaolong.jpg",
    author: "微信之父",
  dateTime: "2天前",
  detail: "data是页面第一次渲染使用的初始数据。页面加载时，data以JSON的形式由逻辑层传到渲染层，渲染层可以通过WXML对数据进行绑定。（data必须是可以转换成JSON的类型：字符串，数字，布尔值，数组，对象）"
}, {
  date: "Sep 02 2017",
  title: "体验vr",
  imgSrc: "/images/post/vr.png",
  avatar: "/images/avatar/4.png",
  content: "同时 wx:if 也是惰性的，如果在初始渲染条件为 false，框架什么也不做，在条件第一次变成真的时候才开始局部渲染。相比之下，hidden 就简单的多，组件始终会被渲染，只是简单的控制显示与隐藏",
  reading: "52",
  collection: "28",
  postId: 5,
  headImgSrc: "/images/post/vr.png",
    author: "体验vr",
  dateTime: "1天前",
  detail: "data是页面第一次渲染使用的初始数据。页面加载时，data以JSON的形式由逻辑层传到渲染层，渲染层可以通过WXML对数据进行绑定。（data必须是可以转换成JSON的类型：字符串，数字，布尔值，数组，对象）"
}]

module.exports = {
  postList: localData
}