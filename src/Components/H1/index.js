import React from "react"
import { H1 } from "./styles"

const App = ({children, inLogin}) => {
    return (<H1 inLogin={inLogin}>{children}</H1>)
}
export default App