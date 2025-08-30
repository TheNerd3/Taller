// src/context/AuthContext.tsx
import {
    createContext,
    useContext,
    useState,
    useEffect,
} from "react";
import type { ReactNode } from "react";
import type { User, AuthContextProps } from "../types/interfaces";

const AuthContext = createContext<AuthContextProps>({
    user: null,
    login: async () => { },
    logout: () => { },
});

export function AuthProvider({ children }: { children: ReactNode }) {
    const [user, setUser] = useState<User | null>(null);

    useEffect(() => {
        const stored = localStorage.getItem("authUser");
        if (stored) setUser(JSON.parse(stored));
    }, []);

    useEffect(() => {
        if (user) localStorage.setItem("authUser", JSON.stringify(user));
        else localStorage.removeItem("authUser");
    }, [user]);

    const login = async (nombre: string, password: string) => {
        const resp = await fetch("/api/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ nombre, password }),
        });
        const data: User = await resp.json();
        setUser(data);
    };

    const logout = () => setUser(null);

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    return useContext(AuthContext);
}
