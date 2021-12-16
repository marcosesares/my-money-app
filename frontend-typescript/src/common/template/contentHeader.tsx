import React from "react";

interface ContentHeaderProps {
  title: string;
  small: string;
}
const ContentHeader = (props: ContentHeaderProps) => (
  <section className="content-header">
    <h1>
      {props.title} <small>{props.small}</small>
    </h1>
  </section>
);

export default ContentHeader;
