import { UserManager } from "oidc-client-ts";

const settings = {
  authority: "https://login.microsoftonline.com/41fca7ef-c2d2-42c2-860a-5b9eb2e305f7/v2.0", // Azure AD OIDC endpoint     587b6ea1-3db9-4fe1-a9d7-85d4c64ce5cc
  client_id: "f7c6b31e-e516-4e23-93cd-e426e95cb6e4", // Tu client ID     594dd4da-62d4-4177-bdf4-2a422f00cad1
  redirect_uri: "http://localhost:3000/callback",
  post_logout_redirect_uri: "http://localhost:3000",
  response_type: "code", // Para obtener ID token y access token
  scope: "openid profile email User.Read", // Puedes agregar scopes personalizados
};

export const userManager = new UserManager(settings);