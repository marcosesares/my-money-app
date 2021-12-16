import React from "react";

interface TabsContentProps {
  children: any;
}
const TabsContent = (props: TabsContentProps) => (
  <div className="tab-content">{props.children}</div>
);

export default TabsContent;
