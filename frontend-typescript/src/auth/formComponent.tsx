import { Field, InjectedFormProps, reduxForm } from "redux-form";
import Messages from "../common/messages/messages";
import Row from "../common/layout/row";
import Grid from "../common/layout/grid";
import { MY, MONEY } from "../common/constants/constants";
import {
  WELCOME,
  REGISTER_OPTION,
  LOGIN_OPTION,
} from "../common/constants/messageConstants";
import Input from "../common/form/inputAuth";

export interface IFormProps {
  name: string;
  email: string;
  password: string;
  confirm_password: string;
}

export interface IDispatchProps {
  login: (values: string[]) => any;
  signup: (values: string[]) => any;
}

const Component = (
  props: IDispatchProps & InjectedFormProps<IFormProps, IDispatchProps>
) => {
  const state = { loginMode: true };

  function changeMode() {
    state.loginMode = !state.loginMode;
  }

  const submitForm = (values: IFormProps) => {
    const { login, signup } = props;
    state.loginMode
      ? login([
          values.name,
          values.email,
          values.password,
          values.confirm_password,
        ])
      : signup([
          values.name,
          values.email,
          values.password,
          values.confirm_password,
        ]);
  };

  return (
    <div className="login-box">
      <div className="login-logo">
        <b> {MY}</b> {MONEY}
      </div>
      <div className="login-box-body">
        <p className="login-box-msg">{WELCOME}</p>
        <form>
          <Field
            component={Input}
            type="input"
            name="name"
            placeholder="Name"
            icon="user"
            hide={state.loginMode}
          />
          <Field
            component={Input}
            type="email"
            name="email"
            placeholder="Email"
            icon="envelope"
          />
          <Field
            component={Input}
            type="password"
            name="password"
            placeholder="Password"
            icon="lock"
          />
          <Field
            component={Input}
            type="password"
            name="confirm_password"
            placeholder="Confirm Password"
            icon="lock"
            hide={state.loginMode}
          />
          <Row>
            <Grid cols="4">
              <button
                type="button"
                className="btn btn-primary btn-block btn-flat"
                onClick={props.handleSubmit((v) => submitForm(v))}
              >
                {state.loginMode ? "Login" : "Register"}
              </button>
            </Grid>
          </Row>
        </form>
        <br />
        <button
          type="button"
          className="link-button"
          onClick={() => changeMode()}
        >
          {state.loginMode ? REGISTER_OPTION : LOGIN_OPTION}
        </button>
      </div>
      <Messages />
    </div>
  );
};

export const FormComponent = reduxForm<IFormProps, IDispatchProps>({
  form: "dummy-form",
})(Component);
