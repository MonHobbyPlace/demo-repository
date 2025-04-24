"use client";

import { useState } from "react";
import SignIn from "./sign-in/page";
import LogIn from "./log-in/page";

export default function Home() {
  const [page, setPage] = useState(1);

  return (
    <div className="w-screen h-screen">
      {page === 1 && <SignIn setPage={setPage} />}
      {page === 2 && <LogIn setPage={setPage} />}
    </div>
  );
}
