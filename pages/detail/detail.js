var getData = require("getDetail.js")

Page({
    data: {
        // text:"这是一个页面"
    },
    onLoad: function (options) {
        // 页面初始化 options为页面跳转所带来的参数
        var that=this;
        getData.getDetails(that,options.mName)
    }
})