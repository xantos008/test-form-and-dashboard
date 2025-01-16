import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route, useNavigate, useLocation } from "react-router";
import { useSelector } from "react-redux";
import { userInfoSelector } from "../store/slices/authSlice";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import Dashboard from "./Dashboard";

export default function App() {
    const userInfo = useSelector(userInfoSelector);
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        const isDashboard = location.pathname === "/dashboard";
        const isLogin = location.pathname === "/";
        const isRegister = location.pathname === "/signup";

        if(!userInfo && isDashboard) {
            navigate("/");
        } else if(userInfo && (isLogin || isRegister)) {
            navigate("/dashboard");
        }
    }, [navigate, location, userInfo])

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<SignIn />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/dashboard" element={<Dashboard />} />
            </Routes>
        </BrowserRouter>
    )
}
