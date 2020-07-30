import styled from "styled-components"

export const Wrap = styled.div``
export const Hero = styled.div``
export const Col1 = styled.div``
export const Col2 = styled.div``

const Base = styled.main`
  display: grid;
  grid-template-columns: 15% repeat(2, 35%) 15%;
  grid-gap: 2em 0;

  ${Wrap} {
    padding: 2em;
  }

  ${Hero} {
    grid-column: 1/5;
    grid-row: 1;
  }

  ${Col1} {
    grid-column: 2/3;
  }

  ${Col2} {
    grid-column: 3/4;
  }
`

export default Base
