var router = {
    go: function(state, params) {
        if(router.current() != state) {
            return window.location.href = "/" + state + (params && params.length ? "/" + params.toString().replace(/\,/g, "/") : "");
        }

        switch(state) {
            case "landing":
                //app.clear();

                //app.landing.render();
                break;
            case "map":
                //app.clear();

                //app.map.render();
                //app.user.create();
                break;
            case "location":
                //app.clear();

                //app.location.generate();
                //app.user.create();
                break;
            default:
                router.go("landing");
                break;
        }
    },
    getUrlParams: function() {
        return window.location.pathname.split("/").filter(function(state) { return !!state; });
    },
    userRequired: function(state) {
        var requiredStates = ["map", "location"];

        return requiredStates.indexOf(state) != -1;
    },
    current: function() {
        return router.getUrlParams()[0];
    }
};

module.exports = router;