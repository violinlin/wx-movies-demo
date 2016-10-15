/**
 * Created by violin on 2016/10/14.
 */
// 获取电影信息
var netUtils = require("../../utils/netUtil");
function getMovies(that, cName) {
    netUtils.requestData("pmovie", "city=" + cName).then(res => {
        console.log(res);
    var tabTitles = [];
    var tabPages = [];
    var title = res.result.title;
    for (var i = 0; i < res.result.data.length; i++) {
        var d1 = res.result.data;
        tabTitles.push({
            title: d1[i].name,
            bColor: "#000"
        });
        var page = [];
        for (var j = 0; j < d1[i].data.length; j++) {
            var d2 = d1[i].data;
            page.push({
                grade: d2[j].grade,
                icon: d2[j].iconaddress,
                name: d2[j].tvTitle,
                subHead: d2[j].subHead

            })
        }
        tabPages.push(page);
    }
    tabTitles[0].bColor = "#24B0FC";

    var lineWidth=100/tabTitles.length;
    that.setData({
        hideLoading: true,
        title: title,
        tabTitles: tabTitles,
        tabPages: tabPages,
        lineWidth:lineWidth
    })

},
    e =>
    {
        hideLoading:true,
            console.log(e)

    }
)
    ;

}
module.exports = {
    getMovies: getMovies
}