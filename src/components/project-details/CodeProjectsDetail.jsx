import img from "../../imports/assets/d54a3f6e872b22a25c2a8105db4ae3ce7299a8b1.png"

export function CodeProjectsDetail() {
  return (
    <div className="bg-white border border-black p-6 w-full">
      <div className="flex flex-col md:flex-row gap-6">
        <div className="w-[296px] h-[240px] overflow-hidden shrink-0">
          <img src={img} alt="Code projects" className="w-full h-full object-cover" />
        </div>

        <div className="flex-1">
          <h3 className="font-['Helvetica:Bold',sans-serif] text-[18px] leading-[1.5] mb-2">My Code Projects | 2026</h3>

          <div className="font-['Helvetica:Regular',sans-serif] text-[14px] leading-[1.5] space-y-4">
            <p>
              Alongside my marketing background, I have been independently developing my web development skills. My projects include a personal portfolio website built in HTML, CSS and JavaScript, a quiz application and a weather app built in React, the latter integrating a live weather API. I am currently working on a new React application.
            </p>
            <p>
              <strong>All projects are available on my: </strong>
              <a
                href="https://github.com/ladaschroder"
                target="_blank"
                rel="noopener noreferrer"
                className="font-['Helvetica:Bold',sans-serif] underline"
              >
                GitHub
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
