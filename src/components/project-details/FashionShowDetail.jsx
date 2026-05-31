import img from "../../imports/assets/75a29072b65baaffe37531393de5a406fd94be55.png"

export function FashionShowDetail() {
  return (
    <div className="bg-white border border-black p-6 w-full">
      <div className="flex flex-col md:flex-row gap-6">
        <div className="w-[279px] shrink-0 self-start" style={{ marginTop: "20px" }}>
          <img src={img} alt="Fashion show" className="w-full h-auto" />
        </div>

        <div className="flex-1">
          <h3 className="font-['Helvetica:Bold',sans-serif] text-[18px] leading-[1.5] mb-2">Fashion Show Organizer | 2018</h3>

          <div className="font-['Helvetica:Regular',sans-serif] text-[14px] leading-[1.5] space-y-4">
            <p>
              As my final year project at primary school, I organised a complete fashion show entirely from scratch, at the age of fourteen. My sister designed and sewed a collection of around ten pieces focused on upcycling fabrics, and I took on full responsibility for bringing the event to life.
            </p>
            <p>
              This included finding and securing a venue, designing the choreography for each look as it was presented on the runway, planning the overall programme, coordinating a photographer, and preparing the visual styling of the space itself.
            </p>
            <p>
              It was one of the most challenging and rewarding things I had done at that point in my life, and the experience that first drew me closer to the fashion world and sparked my passion for it.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
