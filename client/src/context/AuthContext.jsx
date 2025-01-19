/* eslint-disable react/prop-types */
import { createContext, useState, useEffect } from "react";
import { fetchUserProfile } from "../lib/authService";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getUserProfile = async () => {
            try {
                const response = await fetchUserProfile();
                setUser(response.data.user); // Assuming the backend returns user info
            } catch (err) {
                console.error("User not authenticated:", err.message);
            } finally {
                setLoading(false);
            }
        };
        getUserProfile();
    }, []);

    const logout = () => {
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ user, setUser, loading, logout }}>
            {children}
        </AuthContext.Provider>
    );
};
