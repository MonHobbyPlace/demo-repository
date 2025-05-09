"use client";

import { useState } from "react";
import { Three } from "./_features/Three";
import { ServicePageHome } from "./_features/servicePageHome";
import { AddService } from "./_features/addService";
import { UsersService } from "./_features/usersService";

export default function Service() {
  const [page, setPage] = useState(4);

  return (
    <div>
      {page === 1 && <ServicePageHome setPage={setPage} />}
      {page === 2 && <AddService setPage={setPage} />}
      {page === 3 && <Three />}
      {page === 4 && <UsersService />}
    </div>
  );
}
