import React from "react";
import { Link } from "react-router-dom";

interface MenuItemProps {
  path?: string;
  icon: string;
  label: string;
}
const MenuItem = (props: MenuItemProps) => (
  <li>
    <Link to={props.path || "/"}>
      <i className={`fa fa-${props.icon}`}></i> <span>{props.label}</span>
    </Link>
  </li>
);

export default MenuItem;
