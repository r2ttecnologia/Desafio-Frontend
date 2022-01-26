import React from "react"
import { Form } from "./styles"

const App = (props, {inLogin}) => {
    return (<Form inLogin={inLogin} {...props}>{props.children}</Form>)
}
export default App