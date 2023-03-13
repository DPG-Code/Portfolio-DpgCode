export default function ButtonView({ url }) {
  return (
    <a
      href={url}
      target='_blank'
      className='preview-button transition-fade px-6 py-2 bg-white shadow-lg rounded-full absolute bottom-[-20px] font-semibold text-xs text-[#0D0D0D] flex items-center justify-center gap-2   lg:text-base lg:gap-4'
    >
      VIEW PROJECT
      <svg
        xmlns='http://www.w3.org/2000/svg'
        fill='none'
        viewBox='0 0 24 24'
        strokeWidth={2}
        stroke='currentColor'
        className='w-2 h-2   lg:w-4 lg:h-4'
      >
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          d='M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3'
        />
      </svg>
    </a>
  )
}
