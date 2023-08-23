import { createContext, useState } from 'react';

interface UserContext {
  user: {
    user_type: string,
    cad_razao_social: string
  };
  handleSetUserAuthenticated: (userAuthenticated: {
    user_type: string,
    cad_razao_social: string
  }) => void;
}

interface Props {
  children: React.ReactNode;
}

export const AuthContext = createContext<UserContext>({
  user: {
    user_type: '',
    cad_razao_social: ''
  },
  handleSetUserAuthenticated: () => {}
});

const AuthContextProvider = ({ children }: Props) => {
  const [user, setUser] = useState({
    user_type: '',
    cad_razao_social: ''
  });

  const handleSetUserAuthenticated = (userAuthenticated: {
    user_type: string,
    cad_razao_social: string
  }) => {
    setUser(userAuthenticated);
  };

  return (
    <AuthContext.Provider value={{ user, handleSetUserAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
