import React, { forwardRef } from "react"
import { Input } from "./styles"

const App = forwardRef((props, ref) => {
    return (<Input ref={ref} {...props} />)
})
export default App