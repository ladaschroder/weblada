import { useState } from "react"

import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import About from "./components/About"
import InternshipSection from "./components/InternshipSection"
import MyWorkSection from "./components/MyWorkSection"
import ProgramsSection from "./components/ProgramsSection"
import ContactSection from "./components/ContactSection"
import ProjectModal from "./components/ProjectModal"

import { LejaanDetail } from "./components/project-details/LejaanDetail"
import { BaimDetail } from "./components/project-details/BaimDetail"
import { TrashFashionDetail } from "./components/project-details/TrashFashionDetail"
import { JyskDetail } from "./components/project-details/JyskDetail"
import { HypnosisDetail } from "./components/project-details/HypnosisDetail"
import { OldstarsDetail } from "./components/project-details/OldstarsDetail"
import { RanraDetail } from "./components/project-details/RanraDetail"
import { FashionShowDetail } from "./components/project-details/FashionShowDetail"
import { ExhibitionDetail } from "./components/project-details/ExhibitionDetail"
import { ForstDetail } from "./components/project-details/ForstDetail"
import { CodeProjectsDetail } from "./components/project-details/CodeProjectsDetail"

const SKILL_MAP = {
  Photoshop:          { key: "adobe",       id: "adobe-section" },
  Illustrator:        { key: "adobe",       id: "adobe-section" },
  InDesign:           { key: "adobe",       id: "adobe-section" },
  Animation:          { key: "adobe",       id: "adobe-section" },
  Canva:              { key: "adobe",       id: "adobe-section" },
  "Premiere Pro":     { key: "adobe",       id: "adobe-section" },
  "Adobe Animate":    { key: "adobe",       id: "adobe-section" },
  Microsoft:          { key: "microsoft",   id: "microsoft-section" },
  Word:               { key: "microsoft",   id: "microsoft-section" },
  Excel:              { key: "microsoft",   id: "microsoft-section" },
  PowerPoint:         { key: "microsoft",   id: "microsoft-section" },
  Figma:              { key: "web",         id: "web-section" },
  Wix:                { key: "web",         id: "web-section" },
  Shopify:            { key: "web",         id: "web-section" },
  "VS Code":          { key: "programming", id: "programming-section" },
  HTML:               { key: "programming", id: "programming-section" },
  CSS:                { key: "programming", id: "programming-section" },
  JS:                 { key: "programming", id: "programming-section" },
  JavaScript:         { key: "programming", id: "programming-section" },
  React:              { key: "programming", id: "programming-section" },
  MailChimp:          { key: "marketing",   id: "marketing-section" },
  Meta:               { key: "marketing",   id: "marketing-section" },
  "Meta Business Suite": { key: "marketing", id: "marketing-section" },
}

const MODALS = [
  { id: "lejaan",         Content: LejaanDetail },
  { id: "baim",           Content: BaimDetail },
  { id: "trash-fashion",  Content: TrashFashionDetail },
  { id: "jysk",           Content: JyskDetail },
  { id: "hypnosis",       Content: HypnosisDetail },
  { id: "oldstars",       Content: OldstarsDetail },
  { id: "ranra",          Content: RanraDetail },
  { id: "fashion-show",   Content: FashionShowDetail },
  { id: "exhibition",     Content: ExhibitionDetail },
  { id: "forst",          Content: ForstDetail },
  { id: "code-projects",  Content: CodeProjectsDetail },
]

export default function App() {
  const [openModal, setOpenModal] = useState(null)
  const [accordionState, setAccordionState] = useState({
    adobe: false,
    microsoft: false,
    web: false,
    programming: false,
    marketing: false,
  })

  const toggleAccordion = (key) => {
    setAccordionState((prev) => ({ ...prev, [key]: !prev[key] }))
  }

  const openAccordion = (key) => {
    setAccordionState((prev) => ({ ...prev, [key]: true }))
  }

  const scrollToSkillSection = (skillName, event) => {
    event?.stopPropagation()
    const match = SKILL_MAP[skillName]
    if (!match) return
    openAccordion(match.key)
    setTimeout(() => {
      document.getElementById(match.id)?.scrollIntoView({ behavior: "smooth", block: "start" })
    }, 100)
  }

  return (
    <div className="page-wrapper bg-white min-h-screen">
      {/* Fixed navigation bar (appears on scroll) */}
      <Navbar />

      {/* Hero: name, folders, profile photo */}
      <Hero />

      {/* About text + Languages + Education accordions */}
      <About />

      {/* Internship & Projects grid */}
      <InternshipSection
        onOpenProject={setOpenModal}
        onScrollToSkill={scrollToSkillSection}
      />

      {/* My Work grid */}
      <MyWorkSection
        onOpenProject={setOpenModal}
        onScrollToSkill={scrollToSkillSection}
      />

      {/* Programs / Skills accordions */}
      <ProgramsSection
        accordionState={accordionState}
        onToggle={toggleAccordion}
      />

      {/* Contact information */}
      <ContactSection />

      {/* Project detail modals */}
      {MODALS.map(({ id, Content }) => (
        <ProjectModal
          key={id}
          id={id}
          isOpen={openModal === id}
          onClose={() => setOpenModal(null)}
        >
          <Content />
        </ProjectModal>
      ))}
    </div>
  )
}
