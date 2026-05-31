import img from "../../imports/assets/3359176b7c1fbdd0e9cf14ed130e8dcc85b9e9d3.png"

export function TrashFashionDetail() {
  return (
    <div className="bg-white border border-black p-6 w-full">
      <div className="flex flex-col md:flex-row gap-6 mb-6">
        <div className="w-[281px] shrink-0">
          <img src={img} alt="Trash Fashion" className="w-full h-auto" />
        </div>

        <div className="flex-1">
          <h3 className="font-['Helvetica:Bold',sans-serif] text-[18px] leading-[1.5] mb-2">Marketing & Content Creator | Trash Fashion | Ongoing</h3>

          <div className="font-['Helvetica:Regular',sans-serif] text-[14px] leading-[1.5] space-y-4">
            <p>Trash Fashion is a Czech independent fashion label focused on upcycling, creating original collections as well as made-to-order pieces.</p>
            <p>
              For the past five years I have been voluntarily supporting the designer behind Trash Fashion on Instagram. My role involves planning the content calendar, suggesting what to post and when, shaping the tone and style of captions, and keeping the profile active and consistent with the brand's identity.
            </p>
            <p>
              This is a passion project, something I do out of genuine love for fashion and social media, and a reflection of the fact that marketing is not just something I study, but something I naturally do in my own time.
            </p>
          </div>
        </div>
      </div>

      <div className="flex gap-4" style={{ justifyContent: "flex-end" }}>
        <div>
          <p className="font-['Helvetica:Bold',sans-serif] text-[18px] leading-[1.5] mb-2">A project by the designer I collaborated on.</p>
        </div>
        <div className="w-[560px] h-[280px]">
          <iframe
            src="https://www.youtube.com/embed/vHps6TGgmVI"
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
