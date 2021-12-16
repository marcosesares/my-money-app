import React from "react";

interface ContentProps {
  children: any;
}
const Content = (props: ContentProps) => (
  <section className="content">{props.children}</section>
);

export default Content;
