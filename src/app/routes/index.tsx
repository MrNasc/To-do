import { Routes, Route, Navigate } from "react-router-dom";
import { Dashboard, Login } from "../pages";

export const Router = () => {  
    return (            
        <Routes>
            <Route path="/dashboard" element={<Dashboard/>} />
            <Route path="/login" element={<Login/>} />

            <Route path="*" element={<Navigate to="/dashboard" />} />
        </Routes>
    );
}
