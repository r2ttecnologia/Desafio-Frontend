import styled from "styled-components"

import img1 from "../../assets/tim-mossholder-nZ2ckk2-FNA-unsplash.png"
import img2 from "../../assets/camera-paisagem.jpg"

export const Background = styled.div`
${props=> props.inLogin?`background: url(${img1});`:`background: url(${img2});`}
background-size:100% auto;
background-size: cover;
min-height: 100vh;
display: flex;
${props=> props.inLogin?`justify-content: end;`:`justify-content: start;`}
align-items: center;
padding: 5px 70px;
@media(max-width: 700px) {
    justify-content: center;
    padding: 0;
  }
`