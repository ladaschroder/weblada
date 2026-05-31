import img1 from "../../imports/assets/ccf70b4c5e3554be5ef3e770047e296b2413d1d7.png"
import img2 from "../../imports/assets/72aafcaf14e9cdb5281e8a0a7d7eca807b060930.png"

export function OldstarsDetail() {
  return (
    <div className="bg-white border border-black p-6 w-full">
      <div className="flex gap-6 mb-6">
        <div className="w-[290px] shrink-0">
          <img src={img1} alt="OLDstars" className="w-full h-auto" />
        </div>

        <div className="flex-1">
          <h3 className="font-['Helvetica:Bold',sans-serif] text-[18px] leading-[1.5] mb-2">Content Creator | OLDstars | 2023</h3>

          <div className="font-['Helvetica:Regular',sans-serif] text-[14px] leading-[1.5] space-y-4">
            <p>OLDstars is a Czech theatre organisation, responsible among other things for the Točník festival.</p>
            <p>
              During this five-month internship, which I found on my own initiative, I was responsible for building and executing the full marketing plan for the Točník festival. <strong>I created the overall visual identity of the campaign in Canva and managed the content calendar across social media, including paid advertising on Instagram through Meta Business Suite.</strong>
            </p>
            <p>
              I developed and scheduled posts throughout the entire lifecycle of the festival, from the build-up all the way through the event itself, and collaborated closely with the wider team to ensure maximum visibility. I also had one team member working under me, which gave me my first experience of coordinating and guiding someone else's work.
            </p>
          </div>
        </div>
      </div>

      <div className="w-[494px] h-[661px] overflow-hidden mx-auto" style={{ marginTop: "24px" }}>
        <img src={img2} alt="Festival content" className="w-full h-full object-cover" />
      </div>
    </div>
  )
}
