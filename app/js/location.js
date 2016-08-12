function Location() {
    var container = document.createElement("div");
        container.id = "location-canvas";

    var self = this;
    var isMounted = false;

    var Component = React.createClass({
        render: function() {
            return (
                <div className="location">
                    <div className="navigation text-center">
                        <span className="btn" onClick={$state && $state.go.bind(self, "map")}>Map</span>
                    </div>
                </div>
            );
        }
    });

    self.generate = function() {
        ReactDOM.render(
          <Component />,
          container
        );

        isMounted = true;
        document.body.appendChild(container);
    };

    self.remove = function() {
        if(!isMounted) {
            return;
        }

        isMounted = false;
        ReactDOM.unmountComponentAtNode(container);
        document.body.removeChild(container);
    };
}

module.exports = React.createClass({
    getInitialState: function() {
        var self = this;

        setTimeout(function() {  self.setState({'busy':  false}); }, self.props.parent.faker.getDelay());

        return {
            busy: true
        };
    },
    render: function() {
        var self = this;
        var TEMP = this.state.busy ? <div className="module-location busy"></div> : <div className="module-location stone"></div>;
        return (
            <div className="module">
                <div className="navigation text-center">
                    <div className="form-control fixed-xs-width btn" onClick={this.props.parent.router.go.bind(self, "map")}>Map</div>
                </div>
                { TEMP }
            </div>
        );
    }
});