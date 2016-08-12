function Landing() {
    var container = document.createElement("div");
        container.id = "landing-canvas";

    var self = this,
        isMounted;

    var form = {};

    self.signIn = function() {
        if(!form.email || !form.email.valid || !form.password || !form.password.valid) {
            return;
        }

        form = {};
        $state && $state.go("map");
    };

    function onChange(key, event) {
        var target = event.target;
        var value = target.value.trim();
        var valid = value != "";

        $(target).removeClass("invalid");

        form[key] = {
            valid: valid,
            value: value,
            target: target
        };

        if(!valid) {
            $(target).addClass("invalid");
        }

        target.value = value;
        return value;
    }

    var Component = React.createClass({
        render: function() {
            return (
                <div className="account no-selection text-center margin-top-sm">
                    <h2>Landing</h2>

                    <div className="fixed-xs-width">
                        <div className="form-group">
                            <input className="form-control" type="text" onChange={onChange.bind(this, "email")} placeholder="email" />
                        </div>
                        <div className="form-group">
                            <input className="form-control" type="password" onChange={onChange.bind(this, "password")} placeholder="password" />
                        </div>
                        <div className="btn form-control" onClick={self.signIn}>Sign In</div>
                    </div>
                </div>
            );
        }
    });

    var init = function() {
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

    self.render = function() {
        init();
        console.log("Landing rendered");
    }
}

module.exports = React.createClass({
    getInitialState: function() {
      return {
        form: {},
        onchange: function(key, event) {
            var target = event.target;
            var value = target.value.trim();
            var valid = value != "";
            var form = this.state.form;

            $(target).removeClass("invalid");

            form[key] = {
                valid: valid,
                value: value,
                target: target
            };

            if(!valid) {
                $(target).addClass("invalid");
            }

            target.value = value;
            return value;
        },
        signin: function() {
            var form = this.state.form;
            if(!form.email || !form.email.valid || !form.password || !form.password.valid) {
                return;
            }

            localStorage.setItem("user", JSON.stringify({
                email: form.email.value
            }));

            form = {};
            this.props.parent.router.go.call(this, "map");
        }
      }
    },
    render: function() {
        localStorage.removeItem("user");

        return (
            <div className="account no-selection text-center module-account">
                <h2>Landing</h2>

                <div className="fixed-xs-width">
                    <div className="form-group">
                        <input className="form-control" type="text" onChange={this.state.onchange.bind(this, "email")} placeholder="email" />
                    </div>
                    <div className="form-group">
                        <input className="form-control" type="password" onChange={this.state.onchange.bind(this, "password")} placeholder="password" />
                    </div>
                    <div className="btn form-control" onClick={this.state.signin.bind(this)}>Sign In</div>
                </div>
            </div>
        );
    }
});