import styled from "styled-components"

export const Input = styled.input`
width: 100%;
height: 50px;
border: 3px solid #F4F4F4;
border-radius: 15px;
padding-left: 25px;
outline: none;
font-size: 14px;
color:#A2A2A2;
${props => props.isLast === true ?`
margin - bottom: 60px;`:`
margin-bottom: 45px;`}
`