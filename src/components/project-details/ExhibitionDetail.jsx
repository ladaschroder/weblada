import img from "../../imports/assets/7a39f637306895db4d93dd5326c254b30cc6cf1a.png"

export function ExhibitionDetail() {
  return (
    <div className="bg-white border border-black p-6 w-full">
      <div className="flex flex-col md:flex-row gap-6">
        <div className="w-[291px] h-[240px] overflow-hidden shrink-0">
          <img src={img} alt="Exhibition" className="w-full h-full object-cover" />
        </div>

        <div className="flex-1">
          <h3 className="font-['Helvetica:Bold',sans-serif] text-[18px] leading-[1.5] mb-2">Exhibition Organizer | Sofia | 2024</h3>

          <div className="font-['Helvetica:Regular',sans-serif] text-[14px] leading-[1.5] space-y-4">
            <p>
              When my friend and photographer Sofia was preparing her first ever public exhibition, I stepped in to help organise and promote the entire event. Over the course of 3–4 months we worked together to find a suitable venue in Prague, curate and arrange over 30 photographs, and build up awareness through marketing and promotion.
            </p>
            <p>
              On the night, the exhibition welcomed around 50 visitors, a great result for a first independent show. It was a rewarding experience that combined project organisation, creative thinking and grassroots marketing all in one.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
