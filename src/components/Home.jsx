const technologies = ['JavaScript', 'TypeScript', 'React', 'Next.Js', 'Node.js', 'DataBase', 'Test']

export default function Home() {
  return (
    <main id='home' className='h-screen min-h-[700px] w-full flex flex-col items-center justify-center gap-12 relative   sm:px-16   lg:flex-row lg:px-24   2xl:px-36'>
      <section className='px-6 w-full flex flex-col items-start justify-start gap-6   lg:px-0 lg:w-3/5   2xl:gap-10'>
        <h1 className='transition-getIn font-bold text-3xl text-[#0D0D0D]   xs:text-4xl   sm:text-5xl   2xl:text-7xl'>front-end developer & graphic designer.</h1>
        <h3 className='font-normal text-xs text-[#595959]   xs:text-sm   sm:text-base   2xl:text-2xl'>I'm Daniel Prieto. I have <span className='font-semibold'>+2 years</span> of experience working as a developer and <span className='font-semibold'>+3 years</span> in design, I have successfully completed many projects and web apps.</h3>
        <div className='w-full flex items-center gap-6   lg:gap-12   2xl:gap-20'>
          <a href="#works" className='icon-animation font-semibold text-xs text-[#0D0D0D] flex items-center justify-center gap-2   xs:text-sm   sm:text-base sm:gap-4   2xl:text-2xl 2xl:gap-6'>
            SEE MY WORKS
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-3 h-3   sm:w-4 sm:h-4   2xl:w-6 2xl:h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
            </svg>
          </a>
          <a href="/CV - Daniel Prieto Gaviria.pdf" download="CV - Daniel Prieto Gaviria" className='font-semibold text-xs text-[#0D0D0D] flex items-center justify-center gap-2   xs:text-sm   sm:text-base sm:gap-4   2xl:text-2xl 2xl:gap-6'>
            DOWNLOAD CV
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-3 h-3   sm:w-4 sm:h-4   2xl:w-6 2xl:h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 9.75v6.75m0 0l-3-3m3 3l3-3m-8.25 6a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z" />
            </svg>
          </a>
        </div>
      </section>
      <aside className='transition-getIn px-6 w-full flex items-center justify-center   lg:px-0 lg:w-2/5'>
        <img className='z-30 me w-auto h-52   xs:h-56   lg:h-80   2xl:h-[420px]' src='/assets/me.webp' alt="Picture me" />
        <div className='z-20 w-48 h-48 font-bold text-sm text-[#0D0D0D] flex flex-col items-start justify-center absolute   xs:w-52 xs:h-52   lg:w-72 lg:h-72 lg:text-lg   2xl:w-96 2xl:h-96 2xl:text-3xl'>
          {
            technologies.map(tech => (
              <p key={tech} className='opacity-[.15]'>{tech}</p>
            ))
          }
        </div>
        <img className='z-10 circle_home w-48 h-48 absolute   xs:w-52 xs:h-52   lg:w-72 lg:h-72   2xl:w-96 2xl:h-96' src='/assets/circle.webp' alt="Background picture of me" />
      </aside>
      <footer className='px-6 w-full absolute bottom-0   sm:px-16   lg:px-24   2xl:px-36'>
        <ul className='w-full h-16 font-semibold text-xs text-[#595959] flex items-center justify-start gap-3   lg:h-24 lg:text-base   2xl:h-32 2xl:text-xl'>
          <li className='transition-fade hover:text-[#0D0D0D]'><a href="https://github.com/DPG-Code" target="_blank">GitHub</a></li>
          <span>/</span>
          <li className='transition-fade hover:text-[#0D0D0D]'><a href="https://www.linkedin.com/in/daniel-prieto-gaviria" target="_blank">LinkedIn</a></li>
          <span>/</span>
          <li className='transition-fade hover:text-[#0D0D0D]'><a href="https://www.behance.net/danielprieto7" target="_blank">Behance</a></li>
        </ul>
      </footer>
    </main>
  )
}