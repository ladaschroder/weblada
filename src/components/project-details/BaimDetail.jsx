import img from "../../imports/assets/984a99831eb08a4d2d24f14c97b037e269a3a3c1.png"

export function BaimDetail() {
  return (
    <div className="bg-white border border-black p-6 w-full">
      <div className="flex flex-col md:flex-row gap-6 mb-6">
        <div className="w-[281px] shrink-0">
          <img src={img} alt="BAIM" className="w-full h-auto" />
        </div>

        <div className="flex-1">
          <h3 className="font-['Helvetica:Bold',sans-serif] text-[18px] leading-[1.5] mb-2">Project Manager | BAIM (Start-up) | 2023</h3>

          <div className="font-['Helvetica:Regular',sans-serif] text-[14px] leading-[1.5] space-y-4">
            <p>BAIM is a Prague-based organisation supporting emerging fashion designers — from logo creation and collection development to sales and event management.</p>
            <p>
              During my six-month internship, which I found on my own initiative, I was responsible for organising fashion events and runway shows for up-and-coming designers. <strong>Over the course of the internship I coordinated 3–4 events end-to-end, managing everything from booking venues and casting models to coordinating photographers and ensuring video documentation of each show.</strong>
            </p>
            <p>
              One moment that stands out was discovering last-minute that a garment was poorly sewn and not ready for the runway. I quickly came up with a solution for how the piece could be altered and fixed in time, the show went on without issue. It was a good reminder that event management is as much about staying calm under pressure as it is about planning ahead.
            </p>
          </div>
        </div>
      </div>

      <div className="flex gap-6 items-start" style={{ justifyContent: "flex-end" }}>
        <div>
          <p className="font-['Helvetica:Bold',sans-serif] text-[18px] leading-[1.5] mb-2">A video from an event I organized.</p>
        </div>
        <div className="w-[504px] h-[353px]">
          <iframe
            src="https://www.youtube.com/embed/Ik6sJSJ_Dnk"
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
