var styles = require("./style/main.scss");

window.$state = {
    go: function(state, params) {
        if($state.current() != state) {
            return window.location.href = "/" + state + (params && params.length ? "/" + params.toString().replace(/\,/g, "/") : "");
        }

        switch(state) {
            case "landing":
                app.clear();

                app.landing.render();
                break;
            case "map":
                app.clear();

                app.map.render();
                app.user.create();
                break;
            case "location":
                app.clear();

                app.map.location.render();
                app.user.create();
                break;
            default:
                $state.go("landing");
                break;
        }
    },
    getUrlParams: function() {
        return window.location.pathname.split("/").filter(function(state) { return !!state; });
    },
    current: function() {
        return $state.getUrlParams()[0];
    }
};

var app = {
    clear: function() {
        app.landing.remove();
        app.map.remove();
        app.user.remove();
    },
    init: function() {
        var currentState = $state.current();
        $state.go(currentState);
    },
    landing: require("./js/landing.js"),
    map: require("./js/map.js"),
    user: require("./js/user.js")
};

$(document).ready(app.init);