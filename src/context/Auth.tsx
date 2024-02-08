import React, { createContext, useContext, useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AuthService } from 'src/services/auth.service';

export interface AuthData {
  token: string;
}

interface AuthContextDataProps {
  authData?: AuthData;
  signIn: (email: string, password: string) => Promise<AuthData>;
  signOut: () => Promise<void>;
  loading: boolean;
}

export const AuthContext = createContext<AuthContextDataProps>(
  {} as AuthContextDataProps
);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [authData, setAuthData] = useState<AuthData>();
  const [loading, setLoading] = useState(true);
 

  useEffect(() => {
    loadFromStorage();
  }, []);

  async function loadFromStorage() {
    const auth = await AsyncStorage.getItem('@token');
    if (auth) {
      setAuthData(JSON.parse(auth));
    }
    setLoading(false);
  }

  async function signIn(email: string, password: string): Promise<AuthData> {
    const auth = await AuthService.signIn(email, password);
    setAuthData(auth);
    AsyncStorage.setItem('@token', JSON.stringify(auth.token));
    return auth;
  }

  async function signOut(): Promise<void> {
    await AuthService.signOut();
    setAuthData(undefined);
    AsyncStorage.removeItem('@token');
  }

  return (
    <AuthContext.Provider value={{ authData, signIn, signOut, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth() {
  const context = useContext(AuthContext);
  return context;
}
