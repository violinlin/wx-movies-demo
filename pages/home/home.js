var getData = require("getMovies.js");
Page({
    data: {
        // text:"这是一个页面"
        title: "",
        //banner参数设置
        bannerItems: [],
        indicatorDots: true,
        vertical: false,
        autoplay: true,
        interval: 3000,
        duration: 1200,
        //列表设置
        pageTitle: "",
        hideLoading: false,
        tabTitles: [],
        bodyHeight: 0,
        lineWidth: 0,
        lineLeft: 0,
        currentPage: 0,
        tabPages: []


    },
    onLoad: function (options) {
        // 页面初始化 options为页面跳转所带来的参数
        var that = this;
        getData.getMovies(that, "北京");
        wx.getSystemInfo({
            success: function (res) {
                var height = res.windowHeight;
                that.setData({
                    bodyHeight: height
                })
            }
        })

    },
    onBannerClick: function (event) {
        console.log("banner", event.currentTarget.dataset.name);
        wx.navigateTo({
            url:"../detail/detail?mName="+event.currentTarget.dataset.name
        });
    },
    onPageChange: function (event) {

        var cPage = event.detail.current;
        var tabLength = this.data.tabTitles.length;
        var lineLeft = cPage * (100 / tabLength)
        var data = {lineLeft: lineLeft};
        for (var i = 0; i < tabLength; i++) {
            data['tabTitles[' + i + '].bColor'] = "#000000";
        }
        data['tabTitles[' + cPage + '].bColor'] = '#24B0FC';
        this.setData(data);


    },
    onTitleClick: function (event) {

        var index = event.currentTarget.dataset.index;
        this.setData({
            currentPage: index
        })


    },
    onReady: function () {
        // 页面渲染完成
    },
    onShow: function () {
        // 页面显示
    },
    onHide: function () {
        // 页面隐藏
    },
    onUnload: function () {
        // 页面关闭
    }
})