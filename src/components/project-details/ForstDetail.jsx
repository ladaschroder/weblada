import img from "../../imports/assets/a04531763ac43a2b861faf8382afcb99f02afdd5.png"

export function ForstDetail() {
  return (
    <div className="bg-white border border-black p-6 w-full">
      <div className="flex flex-col md:flex-row gap-6">
        <div className="w-[240px] max-w-full h-[240px] overflow-hidden shrink-0">
          <img src={img} alt="Forst album cover" className="w-full h-full object-cover" />
        </div>

        <div className="flex-1">
          <h3 className="font-['Helvetica:Bold',sans-serif] text-[18px] leading-[1.5] mb-2">Album Cover Designer | Forst | 2024</h3>
          <p className="font-['Helvetica:Regular',sans-serif] text-[14px] leading-[1.5]">
            Designed the album cover and visual identity for a friend's independent music project. Applying my Adobe skills in graphic design and visual storytelling through music.
          </p>
        </div>

        <div style={{ width: "200px", height: "200px", flexShrink: 0 }}>
          <iframe
            src="https://www.youtube.com/embed/LENzNFL1BFg"
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
