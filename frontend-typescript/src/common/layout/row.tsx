import React from "react";

interface RowProps {
  children: any;
}
const Row = (props: RowProps) => <div className="row">{props.children}</div>;

export default Row;
