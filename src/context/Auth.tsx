import React, { createContext, useContext, useState } from 'react';
import { AuthService } from 'src/services/auth.service';

export interface AuthData {
  token: string;
}

interface AuthContextDataProps {
  authData?: AuthData;
  signIn: (email: string, password: string) => Promise<AuthData>;
  signOut: () => Promise<void>;
}

export const AuthContext = createContext<AuthContextDataProps>(
  {} as AuthContextDataProps
);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [authData, setAuthData] = useState<AuthData>();

  async function signIn(email: string, password: string): Promise<AuthData> {
    const auth = await AuthService.signIn(email, password);
    setAuthData(auth);
    return auth;
  }

  async function signOut(): Promise<void> {
    const auth = await AuthService.signOut();
    setAuthData(undefined);
    return auth;
  }
  return (
    <AuthContext.Provider value={{ authData, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth() {
  const context = useContext(AuthContext);
  return context;
}
