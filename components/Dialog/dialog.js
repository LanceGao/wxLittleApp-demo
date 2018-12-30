// components/Dialog/dialog.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    propA: {
      type: String,
      value: '6666'
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    isShow: false,
    title: 'ready',
    content: '学习自定义组件',
    cancelText: '取消',
    confirmText: '确定'
  },

  /**
   * 组件的方法列表
   */
  methods: {
    _cancelEvent() {
      this.hide()
      // this.triggerEvent('cancelEvent')
    },
    _confirmEvent() {
      this.hide()
      // this.triggerEvent('confirmEvent')
    },
    hide() {
      this.setData({
        isShow: !this.data.isShow
      })
    }
  }
})
