import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "motion/react"
import imgProfile from "../imports/assets/6f40815b214e6f7c7b314fb83871696156da13c1.png"

const SECTIONS = [
  { id: "internship-section", label: "INTERNSHIP AND PROJECTS" },
  { id: "my-work-section", label: "MY WORK THAT IS WORTH MENTIONING" },
  { id: "programs-section", label: "PROGRAMS I CAN WORK WITH" },
  { id: "contact-section", label: "CONTACT INFORMATION" },
]

export default function Navbar() {
  const [showNav, setShowNav] = useState(false)
  const [currentSection, setCurrentSection] = useState("")

  useEffect(() => {
    const handleScroll = () => {
      setShowNav(window.scrollY > 300)
      let current = ""
      for (const { id, label } of SECTIONS) {
        const el = document.getElementById(id)
        if (el && el.getBoundingClientRect().top <= 80) {
          current = label
        }
      }
      setCurrentSection(current)
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <AnimatePresence>
      {showNav && (
        <motion.nav
          initial={{ y: -60, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -60, opacity: 0 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          style={{
            position: "fixed",
            top: 0, left: 0, right: 0,
            zIndex: 1000,
            background: "#fff",
            borderBottom: "1px solid #000",
            padding: "0 24px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            height: "60px",
          }}
        >
          <span style={{
            fontFamily: "Helvetica, Arial, sans-serif",
            fontSize: "16px",
            letterSpacing: "0.08em",
            color: "#000",
          }}>
            {currentSection || "PORTFOLIO"}
          </span>
          <div style={{ width: "44px", height: "44px", overflow: "hidden", borderRadius: "8px" }}>
            <img
              src={imgProfile}
              alt=""
              style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top" }}
            />
          </div>
        </motion.nav>
      )}
    </AnimatePresence>
  )
}
