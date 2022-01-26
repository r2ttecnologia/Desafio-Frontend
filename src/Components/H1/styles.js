import styled from "styled-components"

export const H1 = styled.h1`
display: flex;
${props => props.inLogin&&`align-self: start;`}
font-weight: 700;
font-size: 35px;
color: #EC164F;
margin-bottom:16px;
`