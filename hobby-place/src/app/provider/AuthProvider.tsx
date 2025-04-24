// app/provider/AuthProvider.tsx
"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";
import { useJwt } from "react-jwt";
import { usePathname, useRouter } from "next/navigation";

type UserType = {
  userId: string;
};

type AuthContextType = {
  userId?: string;
  token?: string | null;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);
const BY_PASS_PATHS = ["/login", "/sign-in", "/sign-up"];

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [token, setToken] = useState<string | null>(null);
  const { decodedToken, reEvaluateToken } = useJwt<UserType>(token || "");
  const router = useRouter();
  const path = usePathname();

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    if (!storedToken) {
      if (!BY_PASS_PATHS.includes(path)) router.push("/login");
    } else {
      setToken(storedToken);
      reEvaluateToken(storedToken);
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{
        userId: decodedToken?.userId,
        token,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
