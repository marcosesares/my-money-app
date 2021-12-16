import React from "react";

interface MenuTreeProps {
  path?: string;
  icon: string;
  label: string;
  children: any;
}
const MenuTree = (props: MenuTreeProps) => (
  <li className="treeview">
    <a href={props.path}>
      <i className={`fa fa-${props.icon}`}></i> <span>{props.label}</span>
      <i className="fa fa-angle-left pull-right"></i>
    </a>
    <ul className="treeview-menu">{props.children}</ul>
  </li>
);

export default MenuTree;
