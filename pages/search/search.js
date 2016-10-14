Page({
    data: {
        // text:"这是一个页面"
        buttonDisable: true,
        searchText: "",
        searchHistory: []

    },
    onLoad: function (options) {
        // 页面初始化 options为页面跳转所带来的参数
        var history = wx.getStorageSync('sHistory') || [];
        this.setData({
            searchHistory:history
        })
    },

    //监听文本输入
    onTextInput: function (event) {
        console.log("input", event.detail.value);
        if (event.detail.value.length > 0) {
            this.setData({
                searchText: event.detail.value,
                buttonDisable: false


            })
        } else {
            this.setData({
                buttonDisable: true
            })
        }

    },
    // 监听按键点击
    onSearchClick: function (event) {
        var that=this;
        saveSearchHistory(that,this.data.searchText);
        toSearchResult(this.data.searchText);

    },
    // 历史标签相应事件
    onNavToResult:function (event) {
        toSearchResult(event.currentTarget.dataset.text)
    },

})
//保存收索历史
function saveSearchHistory(that,searchText) {

    var history = wx.getStorageSync('sHistory') || [];
    history.unshift(searchText);
    wx.setStorageSync('sHistory', history);
    that.setData({
        searchHistory:history
    })

}
//跳转搜索结果页
function toSearchResult(searchtext) {
    wx.navigateTo({
        url:'../searchresultpanel/searchresultpanel?mName='+searchtext
    })

}