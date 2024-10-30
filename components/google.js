"use client";

import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";

const clientId =
  "839385603142-i6vdv0tqupvv4luhb05hpah2pf6ilgo8.apps.googleusercontent.com";

export default function Google() {
  return (
    <div className="mx-auto">
        <GoogleOAuthProvider clientId={clientId}>
          <GoogleLogin
            onSuccess={(response) => console.log("Login Successful:", response)}
            onError={() => console.log("Login Failed")}
          />
        </GoogleOAuthProvider>
    </div>
  );
}
