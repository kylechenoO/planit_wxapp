//index.js
//获取应用实例
const app = getApp()

Page({
  recycleViewTap: function () {
    wx.navigateTo({
      url: '../recycle/recycle'
    })
  },
  purchaseViewTap: function () {
    wx.navigateTo({
      url: '../purchase/purchase'
    })
  }
})
