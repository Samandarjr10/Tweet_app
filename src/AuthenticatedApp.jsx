import React from "react";

import Bar from "./Components/Bar/Bar"
import Main from "./Components/Main/Main";
import Trends from "./Components/Trends/Trends";
import Profill from "./Pages/Profill/Profill";

import { Routes, Route } from "react-router-dom"

function AuthenticatedApp() {
    return <>
     <div className="container">
        <div className="d-flex align-items-start">
            <Bar/>
            <Routes>
                <Route path="" element={<Main/>}/>
                <Route path="profill/:id" element={<Profill/>}/>
            </Routes>

            <Trends/>
        </div>
    </div>
    </>
}

export default AuthenticatedApp;