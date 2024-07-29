import { createContext, useState } from "react";

const AuthContext = createContext();

// eslint-disable-next-line react/prop-types
const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState( true );

  const value = {
    isAuthenticated,
    setIsAuthenticated
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};


export { AuthContext }; // Exportación nombrada
export default AuthProvider; // Exportación por defecto