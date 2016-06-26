var ActionComponent = React.createClass({
    getInitialState: function() {
      return {
          selectedAction: null,
          availableActions: []
        };
    },
    render: function() {
        return <div className="wrapper">wrapper</div>;
    }
});

ReactDom.render(
   <ActionComponent />,
   document.getElementById("container")
);