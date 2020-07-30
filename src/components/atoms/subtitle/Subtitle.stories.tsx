import React from "react"

import Subtitle from "./Subtitle"

export default {
  title: "Atoms|Subtitle",
  component: Subtitle,
}

export const Base = () => <Subtitle>Example of Subtitle</Subtitle>

Base.story = {
  name: "default",
}
