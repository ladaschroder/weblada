import img from "../../imports/assets/ac84f9612661e2940dcda9cf8a391a242f9e0a58.png"

export function RanraDetail() {
  return (
    <div className="bg-white border border-black p-6 w-full min-h-[400px]">
      <div className="flex gap-6">
        <div className="w-[290px] shrink-0 self-start" style={{ marginTop: "20px" }}>
          <img src={img} alt="RANRA website" className="w-full h-auto" />
        </div>

        <div className="flex-1">
          <h3 className="font-['Helvetica:Bold',sans-serif] text-[18px] leading-[1.5] mb-2">Web Design Concept | RANRA | 2024</h3>

          <div className="font-['Helvetica:Regular',sans-serif] text-[14px] leading-[1.5] space-y-4">
            <p>RANRA is a fashion brand.</p>
            <p>
              Out of personal interest in web design and development, <strong>I independently taught myself Figma and created a fully functional prototype for a redesigned RANRA website.</strong> The concept focused on giving the brand more space to communicate their production process transparently, showing what they make, how they make it, and the values behind it.
            </p>
            <p>
              The project also marked the beginning of my journey into web development, where I started combining design thinking with basic coding. I reached out to RANRA directly and pitched the concept as part of an internship application, though I did not hear back. It remains one of the projects I am most proud of, not just for the result, but for the initiative and self-learning behind it.
            </p>
            <p>
              <strong>Link to the prototype: </strong>
              <a
                href="https://www.figma.com/proto/pBjzvHHiD9TnSDG3voAD8m/RANRA-web?node-id=6-2&page-id=0%3A1&starting-point-node-id=6%3A2&scaling=scale-down&content-scaling=fixed&t=ijkECouLuhMeIgFM-1"
                target="_blank"
                rel="noopener noreferrer"
                className="font-['Helvetica:Bold',sans-serif] underline"
              >
                RANRA web
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
