import styled from "styled-components"

export const Form = styled.form`
background-color: #fff;
box-shadow: -10px -6px 15px #6B6B6B29;
border-radius: 44px;
${props => props.inLogin?`min-height: 606px;min-width: 500px;`:`min-height: 450px;min-width: 400px;`}
max-height: 687px;
padding: 0 60px 55px 60px;
display: flex;
flex-direction: column;
align-items: center;
@media(max-width: 500px) {
    width: 100%;
    min-width: 0;
    border-radius: 0;
}
@media(max-width: 380px) {
    padding: 0 30px 30px 30px;
}
`