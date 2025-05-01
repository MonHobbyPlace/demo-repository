"use client";
import { useParams } from "next/navigation";
import { useState } from "react";

export default function Home() {
  const { id } = useParams();
  const [services, setServices] = useState();
  const fetchData = () => {};
  return <div>walkers</div>;
}
