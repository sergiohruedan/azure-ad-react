import React, { useEffect } from "react";
import { userManager } from "./authConfig";

function Callback() {
  useEffect(() => {
    userManager.signinRedirectCallback().then(user => {
      console.log("✅ Access Token:", user.access_token);
      console.log("🆔 ID Token:", user.id_token);
      console.log("📄 Claims del perfil:", user.profile);
      // Puedes guardar el token en localStorage si lo necesitas
      // localStorage.setItem("access_token", user.access_token);
      window.location.href = "/";
    }).catch(error => {
      console.error("❌ Error en el callback:", error);
    });
  }, []);

  return <p>Processing login...</p>;
}

export default Callback;
