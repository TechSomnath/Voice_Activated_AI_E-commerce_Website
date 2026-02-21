import React, { createContext } from "react";

export const authDataContext = createContext();
function AuthContext({ children }) {
  let serverUrl = "https://voice-activated-ai-e-commerce-website.onrender.com";

  let value = {
    serverUrl,
  };
  return (
    <div>
      <authDataContext.Provider value={value}>
        {children}
      </authDataContext.Provider>
    </div>
  );
}

export default AuthContext;
