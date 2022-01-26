import React from "react"
import {Background} from "./styles.js"

const App = ({children, inLogin}) => {
    return(<Background inLogin={inLogin}>{children}</Background>)
}
export default App