import React, { useEffect } from "react";
import { userManager } from "./authConfig";

function Callback() {
  useEffect(() => {
    userManager.signinRedirectCallback().then(() => {
      window.location.href = "/";
    });
  }, []);

  return <p>Processing login...</p>;
}

export default Callback;