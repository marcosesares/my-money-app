import { connect } from "react-redux";
import { login, signup } from "./authActions";
import { IDispatchProps, FormComponent } from "./formComponent";
import { AnyAction, bindActionCreators, Dispatch } from "redux";

const FormContainer = (props: IDispatchProps) => <FormComponent {...props} />;

const mapDispatchToProps = (dispatch: Dispatch<AnyAction>) =>
  bindActionCreators({ login, signup }, dispatch);

export const AuthForm = connect<null, IDispatchProps>(
  null,
  mapDispatchToProps
)(FormContainer);
