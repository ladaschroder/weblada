import { useState } from "react"
import { motion } from "motion/react"
import AccordionSection from "./AccordionSection"

const ABOUT_PARAGRAPHS = [
  "My name is Lada Schröderová and I'm currently studying BC degree Digital Concept Development at Business Academy Aarhus. This portfolio itself is coded by me.",
  "I grew up in the Czech Republic in a creative environment. My parents run two small companies, one producing snowboards and the other sewing clothing, so creating things and working with materials was always a natural part of everyday life around me.",
  "Growing up around snowboard production and clothing design also made me aware of the challenges connected to sustainability and materials in the industry. It made me curious not only about the products themselves, but also about the ideas, processes and values behind them.",
  "While people around me were often focused on physically creating products, I became more interested in the conceptual side of things, how brands communicate, how people understand products, and how different ideas come together to create a meaningful story.",
  "Today I'm especially interested in the fashion industry and in exploring how digital platforms can communicate the stories behind brands, materials and production. Recently I started learning web development using HTML, CSS and JavaScript, which allows me to combine design, coding and storytelling.",
  "I'm naturally curious and detail-oriented, and I enjoy learning new tools and exploring different ways creativity and technology can work together.",
]

const LANGUAGES = [
  { name: "English", level: 80 },
  { name: "Czech", level: 100 },
  { name: "German", level: 30 },
]

const EDUCATION = [
  {
    degree: "Bachelor's Degree in Digital Concept Development (currently studying)",
    school: "Business Academy Aarhus — Aarhus, Denmark",
  },
  {
    degree: "AP Degree in Branding and Marketing Management — Completed 2025",
    school: "VIA University College — Herning, Denmark",
  },
  {
    degree: "Language Studies — Completed 2023",
    school: "Language School Spevacek — Prague, Czech Republic",
  },
  {
    degree: "Higher Secondary Education — Completed 2022",
    school: "Waldorf Lyceum Secondary School — Prague, Czech Republic",
  },
  {
    degree: "Primary Education — Completed 2019",
    school: "Waldorf Primary School — Prague, Czech Republic",
  },
]

export default function About() {
  const [languagesOpen, setLanguagesOpen] = useState(true)
  const [educationOpen, setEducationOpen] = useState(false)

  return (
    <motion.div
      className="max-w-[1271px] mx-auto px-4 pb-6"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div
        className="about-text font-['Helvetica:Regular',sans-serif] text-[18px] text-black leading-[1.5] max-w-[1229px] space-y-4 mb-8"
        style={{ textAlign: "justify" }}
      >
        {ABOUT_PARAGRAPHS.map((text, i) => (
          <p key={i}>{text}</p>
        ))}
      </div>

      <div className="bg-white mb-0">
        <AccordionSection
          title="Languages"
          isExpanded={languagesOpen}
          onToggle={() => setLanguagesOpen(!languagesOpen)}
        >
          <div className="flex flex-col gap-4">
            {LANGUAGES.map(({ name, level }) => (
              <div key={name} className="flex items-center gap-4">
                <span className="text-[16px] w-[80px]">{name}</span>
                <div className="w-[200px] h-[20px] border border-black overflow-hidden">
                  <div className="bg-black h-full" style={{ width: `${level}%` }} />
                </div>
              </div>
            ))}
          </div>
        </AccordionSection>

        <AccordionSection
          title="Education"
          isExpanded={educationOpen}
          onToggle={() => setEducationOpen(!educationOpen)}
        >
          <div className="space-y-6">
            {EDUCATION.map(({ degree, school }) => (
              <div key={degree}>
                <p className="text-[16px] mb-1" style={{ fontWeight: "bold" }}>{degree}</p>
                <p className="text-[16px]">{school}</p>
              </div>
            ))}
          </div>
        </AccordionSection>
      </div>
    </motion.div>
  )
}
