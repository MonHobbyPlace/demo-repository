/* eslint-disable @next/next/no-img-element */
"use client";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { MapPinned, PawPrint } from "lucide-react";

export const TopRated = () => {
  return (
    <div style={container} className="h-[300px] overflow-scroll ">
      {food.map(([emoji, hueA, hueB], i) => (
        <Card i={i} emoji={emoji} hueA={hueA} hueB={hueB} key={emoji} />
      ))}
    </div>
  );
};

interface CardProps {
  emoji: string;
  hueA: number;
  hueB: number;
  i: number;
}

function Card({ emoji, hueA, hueB, i }: CardProps) {
  const background = `linear-gradient(306deg, ${hue(hueA)}, ${hue(hueB)})`;
  console.log(background);

  return (
    <motion.div
      className={`card-container-${i}`}
      style={cardContainer}
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ amount: 0.8 }}
    >
      <div style={{ ...splash, backgroundColor: "#F5EFE7" }} />
      <motion.div
        style={card}
        variants={cardVariants}
        className="card relative"
      >
        <div className="w-full h-full flex items-center justify-end rounded-2xl relative p-3 gap-3">
          <img
            src="hospital2.jpeg"
            className="w-[93%] h-[65%] absolute rounded-xl"
            alt={emoji}
          />
          <div
            style={{ backgroundColor: "rgba(154, 154, 154, 0.3)" }}
            className="z-[100] text-[#213555] from-opacity-0 to-opacity-50 w-1/2 h-[70%] rounded-r-xl flex flex-col items-center "
          >
            <p className="text-base font-bold opacity-100 text-[#023e8a] w-[80%]">
              Furry Friends Hospital
            </p>
            <div className="flex gap-1 items-center w-1/2 text-base ">
              <PawPrint color="#023e8a" fill="#023e8a" size={15} />
              <p>Dog</p>
            </div>
            <div className="flex gap-1 items-center w-1/2 ">
              <MapPinned color="white" />

              <p className=" text-base text-ellipsis w-full">location</p>
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

const hue = (h: number) => `hsl(${h}, 85%, 100%)`;

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
  background: "#F5EFE7",
  boxShadow:
    "0 0 1px hsl(0deg 0% 0% / 0.075), 0 0 2px hsl(0deg 0% 0% / 0.075), 0 0 4px hsl(0deg 0% 0% / 0.075), 0 0 8px hsl(0deg 0% 0% / 0.075), 0 0 16px hsl(0deg 0% 0% / 0.075)",
  transformOrigin: "10% 60%",
};

const food: [string, number, number][] = [
  ["🍅", 100, 120],
  ["🍊", 20, 40],
  ["🍋", 60, 90],
  ["🍐", 80, 120],
  ["🍏", 100, 140],
];
