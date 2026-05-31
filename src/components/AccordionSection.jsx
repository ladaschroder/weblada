import { motion, AnimatePresence } from "motion/react"

const svgPaths = {
  p3e6a4ae8: "M85.9076 5.99987L46.8794 28.5669",
  p4c81d80: "M8.125 6.13135L47.3793 28.5669",
}

function ExpandIcon({ isExpanded }) {
  return (
    <motion.div
      className="h-[34px] w-[93px]"
      animate={{ rotate: isExpanded ? 180 : 0 }}
      transition={{ duration: 0.25 }}
    >
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 93 34">
        <g>
          <path d={svgPaths.p4c81d80} stroke="black" strokeWidth="2" />
          <path d={svgPaths.p3e6a4ae8} stroke="black" strokeWidth="2" />
        </g>
      </svg>
    </motion.div>
  )
}

export default function AccordionSection({ title, children, isExpanded, onToggle }) {
  return (
    <div className="border-b border-black">
      <button
        className="portfolio-accordion-trigger"
        onClick={onToggle}
        type="button"
      >
        <p className="portfolio-accordion-title">{title}</p>
        <ExpandIcon isExpanded={isExpanded} />
      </button>

      <AnimatePresence initial={false}>
        {isExpanded && children && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            style={{ overflow: "hidden" }}
          >
            <div className="px-[11px] pb-[28px]">{children}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
