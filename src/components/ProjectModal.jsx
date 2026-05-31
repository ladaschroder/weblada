import { motion, AnimatePresence } from "motion/react"

export default function ProjectModal({ id, children, isOpen, onClose }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <div
          id={`project-modal-${id}`}
          className="project-target-modal project-target-modal--open"
          role="dialog"
          aria-modal="true"
        >
          <motion.div
            className="project-target-modal__backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
            aria-label="Close project detail"
          />
          <motion.div
            className="project-target-modal__window"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 40 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
          >
            <button
              className="project-target-modal__close"
              onClick={onClose}
              aria-label="Close project detail"
            >
              x
            </button>
            {children}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}
