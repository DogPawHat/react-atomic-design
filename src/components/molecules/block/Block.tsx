/* @flow */
import React, { ReactNode } from "react"

import Card from "../../atoms/card/Card"
import Button from "../../atoms/button/Button"
import Title from "../../atoms/title/Title"

type Props = {
  children?: ReactNode
  className?: string
  title: string
  button?: string
}

const Block = ({ className = "", children = "", title = "", button = "" }: Props) => (
  <Card className={className}>
    <Title>{title}</Title>
    {children}
    {button !== "" && <Button>{button}</Button>}
  </Card>
)

export default Block
