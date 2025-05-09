"use client";
import { useParams } from "next/navigation";

export default function PetCardId() {
  const { id } = useParams();
  console.log(id);

  return <div>jfajhsdf</div>;
}
