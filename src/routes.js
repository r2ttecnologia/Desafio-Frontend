import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Login from "./pages/Authenticated"
import Authenticated from "./pages/Login"

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