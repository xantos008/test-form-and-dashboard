import React from "react";
import { BrowserRouter, Routes, Route } from "react-router";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import Dashboard from "./Dashboard";
import {NavigationHelper} from "./helper/navigationHelper";

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<NavigationHelper />}>
                    <Route path="/" Component={SignIn}  />
                    <Route path="/signup" Component={SignUp} />
                    <Route path="/dashboard" Component={Dashboard} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}
