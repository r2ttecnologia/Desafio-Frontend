import styled from "styled-components"
import img from "../../assets/tim-mossholder-nZ2ckk2-FNA-unsplash.png"

export const Background = styled.div`
background: url(${img});
background-size:100% auto;
background-size: cover;
min-height: 100vh;
display: flex;
justify-content: end;
align-items: center;
padding: 97px;
@media(max-width: 700px) {
    justify-content: center;
    padding: 0;
  }
`