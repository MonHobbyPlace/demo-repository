/* eslint-disable @next/next/no-img-element */
"use client";
import axios from "axios";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { MapPinned, PawPrint } from "lucide-react";
import { useEffect, useState } from "react";
import { Hospital } from "./HospitalInfoBox";
import { useRouter } from "next/navigation";

export const TopRated = () => {
  const [hospitals, setHospitals] = useState([] as unknown as Hospital[]);
  const [loading, setLoading] = useState(false);
  const getTopratedHospitals = async () => {
    try {
      setLoading(true);
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_BASE_URL}/hospital/topRated`
      );
      setHospitals(response.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    getTopratedHospitals();
  }, []);
  return (
    <div style={container} className="h-[300px] overflow-scroll ">
      {loading ? (
        <div className="h-full w-full flex items-center justify-center">
          <span className="loading loading-spinner loading-xl"></span>
        </div>
      ) : (
        hospitals?.map((hospital, i) => (
          <Card i={i} key={hospital.id} hospital={hospital} />
        ))
      )}
    </div>
  );
};

interface CardProps {
  i: number;
  hospital: Hospital;
}

function Card({ i, hospital }: CardProps) {
  const router = useRouter();

  return (
    <motion.div
      className={`card-container-${i}`}
      style={cardContainer}
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ amount: 0.8 }}
    >
      <div style={{ ...splash, backgroundColor: "white" }} />
      <motion.div
        style={card}
        variants={cardVariants}
        className="card relative"
      >
        <div
          className="w-full h-full flex items-center justify-end rounded-2xl relative p-3 gap-3"
          onClick={() => router.push(`/hospital/${hospital.id}`)}
        >
          <img
            src={hospital.backgroundImage}
            className="w-[93%] h-[65%] absolute rounded-xl"
            alt="Each hospital image"
          />
          <div
            style={{ backgroundColor: "rgba(65, 61, 61, 0.3)" }}
            className="z-[100] text-[white] from-opacity-0 p-3 to-opacity-50 w-1/2 h-[70%] rounded-r-xl flex flex-col gap-2 items-center "
          >
            <p className="text-base font-bold opacity-100 text-[#023e8a] ">
              {hospital.name}
            </p>
            <div className="flex gap-1 text-xs items-center w-full ">
              <PawPrint color="white" fill="white" size={15} />
              <p className="w-full">{hospital.category[0]}</p>
            </div>
            <div className="flex  gap-1 items-center w-full ">
              <MapPinned color="white" size={20} />
              <p className=" text-xs text-white  w-full whitespace-nowrap overflow-hidden text-ellipsis">
                {hospital.location}
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

const cardVariants: Variants = {
  offscreen: {
    y: 100,
  },
  onscreen: {
    y: 40,
    rotate: -10,
    transition: {
      type: "spring",
      bounce: 0.2,
      duration: 0.8,
    },
  },
};

const container: React.CSSProperties = {
  maxWidth: 500,
  paddingBottom: 100,
  width: "100%",
};

const cardContainer: React.CSSProperties = {
  overflow: "hidden",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  position: "relative",
  paddingTop: 20,
  marginBottom: -120,
};

const splash: React.CSSProperties = {
  position: "absolute",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  clipPath: `path("M 0 303.5 C 0 292.454 8.995 285.101 20 283.5 L 460 219.5 C 470.085 218.033 480 228.454 480 239.5 L 500 430 C 500 441.046 491.046 450 480 450 L 20 450 C 8.954 450 0 441.046 0 430 Z")`,
};

const card: React.CSSProperties = {
  fontSize: 164,
  width: 300,
  height: 300,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  borderRadius: 20,
  background: "white",
  boxShadow:
    "0 0 1px hsl(0deg 0% 0% / 0.075), 0 0 2px hsl(0deg 0% 0% / 0.075), 0 0 4px hsl(0deg 0% 0% / 0.075), 0 0 8px hsl(0deg 0% 0% / 0.075), 0 0 16px hsl(0deg 0% 0% / 0.075)",
  transformOrigin: "10% 60%",
};
