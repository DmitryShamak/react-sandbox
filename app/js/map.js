var MapCell = require("./mapCell.js");

function Map() {
    var container = document.createElement("div");
    container.id = "map-canvas";

    container.className = "no-selection";

    var self = this,
        isMounted;
    var map = [];

    var Component = React.createClass({
        render: function() {
            return (
                <div>
                    <div className="navigation text-center">
                        <span className="btn" onClick={$state && $state.go.bind(self, "landing")}>Landing</span>
                    </div>
                    {
                        map.map(function(props) {
                            var MapCellComponent = new MapCell(props);
                            return < MapCellComponent />
                        })
                    }
                </div>
            );
        }
    });

    var init = function() {
        ReactDOM.render(
            <Component className="row" />,
            container
        );

        isMounted = true;
        document.body.appendChild(container);
    };

    self.addCell = function() {
        map.push({
            //todo: props
        });
    };

    self.location = {
        open: function() {}
    };

    self.remove = function() {
        if(!isMounted) {
            return;
        }

        isMounted = false;
        ReactDOM.unmountComponentAtNode(container);
        document.body.removeChild(container);
    };

    self.generate = function() {
        map = [];

        for(var i=0; i<27; i++) {
            self.addCell();
        }

        init();
        console.log("map generated");
    };

}

module.exports = new Map();