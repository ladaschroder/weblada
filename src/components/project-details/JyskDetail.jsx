import img1 from "../../imports/assets/3852bdde94b79b449d1e53140f428c8fde9f71e1.png"
import img2 from "../../imports/assets/d583fb3c6fa567ff80dc2e89eba140c47aa5398b.png"

export function JyskDetail() {
  return (
    <div className="bg-white border border-black p-6 w-full">
      <div className="flex flex-col md:flex-row gap-6 mb-6">
        <div className="w-[281px] shrink-0 self-start" style={{ marginTop: "20px" }}>
          <img src={img1} alt="JYSK project" className="w-full h-auto" />
        </div>

        <div className="flex-1">
          <h3 className="font-['Helvetica:Bold',sans-serif] text-[18px] leading-[1.5] mb-2">Project Presenter | JYSK Upcycling Project | 2024</h3>

          <div className="font-['Helvetica:Regular',sans-serif] text-[14px] leading-[1.5] space-y-4">
            <p>A school project developed as part of my studies, selected to be presented directly to JYSK representatives.</p>
            <p>
              As part of a four-person team, we developed a concept for a JYSK sub-brand that would collect, repair and resell damaged furniture as unique upcycled pieces, paired with a full advertising campaign to encourage customers to recycle or resell their old items rather than throw them away.
            </p>
            <p><strong>My key contribution was creating an animation for the campaign video, depicting burning furniture as a visual hook to highlight the problem of waste.</strong></p>
            <p>
              I taught myself Adobe Animate specifically for this project. Our concept was well received by the JYSK representatives who watched the presentation.
            </p>
          </div>
        </div>
      </div>

      <div className="flex gap-4" style={{ justifyContent: "space-between" }}>
        <div className="w-[445px] h-[320px] overflow-hidden">
          <img src={img2} alt="Project screenshot" className="w-full h-full object-cover" />
        </div>
        <div className="w-[646px] h-[325px]">
          <iframe
            src="https://www.youtube.com/embed/q8lz_-A3sH4"
            width="100%"
            height="100%"
            allowFullScreen
            style={{ border: 0 }}
          />
        </div>
      </div>
    </div>
  )
}
