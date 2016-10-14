var netUtils = require("../../utils/netUtil");

function getDetails(that, mName) {
    netUtils.requestData("video", "q=" + mName).then(res => {
        console.log(res);

},
    err =>
    {

    }
)
    ;


}
module.exports = {
    getDetails: getDetails
}