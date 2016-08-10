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

    self.render = function() {
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

module.exports = new Location();