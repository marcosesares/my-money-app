import { Field, InjectedFormProps, reduxForm } from "redux-form";
import Messages from "../common/messages/messages";
import Row from "./../common/layout/row";
import Grid from "./../common/layout/grid";
import { MY, MONEY } from "../common/constants/constants";
import {
  WELCOME,
  REGISTER_OPTION,
  LOGIN_OPTION,
} from "../common/constants/messageConstants";
import Input from "../common/form/inputAuth";

interface DummyFormComponentProps extends InjectedFormProps {
  initialValues: {
    loginMode: boolean;
  };
}

const DummyFormComponent: React.FunctionComponent<DummyFormComponentProps> = (
  props
) => {
  function changeMode() {
    props.initialValues.loginMode = !props.initialValues.loginMode;
  }
  return (
    <div className="login-box">
      <div className="login-logo">
        <b> {MY}</b> {MONEY}
      </div>
      <div className="login-box-body">
        <p className="login-box-msg">{WELCOME}</p>
        <form onSubmit={props.handleSubmit}>
          <Field
            component={Input}
            type="input"
            name="name"
            placeholder="Name"
            icon="user"
            hide={props.initialValues.loginMode}
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
            hide={props.initialValues.loginMode}
          />
          <Row>
            <Grid cols="4">
              <button
                type="submit"
                className="btn btn-primary btn-block btn-flat"
              >
                {props.initialValues.loginMode ? "Login" : "Register"}
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
          {props.initialValues.loginMode ? REGISTER_OPTION : LOGIN_OPTION}
        </button>
      </div>
      <Messages />
    </div>
  );
};

export const DummyForm = reduxForm({
  form: "dummy-form",
})(DummyFormComponent as any);
