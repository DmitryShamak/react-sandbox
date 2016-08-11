var styles = require("./style/main.scss");

var App = React.createClass({
    getInitialState: function() {
        return {
            clear: function() {
                //app.landing.remove();
                //app.map.remove();
                //app.user.remove();
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
        var state = this.state.router.current();
        if(!state) {
            return this.state.router.go();
        }

        var ActiveClass = this.state[state];
        var User = this.state.user;
        var userRequired = this.state.router.userRequired(state);

        return (<div id="app-canvas">
            < ActiveClass parent={this.state} />
            { userRequired && < User /> }
        </div>);
    }

});

$(document).ready(function() {
    var content = document.getElementById("content");

    ReactDOM.render(
        <App id={"app-canvas"} />,
        content
    );
});