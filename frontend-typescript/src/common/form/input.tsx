import React from "react";

interface InputProps {
  input: any;
  placeholder: string;
  readOnly: boolean;
  type: string;
}
const Input = (props: InputProps) => (
  <input
    {...props.input}
    className="form-control"
    placeholder={props.placeholder}
    readOnly={props.readOnly}
    type={props.type}
  />
);

export default Input;
