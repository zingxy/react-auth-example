import React, { createContext, useState } from 'react';
import { ROLES } from '../routes';

import * as API from '../service';

interface AuthType {
  user: { username: string; id: string; role: ROLES[] } | null;
  login: (name: string, password: string) => Promise<API.SignInResponseData>;
  logout: () => Promise<API.SingOutResponseData>;
}

type AuthContextType = AuthType & {
  setAuth: React.Dispatch<React.SetStateAction<AuthType>>;
};

export const AuthContext = createContext<AuthContextType>({
  user: null,
  async login(username, password) {
    return {} as API.SignInResponseData;
  },
  async logout() {
    return {} as API.SingOutResponseData;
  },
  setAuth() {},
});

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [auth, setAuth] = useState<AuthType>({
    user: null,
    async login(username, password) {
      return API.signin(username, password);
    },
    async logout() {
      setAuth((auth) => {
        return {
          ...auth,
          user: null,
        };
      });
      return API.signout();
    },
  });

  return (
    <AuthContext.Provider value={{ ...auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
}
