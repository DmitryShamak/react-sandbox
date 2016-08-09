function User() {
    var container = document.createElement("div");
        container.id = "user";

    var self = this;

    var Component = React.createClass({
        render: function() {
            return (
                <h2>USER</h2>
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

    self.create = function() {
        init();
        console.log("user created");
    }
}

module.exports = new User();