import React from "react"

import Base, { Hero, Col1, Col2 } from "./Base"

const defaultStyle = {
  outline: "1px solid #eee",
  backgroundColor: "rgba(220, 220, 220, .6)",
  minHeight: "200px",
}

export default {
  title: "Templates|Base",
  component: Base,
  includeStories: [],
}

export const Basic = () => (
  <Base style={defaultStyle}>
    <Hero style={defaultStyle} />
    <Col1 style={defaultStyle} />
    <Col2 style={defaultStyle} />
  </Base>
)

Basic.story = {
  name: "default",
}
