import img from "../../imports/assets/1a870e8e4d9594a2d0db89025d9ffd7d23c2c7ff.png"

export function HypnosisDetail() {
  return (
    <div className="bg-white border border-black p-6 w-full">
      <div className="flex gap-6">
        <div className="w-[369px] shrink-0 self-start" style={{ marginTop: "20px" }}>
          <img src={img} alt="Hypnosis" className="w-full h-auto" />
        </div>

        <div className="flex-1">
          <h3 className="font-['Helvetica:Bold',sans-serif] text-[18px] leading-[1.5] mb-2">Assistant | Hypnosis | 2020</h3>

          <div className="font-['Helvetica:Regular',sans-serif] text-[14px] leading-[1.5] space-y-4">
            <p>Hypnosis is a Prague-based event agency.</p>
            <p>
              As part of my secondary school work experience, I spent one month at Hypnosis where I took on a variety of tasks. On the administrative side I helped with paperwork and office work, while also working directly at events as a hostess. I additionally got involved in the creative side, brainstorming costume ideas and gift concepts for corporate clients.
            </p>
            <p>
              It was my first real experience in a professional environment and taught me to be flexible and pick up new tasks quickly.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
