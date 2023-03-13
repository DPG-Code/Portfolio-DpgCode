import { motion } from 'framer-motion'

const technologies = [
  'JavaScript',
  'TypeScript',
  'React',
  'Next.Js',
  'Svelte',
  'Astro',
  'Node.js',
  'DataBase'
]

export default function Home() {
  return (
    <main
      id='home'
      className='h-screen min-h-[700px] w-full flex flex-col items-center justify-center gap-12 relative   sm:px-16   lg:flex-row lg:px-24   2xl:px-36'
    >
      <section className='px-6 w-full flex flex-col items-start justify-start gap-6   lg:px-0 lg:w-3/5   2xl:gap-10'>
        <motion.h1
          id='title-home'
          className='font-bold text-[#0D0D0D] leading-tight   dark:text-[#FFFFFF]'
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          front-end developer & graphic designer.
        </motion.h1>
        <h3
          id='description-home'
          className='font-normal text-[#595959] dark:text-gray-400'
        >
          I'm Daniel Prieto. I have{' '}
          <span className='font-semibold'>+2 years</span> of experience working
          as a developer and <span className='font-semibold'>+3 years</span> in
          design, I have successfully completed many projects and web apps.
        </h3>
        <div className='w-full flex items-center gap-6   lg:gap-12   2xl:gap-20'>
          <a
            href='/CV - Daniel Prieto Gaviria.pdf'
            download='CV - Daniel Prieto Gaviria'
            className='icon-animation font-semibold text-xs text-[#0D0D0D] dark:text-[#FFFFFF] flex items-center justify-center gap-2   xs:text-sm   sm:text-base sm:gap-4   2xl:text-2xl 2xl:gap-6'
          >
            DOWNLOAD CV
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={2}
              stroke='currentColor'
              className='w-3 h-3   sm:w-4 sm:h-4   2xl:w-6 2xl:h-6'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3'
              />
            </svg>
          </a>
        </div>
      </section>
      <aside className='transition-getIn px-6 w-full flex items-center justify-center   lg:px-0 lg:w-2/5'>
        <motion.img
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.4 }}
          className='z-30 me w-auto h-56   lg:h-80   2xl:h-[420px]'
          src='/assets/me.webp'
          alt='Porfile'
        />
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className='z-20 w-52 h-52 font-bold text-sm text-[#0D0D0D] dark:text-[#FFFFFF] flex flex-col items-start justify-center absolute   lg:w-72 lg:h-72 lg:text-lg   2xl:w-96 2xl:h-96 2xl:text-3xl'
        >
          {technologies.map((tech) => (
            <p key={tech} className='opacity-[.15]'>
              {tech}
            </p>
          ))}
        </motion.div>
        <img
          className='z-10 circle_home w-52 h-52 absolute   lg:w-72 lg:h-72   2xl:w-96 2xl:h-96'
          src='/assets/circle.webp'
          alt='Background circle primary'
        />
      </aside>
      <footer className='px-6 w-full absolute bottom-0   sm:px-16   lg:px-24   2xl:px-36'>
        <ul className='w-full h-16 font-semibold text-xs text-[#595959] dark:text-gray-400 flex items-center justify-start gap-3   lg:h-24 lg:text-base   2xl:h-32 2xl:text-xl'>
          <li className='transition-fade hover:text-[#0D0D0D] dark:hover:text-[#FFFFFF]'>
            <a href='https://github.com/DPG-Code' target='_blank'>
              GitHub
            </a>
          </li>
          <span>/</span>
          <li className='transition-fade hover:text-[#0D0D0D] dark:hover:text-[#FFFFFF]'>
            <a
              href='https://www.linkedin.com/in/daniel-prieto-gaviria'
              target='_blank'
            >
              LinkedIn
            </a>
          </li>
          <span>/</span>
          <li className='transition-fade hover:text-[#0D0D0D] dark:hover:text-[#FFFFFF]'>
            <a href='https://www.behance.net/danielprieto7' target='_blank'>
              Behance
            </a>
          </li>
        </ul>
      </footer>
    </main>
  )
}
