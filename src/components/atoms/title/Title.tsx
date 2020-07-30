import styled from "styled-components"

const Title = styled.h1`
  @import "../../_settings/_variables.css";

  font-size: 4em;
  font-weight: lighter;
  letter-spacing: 3px;
  line-height: 1;
  margin-top: 0;
  color: var(--grey-3);

  &:after {
    content: "";
    display: block;
    width: 1em;
    border-bottom: 2px solid var(--brand);
    margin-top: -0.5em;
    margin-left: -1.1em;
  }
`

export default Title
