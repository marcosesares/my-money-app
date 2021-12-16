import React from "react";

interface TabsHeaderProps {
  children: any;
}
const TabsHeader = (props: TabsHeaderProps) => (
  <ul className="nav nav-tabs">{props.children}</ul>
);

export default TabsHeader;
