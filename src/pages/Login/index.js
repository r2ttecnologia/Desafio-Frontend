import React from "react"
import { useNavigate } from 'react-router-dom'

const App = () => {
    const navigate = useNavigate()
    const changePage = () =>{
        navigate("/Authenticated")
    }
    return(
        <>
        <h1>Login Page</h1>
        <button onClick={changePage}>Login</button>
        </>
    )
}
export default App