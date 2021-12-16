import React from "react";
import If from "./if";

interface IconButtonProps {
  hide: boolean;
  type: "button" | "submit" | "reset" | undefined;
  style: string;
  icon: string;
  onClick: () => {};
}

const IconButton = (props: IconButtonProps) => (
  <If test={!props.hide}>
    <button
      type={props.type}
      className={`btn btn-${props.style}`}
      onClick={props.onClick}
    >
      <i className={`fa fa-${props.icon}`}></i>
    </button>
  </If>
);

export default IconButton;
