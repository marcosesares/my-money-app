import React, { Component } from "react";
import { connect } from "react-redux";
import { AnyAction, bindActionCreators, Dispatch } from "redux";
import { logout } from "../../auth/authActions";

interface NavbarProps {
  logout: () => { type: string; payload: boolean };
  user: {
    name: string;
    email: string;
  };
}
interface NavbarState {
  open: boolean;
  auth: {
    user: {
      name: string;
      email: string;
    };
  };
}

class Navbar extends Component<NavbarProps, NavbarState> {
  constructor(props: NavbarProps) {
    super(props);
    this.state = {
      open: false,
      auth: { user: { name: props.user.name, email: props.user.email } },
    };
  }
  changeOpen() {
    this.setState({ open: !this.state.open });
  }
  render() {
    const { name, email } = this.props.user;
    return (
      <div className="navbar-custom-menu">
        <ul className="nav navbar-nav">
          <li
            onMouseLeave={() => this.changeOpen()}
            className={`dropdown user user-menu ${
              this.state.open ? "open" : ""
            }`}
          >
            <button
              onClick={() => this.changeOpen()}
              aria-expanded={this.state.open ? "true" : "false"}
              className="dropdown-toggle link-button"
              data-toggle="dropdown"
            >
              <img
                src="http://lorempixel.com.br/160/160/abstract"
                className="user-image"
                alt="User"
              />
              <span className="hidden-xs">{name}</span>
            </button>
            <ul className="dropdown-menu">
              <li className="user-header">
                <img
                  src="http://lorempixel.com.br/160/160/abstract"
                  className="img-circle"
                  alt="User"
                />
                <p>
                  {name}
                  <small>{email}</small>
                </p>
              </li>
              <li className="user-footer">
                <div className="pull-right">
                  <button
                    onClick={this.props.logout}
                    className="btn btn-default btn-flat"
                  >
                    Logout
                  </button>
                </div>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    );
  }
}
const mapStateToProps = (state: NavbarState) => ({
  user: state.auth.user,
  open: state.open,
});
const mapDispatchToProps = (dispatch: Dispatch<AnyAction>) =>
  bindActionCreators({ logout }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
