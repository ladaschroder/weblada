import img from "../../imports/assets/6f363f3233952e9b8b7797c3ce298eb542953f74.png"

export function LejaanDetail() {
  return (
    <div className="bg-white border border-black p-6 w-full min-h-[400px]">
      <div className="flex flex-col md:flex-row gap-6">
        <div className="w-[281px] shrink-0">
          <img src={img} alt="LEJAAN" className="w-full h-auto" />
        </div>

        <div className="flex-1">
          <h3 className="font-['Helvetica:Bold',sans-serif] text-[18px] leading-[1.5] mb-2">Marketing Assistant | LEJAAN | 2024</h3>

          <div className="font-['Helvetica:Regular',sans-serif] text-[14px] leading-[1.5] space-y-4">
            <p>LEJAAN is a Czech lifestyle brand based in Prague and Liberec, specialising in bedding, duvets, pyjamas and bedroom accessories.</p>
            <p>
              During my 3–4 month internship, which I sought out on my own initiative, I worked directly at their Prague office supporting the marketing team. My main contribution was in email marketing, <strong>I designed the visual layout and structure of newsletters in Mailchimp, Canva and Photoshop, with the goal of making them as engaging as possible.</strong>
            </p>
            <p>
              Over the course of the internship I designed around three email concepts. My first proposal was too creatively bold for the brand's visual world, which taught me to listen more carefully to a brand's identity and adapt my ideas accordingly, a lesson I carried into every project after that.
            </p>
            <p>
              I also contributed ideas for photoshoots around the launch of three new summer collections, suggesting how sets could be styled and shot to feel on-brand. I was present during some of the shoots, helping bring those ideas to life. I additionally picked up new skills along the way, including adding subtitles to video content.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
