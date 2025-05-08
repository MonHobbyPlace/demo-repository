"use client";

import { useEffect, useState } from "react";
import { AddService } from "./_features/addService";
import { Three } from "./_features/Three";
import { ServicePageHome } from "./_features/servicePageHome";

export default function Service() {
  const [page, setPage] = useState(4);

  useEffect(() => {
    setPage(4);
  }, []);

  return (
    <div>
      {page === 1 && <AddService />}
      {page === 3 && <Three />}
      {page === 4 && <ServicePageHome />}
    </div>
  );
}
