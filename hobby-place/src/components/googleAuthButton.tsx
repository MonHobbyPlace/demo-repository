import { CredentialResponse, GoogleLogin } from "@react-oauth/google";
import axios from "axios";
import { useRouter } from "next/router";

const GoogleAuthButton = () => {
  const router = useRouter();

  // Handle Google login success
  const handleGoogleLogin = async (response: CredentialResponse) => {
    try {
      const token = response.credential;
      // Send the token to the backend
      const res = await axios.post("http://localhost:5000/api/google-login", {
        token,
      });

      if (res.data.success) {
        // Save the token to localStorage or cookies
        localStorage.setItem("token", res.data.token);
        // Redirect the user after successful login
        router.push("/dashboard");
      } else {
        alert(res.data.message);
      }
    } catch (error) {
      console.error(error);
      alert("Login failed!");
    }
  };

  return (
    <GoogleLogin
      onSuccess={handleGoogleLogin}
      onError={() => console.error("Login failed")}
    />
  );
};

export default GoogleAuthButton;
