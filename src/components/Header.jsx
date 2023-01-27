export default function Header() {
  return(
    <header className='z-50 w-full bg-white fixed top-0'>
      <nav className='navbar px-6 h-16 w-full flex items-center justify-between   lg:px-24 lg:h-24   2xl:px-36 2xl:h-32'>
        <img src='/assets/logo.webp' className='logo h-6   lg:h-8   2xl:h-10' alt="logo" />
        <ul className='h-full flex gap-4 font-semibold text-xs text-[#595959]   lg:text-base lg:gap-10   2xl:text-xl 2xl:gap-16'>
          <li className='h-full flex items-center justify-center relative'>
            <a href='#home'>HOME</a>
            <div className='dot absolute bottom-0'></div>
          </li>
          <li className='h-full flex items-center justify-center relative'>
            <a href='#works'>WORKS</a>
            <div className='dot absolute bottom-0'></div>
          </li>
          <li className='h-full flex items-center justify-center relative'>
            <a className='text-[#0D0D0D]' href='#contact'>CONTACT</a>
            <div className='dot absolute bottom-0'></div>
          </li>
        </ul>
      </nav>
    </header>
  )
}