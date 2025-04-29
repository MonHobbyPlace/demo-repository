"use client";

import { useState } from "react";
import { AddService } from "./_features/addService";
import { UsersService } from "./_features/usersService";

export default function Service() {
  const [page, setPage] = useState(2);

  return (
    <div>
      {page === 1 && <AddService />}
      {page === 2 && <UsersService />}
    </div>
  );
}
