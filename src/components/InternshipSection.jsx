import { motion } from "motion/react"
import imgLejaan from "../imports/assets/6f363f3233952e9b8b7797c3ce298eb542953f74.png"
import imgBaim from "../imports/assets/984a99831eb08a4d2d24f14c97b037e269a3a3c1.png"
import imgTrash1 from "../imports/assets/3359176b7c1fbdd0e9cf14ed130e8dcc85b9e9d3.png"
import imgTrash2 from "../imports/assets/65c68aca43add9c491175c7712fe620cfce7c6f2.png"
import imgJysk from "../imports/assets/3852bdde94b79b449d1e53140f428c8fde9f71e1.png"
import imgHypnosis from "../imports/assets/1a870e8e4d9594a2d0db89025d9ffd7d23c2c7ff.png"
import imgOldstars from "../imports/assets/ccf70b4c5e3554be5ef3e770047e296b2413d1d7.png"

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

function ProjectCard({ id, children, onOpenProject, topOffset }) {
  return (
    <motion.div
      style={{ display: "flex", flexDirection: "column", gap: "4px", marginTop: topOffset }}
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

export default function InternshipSection({ onOpenProject, onScrollToSkill }) {
  return (
    <motion.div
      id="internship-section"
      className="max-w-[1258px] mx-auto px-4 py-10 border-t border-black"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="mb-8">
        <div className="internship-heading-wrap flex justify-end mb-8">
          <h2 className="section-heading font-['Helvetica:Regular',sans-serif] text-[50px] text-black text-right leading-[1.1]">
            INTERNSHIP<br />AND PROJECTS
          </h2>
        </div>
        <p className="internship-intro text-[18px] leading-[1.1] text-left max-w-[400px]" style={{ marginBottom: "60px" }}>
          I've been involved in projects such as content creation, marketing assistance or organizing fashion shows.
        </p>
      </div>

      <div
        className="projects-grid grid gap-[32px]"
        style={{ gridTemplateColumns: "repeat(3, minmax(0, 1fr))" }}
      >
        {/* LEJAAN */}
        <ProjectCard id="lejaan" onOpenProject={onOpenProject}>
          <div className="h-[195px] overflow-hidden rounded-lg group">
            <img
              src={imgLejaan}
              alt=""
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              style={{ objectPosition: "50% 20%" }}
            />
          </div>
          <div className="font-['Helvetica:Regular',sans-serif] text-[18px]">
            <p className="mb-2" style={{ fontWeight: "bold" }}>Marketing Assistant | LEJAAN | 2024</p>
            <p className="mb-3">Supporting the marketing team, working with email marketing, and helping to prepare the launch strategy for a new collection. Assisting with content creation and campaign planning.</p>
            <div className="flex flex-wrap gap-3">
              {["MailChimp", "Photoshop", "Microsoft"].map((skill) => (
                <SkillBadge key={skill} label={skill} onScrollToSkill={onScrollToSkill} />
              ))}
            </div>
          </div>
        </ProjectCard>

        {/* BAIM */}
        <ProjectCard id="baim" onOpenProject={onOpenProject} topOffset="199px">
          <div className="h-[195px] overflow-hidden rounded-lg group">
            <img src={imgBaim} alt="" className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110" />
          </div>
          <div className="font-['Helvetica:Regular',sans-serif] text-[18px]">
            <p className="mb-2" style={{ fontWeight: "bold" }}>Project Manager | BAIM (Start-up) | 2023</p>
            <p className="mb-3">Planning and organising events and photoshoots, finding locations, and communicating with partners. Leading projects from start to finish, solving problems, and working under pressure.</p>
            <div className="flex flex-wrap gap-3">
              <SkillBadge label="Microsoft" onScrollToSkill={onScrollToSkill} />
            </div>
          </div>
        </ProjectCard>

        {/* Trash Fashion */}
        <ProjectCard id="trash-fashion" onOpenProject={onOpenProject}>
          <div className="h-[195px] overflow-hidden rounded-lg group">
            <img
              src={imgTrash1}
              alt=""
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              style={{ objectPosition: "50% 8%" }}
            />
          </div>
          <div className="h-[195px] overflow-hidden rounded-lg group">
            <img
              src={imgTrash2}
              alt=""
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              style={{ objectPosition: "50% 100%" }}
            />
          </div>
          <div className="font-['Helvetica:Regular',sans-serif] text-[18px]">
            <p className="mb-2" style={{ fontWeight: "bold" }}>Marketing & Content Creator | Trash Fashion | Ongoing</p>
            <p className="mb-3">Long-term support in content creation for social media, product photography, and branding. Managing marketing strategies and building the brand's identity.</p>
            <div className="flex flex-wrap gap-3">
              {["Photoshop", "Illustrator", "InDesign", "Meta"].map((skill) => (
                <SkillBadge key={skill} label={skill} onScrollToSkill={onScrollToSkill} />
              ))}
            </div>
          </div>
        </ProjectCard>

        {/* JYSK */}
        <ProjectCard id="jysk" onOpenProject={onOpenProject}>
          <div className="h-[195px] overflow-hidden rounded-lg group">
            <img src={imgJysk} alt="" className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110" />
          </div>
          <div className="font-['Helvetica:Regular',sans-serif] text-[18px]">
            <p className="mb-2" style={{ fontWeight: "bold" }}>Project Presenter | JYSK Upcycling Project | 2024</p>
            <p className="mb-3">A school project selected for presentation directly to JYSK representatives. Focused on upcycling JYSK furniture and promoting sustainability through creative design solutions.</p>
            <div className="flex flex-wrap gap-3">
              {["Photoshop", "Illustrator", "InDesign", "Animation"].map((skill) => (
                <SkillBadge key={skill} label={skill} onScrollToSkill={onScrollToSkill} />
              ))}
            </div>
          </div>
        </ProjectCard>

        {/* Hypnosis */}
        <ProjectCard id="hypnosis" onOpenProject={onOpenProject}>
          <div className="h-[195px] overflow-hidden rounded-lg group">
            <img src={imgHypnosis} alt="" className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110" />
          </div>
          <div className="font-['Helvetica:Regular',sans-serif] text-[18px]">
            <p className="mb-2" style={{ fontWeight: "bold" }}>Assistant | Hypnosis | 2020</p>
            <p className="mb-3">Helping with event organisation, working with Excel, designing costumes, and assisting in production. Working as a hostess and selling products at events. Quick learning and flexibility in different tasks.</p>
            <div className="flex flex-wrap gap-3">
              <SkillBadge label="Microsoft" onScrollToSkill={onScrollToSkill} />
            </div>
          </div>
        </ProjectCard>

        {/* OLDstars */}
        <ProjectCard id="oldstars" onOpenProject={onOpenProject} topOffset="199px">
          <div className="h-[195px] overflow-hidden rounded-lg group">
            <img src={imgOldstars} alt="" className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110" />
          </div>
          <div className="font-['Helvetica:Regular',sans-serif] text-[18px]">
            <p className="mb-2" style={{ fontWeight: "bold" }}>Content Creator | OLDstars | 2023</p>
            <p className="mb-3">Creating a marketing plan and Instagram strategy, managing content, and preparing ads to increase reach and engagement.</p>
            <div className="flex flex-wrap gap-3">
              {["Photoshop", "Illustrator", "InDesign", "Meta"].map((skill) => (
                <SkillBadge key={skill} label={skill} onScrollToSkill={onScrollToSkill} />
              ))}
            </div>
          </div>
        </ProjectCard>
      </div>
    </motion.div>
  )
}
