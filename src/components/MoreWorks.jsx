import moreWorks from "./dataMoreWorks"

const ButtonView = ({ url }) => {
  return (
    <a href={url} target='_blank' className="font-semibold text-sm text-[#0D0D0D] flex items-center justify-center gap-1   lg:text-lg lg:gap-6   2xl:text-2xl 2xl:gap-10">
      View
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="#0D0D0D" className="w-2 h-2   lg:w-4 lg:h-4   2xl:w-6 2xl:h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
      </svg>
    </a>
  )
}


export default function MoreWorks() {
  return (
    <article className="px-6 pt-16 flex flex-col   sm:px-16   lg:px-24   2xl:px-36">
      <h2 id='more-works' className="mb-16 font-bold text-3xl text-[#0D0D0D]   lg:text-5xl   2xl:text-6xl 2xl:mb-24">More Works<span className='text-[#F3D335]'>.</span></h2>
      <section className="flex flex-col items-center gap-12">
        {
          moreWorks.map((project, index) => (
              <div className="w-full h-auto flex items-center justify-between" key={index}>
                <div className="h-full mr-4 flex items-center justify-start   lg:mr-6   2xl:mr-12">
                  <div className="mr-2 w-6 h-px bg-[#0D0D0D] opacity-[.20]   lg:w-10 lg:mr-4   2xl:w-16 2xl:mr-8"></div>
                  <span className="font-medium textl-xl text-[#0D0D0D] opacity-[.20]   lg:text-3xl   2xl:text-4xl">{index < 10 && '0'}{index + 1}</span>
                </div>
                <section className="mr-auto h-auto flex flex-col items-start justify-center   lg:gap-3   2xl:gap-5">
                  <h4 className="font-semibold textl-3xl text-[#0D0D0D]   lg:text-4xl   2xl:text-5xl">{project.title}</h4>
                  <p className="font-normal text-xs text-[#595959]   lg:text-base   2xl:text-lg">{project.description}</p>
                </section>
                <aside className='h-full flex'>
                  <ButtonView url={project.url} />
                </aside>
              </div>
            )
          )
        }
      </section>
    </article>
  )
}