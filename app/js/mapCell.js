function MapCell(props) {
    return React.createClass({
        render: function() {
            return (
                <div className={'map-cell text-center pull-left ' + props.type} onClick={$state.go.bind(this, "location", [props.name])}></div>
            );
        }
    })
}

module.exports = MapCell;