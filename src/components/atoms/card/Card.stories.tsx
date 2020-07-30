import React from "react"
import Card from "./Card"
import mdx from "../Atoms.mdx"

export default {
  title: "Atoms|Card",
  docs: {
    page: mdx,
  },
  component: Card,
}

export const Basic = () => <Card>Example of card</Card>

Basic.story = {
  name: "default",
}
