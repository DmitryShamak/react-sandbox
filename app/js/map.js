var MapCell = require("./mapCell.js");

var faker = {
    getRandomType: function() {
        var rand = Math.floor(Math.random() * 4);
        var type = "";

        switch(rand) {
            case 0:
                type = "stone";
                break;
            case 1:
                type = "ice";
                break;
            case 2:
                type = "lava";
                break;
            default:
                type = "grass";
                break;
        }

        return type;
    }
};

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
                    <div class="clearfix">{
                        map.map(function(props) {
                            var MapCellComponent = new MapCell(props);
                            return < MapCellComponent />
                        })
                    }</div>
                </div>
            );
        }
    });

    self.render = function() {
        if(!map || !map.length) {
            return self.generate();
        }

        ReactDOM.render(
            <Component className="row" />,
            container
        );

        isMounted = true;
        document.body.appendChild(container);
    };

    self.addCell = function(props) {
        var land = $.extend(props, {
            type: faker.getRandomType()
        });
        map.push(land);
    };

    self.location = require("./location.js");

    self.remove = function() {
        if(!isMounted) {
            return;
        }

        isMounted = false;
        ReactDOM.unmountComponentAtNode(container);
        document.body.removeChild(container);
    };

    self.generate = function() {
        map = JSON.parse(localStorage.getItem("map"));

        if(map) {
            return self.render();
        }

        map = [];
        for(var i=0; i<25; i++) {
            self.addCell({name: "land-"+i});
        }

        localStorage.setItem("map", JSON.stringify(map));

        return self.render();
    };

}

module.exports = new Map();