"use client";

import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";
import { useRouter } from "next/navigation"; // Importando useRouter

const clientId =
  "839385603142-i6vdv0tqupvv4luhb05hpah2pf6ilgo8.apps.googleusercontent.com";

export default function Google() {
  const router = useRouter(); // Inicializando o roteador

  const handleLoginSuccess = async (response) => {
    console.log("Login Successful:", response);

    // Acessando o token de credencial
    const { credential } = response;

    // Decodificando o token JWT para obter os dados do usuário
    const user = JSON.parse(atob(credential.split('.')[1]));

    // Obtendo as informações do usuário
    const { email, name, picture } = user;

    console.log("User Profile:", {
      email,
      name,
      picture,
    });

    // Armazenando as informações no localStorage
    localStorage.setItem("picture", picture);

    // Redireciona o usuário para outra página (por exemplo, '/dashboard')
    router.push('/inicio'); // Troque '/dashboard' pela rota desejada
  };

  const handleLoginError = () => {
    console.log("Login Failed");
  };

  return (
    <div className="mx-auto">
      <GoogleOAuthProvider clientId={clientId}>
        <GoogleLogin
          onSuccess={handleLoginSuccess}
          onError={handleLoginError}
        />
      </GoogleOAuthProvider>
    </div>
  );
}