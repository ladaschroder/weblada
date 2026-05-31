import { motion } from "motion/react"
import AccordionSection from "./AccordionSection"
import {
  PhotoshopIcon, InDesignIcon, IllustratorIcon,
  WordIcon, ExcelIcon, PowerPointIcon,
  FigmaIcon, WixIcon, ShopifyIcon,
  VSCodeIcon, HTMLIcon, CSSIcon, JavaScriptIcon, ReactIcon,
  MailChimpIcon, MetaIcon,
} from "./SkillIcons"

function SkillRow({ Icon, label, description }) {
  return (
    <div className="flex flex-row gap-4 items-start">
      <div className="w-[80px] flex flex-col items-center shrink-0">
        <Icon />
        <span className="text-[12px] mt-1 text-center leading-tight">{label}</span>
      </div>
      <p className="text-[14px]">{description}</p>
    </div>
  )
}

export default function ProgramsSection({ accordionState, onToggle }) {
  return (
    <motion.div
      id="programs-section"
      className="max-w-[1261px] mx-auto px-4 py-10 border-t border-black"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex justify-between items-start mb-8">
        <div />
        <h2 className="section-heading font-['Helvetica:Regular',sans-serif] text-[50px] text-black text-right uppercase">
          Programs<br />I can work with
        </h2>
      </div>

      <div className="bg-white">
        <div id="adobe-section">
          <AccordionSection
            title="Adobe"
            isExpanded={accordionState.adobe}
            onToggle={() => onToggle("adobe")}
          >
            <div className="flex flex-col gap-8">
              <SkillRow Icon={PhotoshopIcon} label="Photoshop" description="Basic photo editing, cropping, working with layers, and retouching." />
              <SkillRow Icon={InDesignIcon} label="InDesign" description="Basic video editing, timeline management, color correction, and adding effects." />
              <SkillRow Icon={IllustratorIcon} label="Illustrator" description="Working with vectors, designing logos, icons, and graphic elements." />
            </div>
          </AccordionSection>
        </div>

        <div id="microsoft-section">
          <AccordionSection
            title="Microsoft"
            isExpanded={accordionState.microsoft}
            onToggle={() => onToggle("microsoft")}
          >
            <div className="flex flex-col gap-8">
              <SkillRow Icon={WordIcon} label="Word" description="Formatting text, editing documents, and basic typography." />
              <SkillRow Icon={ExcelIcon} label="Excel" description="Data management, basic analysis, charts, and tables." />
              <SkillRow Icon={PowerPointIcon} label="PowerPoint" description="Creating presentations, visual editing, and animations." />
            </div>
          </AccordionSection>
        </div>

        <div id="web-section">
          <AccordionSection
            title="Web Design"
            isExpanded={accordionState.web}
            onToggle={() => onToggle("web")}
          >
            <div className="flex flex-col gap-8">
              <SkillRow Icon={FigmaIcon} label="Figma" description="UI/UX design, prototyping, and team collaboration on design projects." />
              <SkillRow Icon={WixIcon} label="Wix" description="Creating and editing websites, working with templates, and basic SEO settings." />
              <SkillRow Icon={ShopifyIcon} label="Shopify" description="Creating and customizing websites, working with templates, and implementing basic SEO optimization." />
            </div>
          </AccordionSection>
        </div>

        <div id="programming-section">
          <AccordionSection
            title="Programming"
            isExpanded={accordionState.programming}
            onToggle={() => onToggle("programming")}
          >
            <div className="flex flex-col gap-8">
              <SkillRow Icon={VSCodeIcon} label="Visual Studio Code" description="Using Visual Studio Code for basic code editing, project organization, and working with web development files." />
              <SkillRow Icon={HTMLIcon} label="HTML" description="Basic knowledge of HTML for structuring web pages and creating simple website layouts." />
              <SkillRow Icon={CSSIcon} label="CSS" description="Basic understanding of CSS for styling web pages and adjusting layouts and visual elements." />
              <SkillRow Icon={JavaScriptIcon} label="JavaScript" description="Basic knowledge of JavaScript for adding simple interactivity to web pages." />
              <SkillRow Icon={ReactIcon} label="React" description="Basic knowledge of React, including components, state, and props. Used to build this portfolio." />
              <div className="mt-4">
                <p className="text-[14px]">
                  Basic ability to work with the <strong>command line</strong> and use <strong>Node.js</strong> to run and manage simple JavaScript projects.
                </p>
              </div>
            </div>
          </AccordionSection>
        </div>

        <div id="marketing-section">
          <AccordionSection
            title="Marketing Tools"
            isExpanded={accordionState.marketing}
            onToggle={() => onToggle("marketing")}
          >
            <div className="flex flex-col gap-8">
              <SkillRow Icon={MailChimpIcon} label="MailChimp" description="Managing email campaigns, designing newsletters, and working with contact databases." />
              <SkillRow Icon={MetaIcon} label="Meta" description="Creating and managing ads in Meta Ads Manager, targeting audiences, and monitoring campaign performance." />
            </div>
          </AccordionSection>
        </div>
      </div>
    </motion.div>
  )
}
