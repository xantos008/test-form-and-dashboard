import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { userInfoSelector } from "../../store/slices/authSlice";
import { useLocation, useNavigate, Navigate, Outlet } from "react-router";

export const NavigationHelper = () => {
    const userInfo = useSelector(userInfoSelector);
    const location = useLocation();
    const navigate = useNavigate();

    const publicPaths = ["/", "/signup"];
    const isPublicRoute = publicPaths.includes(location.pathname);

    useEffect(() => {
        const publicPaths = ["/", "/signup"];
        const isPublicRoute = publicPaths.includes(location.pathname);

        if (!userInfo && !isPublicRoute) {
            navigate("/", { replace: true });
        } else if (userInfo && isPublicRoute) {
            navigate("/dashboard", { replace: true });
        }
    }, [userInfo, location.pathname, navigate]);

    if (!userInfo && !isPublicRoute) {
        return <Navigate to="/" replace />;
    } else if(userInfo && isPublicRoute){
        return <Navigate to="/dashboard" replace />
    }

    return <Outlet />

};

