import { motion } from "motion/react"
import img10Original from "../imports/assets/91d205cd844256f4ebad3a3615260d90e6b5c526.png"

export default function ContactSection() {
  return (
    <motion.div
      id="contact-section"
      className="max-w-[1261px] mx-auto px-4 py-10 border-t border-black"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex justify-between items-start gap-8">
        <div>
          <h2 className="section-heading font-['Helvetica:Regular',sans-serif] text-[50px] leading-none text-black uppercase">
            Contact Information
          </h2>

          <div className="contact-info-text font-['Helvetica:Regular',sans-serif] text-[18px]">
            <p>Lada Schröderová</p>
            <p>E-mail: lada.schroder@gmail.com</p>
            <p>Tel: +420 720327693</p>
            <p>IG: lada.schroder</p>
            <a
              href="/cv.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="font-['Helvetica:Bold',sans-serif] underline pt-5 cursor-pointer block"
            >
              Open CV
            </a>
          </div>
        </div>

        <div className="contact-photo mt-[58px] w-[120px] h-[120px] md:w-[241px] md:h-[239px] rounded-[35px] overflow-hidden border-3 border-black">
          <img
            src={img10Original}
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </motion.div>
  )
}
