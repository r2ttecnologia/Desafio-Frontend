import styled from "styled-components"

export const Container = styled.div`
background-color: #fff;
box-shadow: -10px -6px 15px #6B6B6B29;
border-radius: 44px;
min-width: 500px;
min-height: 606px;
max-height: 687px;
padding: 0 65px 58px 65px;
display: flex;
flex-direction: column;
align-items: center;
@media(max-width: 500px) {
    width: 100%;
    min-width: 0;
}
@media(max-width: 380px) {
    padding: 0 30px 30px 30px;
}
@media(max-width: 300px) {
    border-radius: 0;
}
`