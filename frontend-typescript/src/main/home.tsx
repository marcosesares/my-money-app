import React, { Component } from "react";
import axios from "axios";
import { connect } from "react-redux";
import { AnyAction, bindActionCreators, Dispatch } from "redux";

import App from "./app";
import { validateToken } from "../auth/authActions";
import "../common/template/dependencies";
import { AuthForm } from "../auth/authContainer";

interface HomeProps {
  validateToken: (token: string) => void;
  auth: {
    user: {
      token: string;
    };
    validToken: boolean;
  };
}

class Home extends Component<HomeProps> {
  componentDidMount() {
    if (this.props.auth.user) {
      this.props.validateToken(this.props.auth.user.token);
    }
  }

  render() {
    const { user, validToken } = this.props.auth;
    if (user && validToken) {
      axios.defaults.headers.common["authorization"] = user.token;
      return <App />;
    }
    if (!user && !validToken) {
      return <AuthForm />;
    }
    return false;
  }
}

const mapStateToProps = (state: HomeProps) => ({
  auth: state.auth,
  validToken: state.auth.validToken,
});

const mapDispatchToProps = (dispatch: Dispatch<AnyAction>) =>
  bindActionCreators({ validateToken }, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(Home);
