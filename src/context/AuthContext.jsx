import { createContext, useState } from "react";

export const AuthContext = createContext(null);

export function AuthContextProvider({ children }) {
    const [user, setUser] = useState(null);

    const login = () => {

        setUser({
            id: 1,
            name: "Test User",
            email: "testuser@example.com"
        });
    };

    const logout = () => {
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
}