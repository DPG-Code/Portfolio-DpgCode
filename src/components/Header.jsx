import ButtonTheme from './ButtonTheme'

export default function Header() {
  return (
    <header className='z-50 w-full bg-white dark:bg-[#0D0D0D] fixed top-0'>
      <nav className='navbar px-6 h-16 w-full flex items-center justify-between   sm:px-16   lg:px-24 lg:h-24   2xl:px-36 2xl:h-32'>
        <a href='#home'>
          <img
            src='/assets/logo.webp'
            className='logo h-6 dark:invert   lg:h-8   2xl:h-10'
            alt='logo'
          />
        </a>
        <ul className='h-full flex gap-4 font-semibold text-xs text-[#595959] dark:text-gray-400   lg:text-base lg:gap-10   2xl:text-xl 2xl:gap-16'>
          <li className='h-full flex items-center justify-center relative'>
            <a className='dark:hover:text-white' href='#home'>
              HOME
            </a>
            <div className='dot absolute bottom-0 bg-[#0D0D0D] dark:bg-[#f3d335]'></div>
          </li>
          <li className='h-full flex items-center justify-center relative'>
            <a className='dark:hover:text-white' href='#works'>
              WORKS
            </a>
            <div className='dot absolute bottom-0 bg-[#0D0D0D] dark:bg-[#f3d335]'></div>
          </li>
          <li className='h-full flex items-center justify-center relative'>
            <a
              className='text-[#0D0D0D] dark:text-white dark:hover:text-white'
              href='#contact'
            >
              CONTACT
            </a>
            <div className='dot absolute bottom-0 bg-[#0D0D0D] dark:bg-[#f3d335]'></div>
          </li>
          <li className='h-full flex items-center justify-center relative'>
            <ButtonTheme />
          </li>
        </ul>
      </nav>
    </header>
  )
}
