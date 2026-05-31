import { motion } from "motion/react"
import imgRanra from "../imports/assets/ac84f9612661e2940dcda9cf8a391a242f9e0a58.png"
import imgFashionShow from "../imports/assets/75a29072b65baaffe37531393de5a406fd94be55.png"
import imgExhibition from "../imports/assets/7a39f637306895db4d93dd5326c254b30cc6cf1a.png"
import imgForst from "../imports/assets/a04531763ac43a2b861faf8382afcb99f02afdd5.png"
import imgCode from "../imports/assets/d54a3f6e872b22a25c2a8105db4ae3ce7299a8b1.png"

function SkillBadge({ label, onScrollToSkill }) {
  return (
    <button
      onClick={(e) => { e.stopPropagation(); onScrollToSkill(label) }}
      className="project-skill-button px-2 py-0.5 border border-black rounded-full text-[10px] hover:scale-110 transition-all cursor-pointer"
    >
      {label}
    </button>
  )
}

function ProjectCard({ id, children, onOpenProject, topOffset, gridColumn }) {
  return (
    <motion.div
      style={{ display: "flex", flexDirection: "column", gap: "4px", marginTop: topOffset, gridColumn }}
      onClick={() => onOpenProject(id)}
      className="cursor-pointer"
      whileHover={{ y: -4 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  )
}

export default function MyWorkSection({ onOpenProject, onScrollToSkill }) {
  return (
    <motion.div
      id="my-work-section"
      className="max-w-[1251px] mx-auto px-4 py-10 border-t border-black"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="mywork-header" style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "32px" }}>
        <h2 className="mywork-heading section-heading font-['Helvetica:Regular',sans-serif] text-[50px] text-black leading-[1.1]">
          MY WORK THAT IS<br />WORTH MENTIONING
        </h2>
        <p className="mywork-subtitle text-[18px] leading-[1.1]" style={{ textAlign: "right", maxWidth: "320px", marginTop: "200px" }}>
          Creation of web draft,<br />design and marketing strategies.
        </p>
      </div>

      <div
        className="projects-grid grid gap-[32px]"
        style={{ gridTemplateColumns: "repeat(3, minmax(0, 1fr))" }}
      >
        {/* RANRA */}
        <ProjectCard id="ranra" onOpenProject={onOpenProject}>
          <div className="h-[197px] overflow-hidden rounded-lg group">
            <img
              src={imgRanra}
              alt=""
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              style={{ objectPosition: "center 25%" }}
            />
          </div>
          <div className="font-['Helvetica:Regular',sans-serif] text-[18px]">
            <p className="mb-2" style={{ fontWeight: "bold" }}>Web Design Concept | RANRA | 2024</p>
            <p className="mb-3">As part of my preparation for an internship, I created a complete website concept for the RANRA brand. The design offered more possibilities for showcasing their production and clothing compared to their current website.</p>
            <div className="flex flex-wrap gap-3">
              {["Figma", "Photoshop", "Illustrator", "InDesign", "HTML"].map((skill) => (
                <SkillBadge key={skill} label={skill} onScrollToSkill={onScrollToSkill} />
              ))}
            </div>
          </div>
        </ProjectCard>

        {/* Fashion Show */}
        <ProjectCard id="fashion-show" onOpenProject={onOpenProject}>
          <div className="h-[195px] overflow-hidden rounded-lg group">
            <img
              src={imgFashionShow}
              alt=""
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              style={{ objectPosition: "center top" }}
            />
          </div>
          <div className="h-[215px] overflow-hidden rounded-lg group">
            <img
              src={imgFashionShow}
              alt=""
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              style={{ objectPosition: "center bottom" }}
            />
          </div>
          <div className="font-['Helvetica:Regular',sans-serif] text-[18px]">
            <p className="mb-2" style={{ fontWeight: "bold" }}>Fashion Show Organizer | 2018</p>
            <p className="mb-3">One of my most important projects was organising a fashion show, a year-long effort that became a defining moment for me. My sister designed a collection focused on upcycling fabrics, while I managed the entire event. My responsibilities included securing a venue, selecting and preparing models, promoting the event, coordinating the show's program, and overseeing key organizational aspects. I successfully brought this challenging project to life at just fourteen years old.</p>
          </div>
        </ProjectCard>

        {/* Exhibition */}
        <ProjectCard id="exhibition" onOpenProject={onOpenProject} topOffset="418px">
          <div className="h-[215px] overflow-hidden rounded-lg group">
            <img src={imgExhibition} alt="" className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110" />
          </div>
          <div className="font-['Helvetica:Regular',sans-serif] text-[18px]">
            <p className="mb-2" style={{ fontWeight: "bold" }}>Exhibition Organizer | Sofia | 2024</p>
            <p className="mb-3">Together with a young photographer, we organized a public exhibition, filling a small gallery with photographs. The event was a great success.</p>
            <div className="flex flex-wrap gap-3">
              <SkillBadge label="Microsoft" onScrollToSkill={onScrollToSkill} />
            </div>
          </div>
        </ProjectCard>

        {/* Forst */}
        <ProjectCard id="forst" onOpenProject={onOpenProject}>
          <div className="h-[195px] overflow-hidden rounded-lg group">
            <img src={imgForst} alt="" className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110" />
          </div>
          <div className="font-['Helvetica:Regular',sans-serif] text-[18px]">
            <p className="mb-2" style={{ fontWeight: "bold" }}>Album Cover Designer | Forst | 2024</p>
            <p className="mb-3">Designed the cover for a young musician's new album and upcoming music projects, creating a strong visual identity for his work.</p>
            <div className="flex flex-wrap gap-3">
              {["Photoshop", "Illustrator", "InDesign", "Animation"].map((skill) => (
                <SkillBadge key={skill} label={skill} onScrollToSkill={onScrollToSkill} />
              ))}
            </div>
          </div>
        </ProjectCard>

        {/* Code Projects */}
        <ProjectCard id="code-projects" onOpenProject={onOpenProject} gridColumn="3">
          <div className="h-[194px] overflow-hidden rounded-lg group">
            <img src={imgCode} alt="" className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110" />
          </div>
          <div className="font-['Helvetica:Regular',sans-serif] text-[18px]">
            <p className="mb-2" style={{ fontWeight: "bold" }}>My Code Projects | 2026</p>
            <p className="mb-3">Alongside my marketing background, I have been independently building my web development skills, working with HTML, CSS, JavaScript and React.</p>
            <div className="flex flex-wrap gap-3">
              {["VS Code", "HTML", "CSS", "JS"].map((skill) => (
                <SkillBadge key={skill} label={skill} onScrollToSkill={onScrollToSkill} />
              ))}
            </div>
          </div>
        </ProjectCard>
      </div>
    </motion.div>
  )
}
