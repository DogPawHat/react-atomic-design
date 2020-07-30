import React, { ReactNode } from "react"
import styled from "styled-components"

type Props = {
  children?: ReactNode
  className?: string
  image: string
}

const BaseFeature = ({ className, children, image = "" }: Props) => (
  <div style={{ backgroundImage: `url(${image})` }} className={className}>
    {children}
  </div>
)

const Feature = styled(BaseFeature)`
  background-size: cover;
  background-repeat: no-repeat;
  padding: 2em 15% 2em 50%;
`

export default Feature
