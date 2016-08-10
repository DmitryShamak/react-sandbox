function MapCell() {
    return React.createClass({
        render: function() {
            return (
                <div className="map-cell text-center col-xs-4">
                    <h2>Cell</h2>
                </div>
            );
        }
    })
}

module.exports = MapCell;