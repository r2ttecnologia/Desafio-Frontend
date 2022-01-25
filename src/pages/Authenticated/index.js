import React from "react"
import { useNavigate } from 'react-router-dom'

const App = () => {
    const navigate = useNavigate()
    const changePage = () =>{
        navigate("/")
    }
    return(
        <>
        <h1>Authenticated Page</h1>
        <button onClick={changePage}>Voltar</button>
        </>
    )
}
export default App