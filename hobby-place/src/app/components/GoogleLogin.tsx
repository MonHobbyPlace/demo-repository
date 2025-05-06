// components/GoogleLoginButton.tsx
"use client";

import { GoogleLogin } from "@react-oauth/google";
import { useJwt } from "react-jwt";

const GoogleLoginButton = () => {
  return (
    <div>
      <GoogleLogin
        onSuccess={(credentialResponse) => {
          if (credentialResponse.credential) {
            const decodedUser = useJwt(credentialResponse.credential);
            console.log("Decoded User:", decodedUser);

            // You can send this token to your backend for verification
          }
        }}
        onError={() => {
          console.log("Login Failed");
        }}
      />
    </div>
  );
};

export default GoogleLoginButton;
