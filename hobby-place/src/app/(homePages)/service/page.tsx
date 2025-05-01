"use client";

import { useState } from "react";
import { UsersService } from "./_features/usersService";
import { AddService } from "./_features/addService";
import { Three } from "./_features/Three";
import { ServicePageHome } from "./_features/servicePageHome";

export default function Service() {
  const [page, setPage] = useState(4);

  return (
    <div>
      {page === 1 && <AddService />}
      {page === 2 && <UsersService />}
      {page === 3 && <Three />}
      {page === 4 && <ServicePageHome />}
    </div>
  );
}
