import React, { useEffect, useState } from "react";
import { userManager } from "./authConfig";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    userManager.getUser().then(setUser);
  }, []);

  const login = () => {
    userManager.signinRedirect();
  };

  const logout = () => {
    userManager.signoutRedirect();
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h1>React + Azure AD (OIDC)</h1>

      {!user ? (
        <button onClick={login}>Login with Azure AD</button>
      ) : (
        <>
          <p>Welcome, {user.profile.name}</p>
          <p>Email: {user.profile.email}</p>
          <button onClick={logout}>Logout</button>

          <h2>Tokens</h2>
          <p><strong>Access Token:</strong></p>
          <pre style={{ whiteSpace: "pre-wrap", wordBreak: "break-word" }}>
            {user.access_token}
          </pre>

          <p><strong>ID Token:</strong></p>
          <pre style={{ whiteSpace: "pre-wrap", wordBreak: "break-word" }}>
            {user.id_token}
          </pre>
        </>
      )}
    </div>
  );
}

export default App;