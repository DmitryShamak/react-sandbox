var app = {
    init: function() {
        ReactDOM.render(
            <h2>Hello</h2>,
            document.getElementById("content")
        );
    },
    map: require("./js/map.js")
};

$(document).ready(app.init);