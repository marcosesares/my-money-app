import { InjectedFormProps } from "redux-form";
import { DummyForm } from "./component";
import { connect } from "react-redux";
import { AnyAction, bindActionCreators, Dispatch } from "redux";
import { login, signup } from "./authActions";

interface DummyFormContainerProps
  extends Pick<InjectedFormProps, "initialValues"> {
  login: (values: string[]) => void;
  signup: (values: string[]) => void;
  initialValues: {
    loginMode: boolean;
  };
}

interface State {
  initialValues: {
    loginMode: boolean;
  };
  login: (values: string[]) => void;
  signup: (values: string[]) => void;
}

const DummyFormContainer: React.FunctionComponent<DummyFormContainerProps> = (
  props
) => {
  const submitForm = (values: any) => {
    const { login, signup } = props;
    const value = {
      email: values.email,
      password: values.password,
    };

    props.initialValues.loginMode
      ? login([JSON.stringify(value)])
      : signup([
          values.name,
          values.email,
          values.password,
          values.confirm_password,
        ]);
  };
  return (
    <DummyForm initialValues={props.initialValues} onSubmit={submitForm} />
  );
};

const mapStateToProps = (state: State) => ({
  initialValues: {
    loginMode: true,
  },
});
const mapDispatchToProps = (dispatch: Dispatch<AnyAction>) =>
  bindActionCreators({ login, signup }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DummyFormContainer as any);
