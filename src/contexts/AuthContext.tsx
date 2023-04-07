import { ReactNode, createContext } from "react";
import { UserDTO } from '@dtos/UserDTO';

export type AuthContextDataProps = {
    user: UserDTO;
}

type AuthContextProviderProps = {
    children: ReactNode;
}

export const AuthContext = createContext<AuthContextDataProps>({} as AuthContextDataProps)

export function AuthContextProvider({ children }: AuthContextProviderProps) {
    return (
        <AuthContext.Provider value={{
            user: {
                id: '1',
                name: 'Gueguel',
                email: 'miguel@gmail.com',
                avatar: 'miguel.png'
            }
        }}>
            {children}
        </AuthContext.Provider>
    )
}

