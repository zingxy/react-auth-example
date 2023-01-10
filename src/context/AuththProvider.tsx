import React, { createContext, useState } from 'react';
import { ROLES } from '../routes';

interface AuthType {
  user: { username: string; id: string; role: ROLES[] } | null;
  login: (name: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
}

type AuthContextType = AuthType & {
  setAuth: React.Dispatch<React.SetStateAction<AuthType>>;
};

export const AuthContext = createContext<AuthContextType>({
  user: null,
  async login() {},
  async logout() {},
  setAuth() {},
});

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [auth, setAuth] = useState<AuthType>({
    user: {
      username: 'Hello',
      id: '',
      role: [ROLES.User],
    },
    async login(name, password) {},
    async logout() {
      setAuth((auth) => {
        return {
          ...auth,
          user: null,
        };
      });
    },
  });

  return (
    <AuthContext.Provider value={{ ...auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
}
