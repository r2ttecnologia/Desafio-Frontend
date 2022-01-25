import styled from "styled-components"

export const Button = styled.button`
display: flex;
justify-content: center;
align-items: center;
width: 100%;
max-width: 242px;
height: 63px;
background-color: #EC164F;
color: white;
font-weight: 400px;
font-size: 22px;
border: none;
border-radius: 15px;
&:hover{
    opacity:0.9;
}
&:active{
    opacity:0.7;
}
`