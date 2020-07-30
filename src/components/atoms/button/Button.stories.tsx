import React from "react"
import { action } from "@storybook/addon-actions"
import mdx from "../Atoms.mdx"

import Button, { ButtonTheme, ButtonSize } from "./Button"

export default {
  title: "Atoms|Button",
  component: Button,
  parameters: {
    docs: {
      page: mdx,
    },
  },
}

export const Basic = () => <Button onClick={action("clicked")}>Learn more</Button>

Basic.story = {
  name: "Basic button",
}

export const BasicSmall = () => (
  <Button size={ButtonSize.SMALL} onClick={action("clicked")}>
    Learn more
  </Button>
)

BasicSmall.story = {
  name: "Small basic button",
  description: "It's a basic button",
}

export const BasicMedium = () => (
  <Button size={ButtonSize.MEDIUM} onClick={action("clicked")}>
    Learn more
  </Button>
)

BasicMedium.story = {
  name: "Medium basic button",
}

export const BasicLarge = () => (
  <Button size={ButtonSize.LARGE} onClick={action("clicked")}>
    Learn more
  </Button>
)

BasicLarge.story = {
  name: "Large basic button",
}

export const Rounded = () => (
  <Button theme={ButtonTheme.ROUNDED} onClick={action("clicked")}>
    Learn more
  </Button>
)

Rounded.story = {
  name: "Rounded button",
}

export const Disabled = () => (
  <Button theme={ButtonTheme.ROUNDED} disabled onClick={action("clicked")}>
    Learn more
  </Button>
)

Disabled.story = {
  name: "Disabled button",
}
