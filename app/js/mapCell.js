function MapCell(props, parent) {
    return React.createClass({
        getInitialState: function() {
          return {
              data: props,
              parent: parent
          }
        },
        render: function() {
            return (
                <div className={'map-cell text-center pull-left ' + this.state.data.type}
                     onClick={this.state.parent.router.go.bind(this, "location", [this.state.data.name])}></div>
            );
        }
    })
}

module.exports = MapCell;