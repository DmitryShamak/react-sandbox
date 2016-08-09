var MapCell = require("./mapCell.js");

function Map() {
    var container = document.createElement("div");
        container.id = "map";

    var self = this;
    var map = [];

    var Component = React.createClass({
        render: function() {
            return (
                <div>{
                    map.map(function(props) {
                        var MapCellComponent = new MapCell(props);
                        return < MapCellComponent />
                    })
                }</div>
            );
        }
    });

    var init = function() {
        ReactDOM.render(
            <Component />,
            container
        );

        document.body.appendChild(container);
    };

    self.addCell = function() {
        map.push({
            //todo: props
        });
    };

    self.generate = function() {
        self.addCell();

        init();
        console.log("map generated");
    };

}

module.exports = new Map();