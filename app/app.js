var styles = require("./style/main.scss");

var App = React.createClass({
    getInitialState: function() {
        var self = this;
        return {
            clear: function() {
                //app.landing.remove();
                //app.map.remove();
                //app.user.remove();

                self.setState({ activeState:  self.state.router.current() || "landing" });
            },
            faker: require("./js/faker.js"),
            router: require("./js/router.js"),
            landing: require("./js/landing.js"),
            map: require("./js/map.js"),
            location: require("./js/location.js"),
            user: require("./js/user.js")
        }
    },
    render: function() {
        var APP_TEMP = (<div id="app-canvas"></div>);
        var state = this.state.router.current();
        var ActiveClass = this.state[state];

        if(!ActiveClass) {
            this.state.router.go("landing", null, this.state);
        }

        if(!state || !this.state.router.auth()) {
            this.state.router.go(null, null, this.state);

            return APP_TEMP;
        }

        var userRequired = this.state.router.userRequired(state);

        if(userRequired) {
            var User = this.state.user;
        }

        APP_TEMP = (<div id="app-canvas">
            < ActiveClass parent={this.state} />
            { userRequired && < User /> }
        </div>);

        return APP_TEMP;
    }

});

$(document).ready(function() {
    var content = document.getElementById("content");

    ReactDOM.render(
        <App id={"app-canvas"} />,
        content
    );
});