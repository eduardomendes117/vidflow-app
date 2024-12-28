"use client";

import { GoogleOAuthProvider, useGoogleLogin } from "@react-oauth/google";
import { useRouter } from "next/navigation";
import { FcGoogle } from "react-icons/fc";

const clientId =
  "839385603142-i6vdv0tqupvv4luhb05hpah2pf6ilgo8.apps.googleusercontent.com";

function GoogleLoginButton() {
  const router = useRouter();

  const handleLoginSuccess = async (credentialResponse) => {
    console.log("Login Successful:", credentialResponse);

    const { credential } = credentialResponse;

    const user = JSON.parse(atob(credential.split(".")[1]));

    const { email, name, picture } = user;

    console.log("User Profile:", {
      email,
      name,
      picture,
    });

    localStorage.setItem("picture", picture);

    router.push("/inicio");
  };

  const handleLoginError = () => {
    console.log("Login Failed");
  };

  const login = useGoogleLogin({
    onSuccess: handleLoginSuccess,
    onError: handleLoginError,
  });

  return (
    <button
      onClick={() => login()}
      className="w-full px-4 py-2 bg-black/80 border flex justify-center gap-2 items-center rounded-lg text-sm text-white font-medium"
    >
      <FcGoogle className="text-2xl" />
      Ou faça login com o Google
    </button>
  );
}

export default function Google() {
  return (
    <GoogleOAuthProvider clientId={clientId}>
      <GoogleLoginButton />
    </GoogleOAuthProvider>
  );
}
