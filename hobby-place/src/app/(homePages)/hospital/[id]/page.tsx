"use client";
import axios from "axios";
import { useParams } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  const { id } = useParams();
  // const [hospital, setHospital] = useState();
  const fetchData = async () => {
    const response = await axios.get(`http://localhost:4000/hospital/${id}`);
    console.log("response", response.data);
    console.log("aksjdhfasfgkg");
  };
  useEffect(() => {
    console.log("aksjdhfasfgkg");
    fetchData();
  }, []);
  return <div>{id}</div>;
}
