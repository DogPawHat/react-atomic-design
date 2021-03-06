import styled from "styled-components"

const Subtitle = styled.h2`
  @import "../../_settings/_variables.css";

  font-size: 1.5em;
  color: #000;
  list-style: 1;

  &:after {
    content: "";
    display: inline-block;
    width: 1em;
    border-bottom: 2px solid var(--brand);
    margin-top: 0.2em;
    margin-left: 0.5em;
  }
`

export default Subtitle
