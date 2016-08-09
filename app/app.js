var styles = require("./style/main.scss");

var app = {
    init: function() {
        app.map.generate();
        app.user.create();
    },
    map: require("./js/map.js"),
    user: require("./js/user.js")
};

$(document).ready(app.init);