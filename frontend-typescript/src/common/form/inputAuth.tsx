import React from "react";
import If from "../operator/if";

interface InputAuthProps {
  hide: boolean;
  input: any;
  placeholder: string;
  readOnly: boolean;
  type: string;
  icon: string;
}

const InputAuth = (props: InputAuthProps) => (
  <If test={!props.hide}>
    <div className="form-group has-feedback">
      <input
        {...props.input}
        className="form-control"
        placeholder={props.placeholder}
        readOnly={props.readOnly}
        type={props.type}
      />
      <span
        className={`glyphicon glyphicon-${props.icon}
  form-control-feedback`}
      ></span>
    </div>
  </If>
);

export default InputAuth;
