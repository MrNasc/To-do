import { createContext, useCallback, useEffect, useState } from "react";



interface ILogedUserContextData {
    userName: string;
    logout: () => void;
}
export const LogedUserContext = createContext<ILogedUserContextData>({} as ILogedUserContextData);

interface ILogedUserProviderProps{
    children: React.ReactNode
}
export const LogedUserProvider: React.FC<ILogedUserProviderProps> = ({ children }) => {

    const [name, setName] = useState('');              

    useEffect(() => {
        setTimeout(() => {
            setName('Matheus')
        }, 300);
    });

    const handleLogout = useCallback (() => {
        console.log('Logout executed')
    }, []);

    return (
        <LogedUserContext.Provider value={{ userName: name, logout: handleLogout }}>
            {children}
        </LogedUserContext.Provider>
    );
}