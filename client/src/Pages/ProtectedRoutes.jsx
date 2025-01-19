/* eslint-disable react/prop-types */
import { useContext } from "react";
import { Navigate } from "react-router";
import { AuthContext } from "../context/AuthContext";

const ProtectedRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);

    if (loading) return <p>Loading...</p>;
    return user ? children : <Navigate to="/" />;
};

export default ProtectedRoute;
