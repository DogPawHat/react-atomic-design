import React from "react"

import Title from "./Title"

export default {
  title: "Atoms|Title",
  component: Title,
}

export const Base = () => <Title>Example of Title</Title>

Base.story = {
  name: "default",
}
