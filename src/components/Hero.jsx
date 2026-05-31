import { useState } from "react";
import { motion } from "motion/react";
import FolderIcon from "./FolderIcon";
import imgProfile from "../imports/assets/6f40815b214e6f7c7b314fb83871696156da13c1.png";

const FOLDERS = [
  {
    uid: "f1",
    lines: ["INTERNSHIP", "AND PROJECTS"],
    sectionId: "internship-section",
  },
  {
    uid: "f2",
    lines: ["MY WORK THAT IS", "WORTH MENTIONING"],
    sectionId: "my-work-section",
  },
  {
    uid: "f3",
    lines: ["PROGRAMS", "I CAN WORK WITH"],
    sectionId: "programs-section",
  },
];

export default function Hero() {
  const [hovered, setHovered] = useState(null);

  const scrollTo = (id) => {
    document
      .getElementById(id)
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="hero-container max-w-[1271px] mx-auto px-4 pt-0 pb-6">
      <div className="hero-flex flex items-start justify-between gap-8 mb-4">
        <div className="flex flex-col justify-between w-full md:w-auto md:min-h-[560px]">
          <div className="md:mt-[140px] mt-4">
            <motion.p
              className="portfolio-heading-text font-['Helvetica:Regular',sans-serif] text-[120px] text-black leading-[0.9] mb-0"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              PORTFOLIO
            </motion.p>

            <motion.h1
              className="portfolio-name-text font-['Helvetica:Regular',sans-serif] text-[60px] leading-none text-black ml-[8px]"
              style={{ marginTop: "-25px" }}
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Lada Schröderová
            </motion.h1>
          </div>

          <div className="folders-nav flex gap-6 mt-10 md:mt-0">
            {FOLDERS.map(({ uid, lines, sectionId }, index) => (
              <motion.div
                key={uid}
                onClick={() => scrollTo(sectionId)}
                className="cursor-pointer"
                onHoverStart={() => setHovered(uid)}
                onHoverEnd={() => setHovered(null)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                whileHover={{ scale: 1.06 }}
              >
                <div className="w-[140px] flex flex-col items-center">
                  <div
                    className="relative w-[100px] h-[80px] mb-2"
                    style={{ overflow: "visible" }}
                  >
                    <FolderIcon isOpen={hovered === uid} uid={uid} />
                  </div>
                  <p className="text-[11px] text-center leading-tight font-['Helvetica:Regular',sans-serif]">
                    {lines[0]}
                    <br />
                    {lines[1]}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          className="hero-photo mt-[140px] w-[450px] h-[460px] overflow-hidden"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <img
            src={imgProfile}
            alt=""
            className="w-full h-full object-cover object-top"
          />
        </motion.div>
      </div>
    </div>
  );
}
