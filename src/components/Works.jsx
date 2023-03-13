import works from './dataWorks'
import ButtonView from './ButtonView'

export default function Works() {
  return (
    <section
      id='works'
      className='px-6 py-16 flex flex-col   sm:p-16   lg:p-24   2xl:p-36'
    >
      <h2 className='mb-16 font-bold text-3xl text-[#0D0D0D] dark:text-[#FFFFFF]   lg:text-5xl lg:mb-24   2xl:text-6xl 2xl:mb-32'>
        Works<span className='text-[#F3D335]'>.</span>
      </h2>
      <article className='flex flex-col gap-24   md:gap-32   lg:gap-52'>
        {works.map((project, index) => (
          <div
            className='w-full flex flex-col gap-8   sm:flex-row sm:justify-between sm:gap-12   2xl:gap-24'
            key={index}
          >
            <section className='w-full flex flex-col gap-2 relative   sm:w-1/2 sm:justify-center   lg:gap-4 lg:max-w-[500px]   2xl:max-w-[700px]'>
              <h4 className='font-bold text-2xl text-[#0D0D0D] dark:text-[#FFFFFF]   lg:text-5xl   2xl:text-6xl'>
                {project.title}
              </h4>
              <p className='font-medium text-sm text-[#595959] dark:text-gray-400   lg:text-lg   2xl:text-xl'>
                {project.description}
              </p>
              <ul className='font-bold text-xs text-[#0D0D0D] dark:text-[#FFFFFF] flex flex-wrap gap-x-2 gap-y-1   lg:text-sm   2xl:text-lg'>
                {project.technologies.map((tech, index) =>
                  index + 1 < project.technologies.length ? (
                    <li
                      key={tech}
                      className='flex items-center justify-center gap-x-2'
                    >
                      {tech}
                      <div className='w-1 h-1 bg-[#0D0D0D] rounded-full dark:bg-[#FFFFFF]'></div>
                    </li>
                  ) : (
                    <li key={tech}>{tech}</li>
                  )
                )}
              </ul>
              <span className='font-bold text-7xl text-[#0D0D0D] dark:text-[#FFFFFF] opacity-[.10] absolute bottom-0 right-0   lg:text-9xl   2xl:text-[156px]'>
                {index < 10 && '0'}
                {index + 1}
              </span>
            </section>
            <aside className='flex items-center justify-center   sm:w-1/2 sm:justify-end'>
              <div className='flex items-center justify-center relative'>
                <a href={project.url} target='_blank'>
                  <img
                    className='img_works w-56 h-auto object-cover   lg:w-80   2xl:w-96'
                    src={project.img}
                    alt={project.title}
                  />
                </a>
                <ButtonView url={project.url} />
              </div>
            </aside>
          </div>
        ))}
      </article>
    </section>
  )
}
