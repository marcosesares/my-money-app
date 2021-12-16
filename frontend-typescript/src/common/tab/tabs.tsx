import React from "react";

interface TabsProps {
  children: any;
}
const Tabs = (props: TabsProps) => (
  <div className="nav-tabs-custom">{props.children}</div>
);

export default Tabs;
