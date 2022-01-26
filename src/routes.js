import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Login from "./pages/Login"
import Authenticated from "./pages/Authenticated"

const AppRoutes = () => {

    return (
        <Router>
            <Routes>
                <Route path="/" element={<Login/>}></Route>
                <Route path="/Authenticated" element={<Authenticated/>}></Route>
            </Routes>
        </Router>
    )
}

export default AppRoutes