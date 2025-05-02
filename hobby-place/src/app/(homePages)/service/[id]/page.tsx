"use client";
import { useParams } from "next/navigation";

export default function Home() {
  const { id } = useParams();
  console.log(id);
  return <div>walkers</div>;
}
