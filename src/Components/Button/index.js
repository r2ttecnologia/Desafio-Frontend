import React from "react"
import { Button } from "./styles"

const App = ({children, props}) => {
    return (<Button {...props}>{children}</Button>)
}
export default App