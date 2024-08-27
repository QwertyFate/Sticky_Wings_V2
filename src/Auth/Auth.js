import React , {useState, createContext, Children} from "react";
import {jwtDecode} from "jwt-decode";
export const AuthContext = createContext();


export const AuthProvider = ({children}) => {
    const [auth, setAuth] = useState(false);
    const [token, setToken] = useState(null);

    const login = (authToken) => {
        setAuth(true)
        setToken(authToken)
        const exp = jwtDecode(authToken).exp
        localStorage.setItem('jwtToken', authToken);
        localStorage.setItem('exp', exp);
    };

    const logout = () => {
        setAuth(false);
        setToken(null);
        localStorage.removeItem('jwtToken')
    }

    return(
        <AuthContext.Provider value={{auth, token, login, logout}}>
            {children}
        </AuthContext.Provider>
    );
};
