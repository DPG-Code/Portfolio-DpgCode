import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

export default function Contact() {
  const { ref, inView } = useInView({ threshold: 0 })

  const animate = inView ? { scale: 1 } : { scale: 0 }
  const animateLCircle = inView ? { x: 0 } : { x: -200 }
  const animateRCircle = inView ? { x: 0 } : { x: 200 }

  return (
    <div
      id='contact'
      className='px-6 overflow-hidden	h-screen min-h-[600px] w-full flex flex-col items-center justify-center relative gap-2   sm:gap-4 sm:px-16   2xl:gap-10'
    >
      <h2 className='z-30 font-bold text-3xl text-[#0D0D0D] dark:text-[#FFFFFF] text-center drop-shadow-2xl   sm:text-5xl   2xl:text-8xl'>
        Let's works together
      </h2>
      <a
        href='mailto:prietogaviriadaniel@gmail.com'
        className='icon-animation z-30 font-semibold text-lg text-[#0D0D0D] dark:text-[#FFFFFF] flex items-center justify-center gap-2   sm:text-xl sm:gap-4   2xl:text-3xl 2xl:gap-6'
      >
        Contact me
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          strokeWidth={2}
          stroke='currentColor'
          className='w-4 h-4   2xl:w-6 2xl:h-6'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3'
          />
        </svg>
      </a>
      <motion.div
        ref={ref}
        initial={{ scale: 0 }}
        animate={animate}
        transition={{ duration: 1 }}
        className='circle_contact-1 dark:opacity-80'
      ></motion.div>
      <motion.div
        initial={{ x: -200 }}
        animate={animateLCircle}
        transition={{ duration: 1 }}
        className='circle_contact-down dark:border-[#FFFFFF] dark:opacity-10'
      ></motion.div>
      <motion.div
        initial={{ x: 200 }}
        animate={animateRCircle}
        transition={{ duration: 1 }}
        className='circle_contact-down-2 dark:border-[#FFFFFF] dark:opacity-10'
      ></motion.div>
      <footer className='w-full h-16 flex items-start justify-center absolute bottom-0   sm:h-24   2xl:h3-2'>
        <ul className='w-auto h-5 flex items-center justify-center gap-6   sm:gap-10'>
          <li className='font-semibold text-xs text-[#0D0D0D] dark:text-[#FFFFFF]   2xl:text-sm'>
            <h4>DANIEL PRIETO</h4>
          </li>
          <li className='w-px h-4 bg-[#0D0D0D] dark:bg-[#FFFFFF]   2xl:h-5'></li>
          <li className='w-4 h-4    2xl:w-5 2xl:h-5'>
            <a href='https://github.com/DPG-Code' target='_blank'>
              <svg
                className='dark:fill-[#FFFFFF]'
                role='img'
                viewBox='0 0 24 24'
                xmlns='http://www.w3.org/2000/svg'
              >
                <title>GitHub</title>
                <path d='M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12' />
              </svg>
            </a>
          </li>
          <li className='w-4 h-4    2xl:w-5 2xl:h-5'>
            <a
              href='https://www.linkedin.com/in/daniel-prieto-gaviria'
              target='_blank'
            >
              <svg
                className='dark:fill-[#FFFFFF]'
                role='img'
                viewBox='0 0 24 24'
                xmlns='http://www.w3.org/2000/svg'
              >
                <title>LinkedIn</title>
                <path d='M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z' />
              </svg>
            </a>
          </li>
          <li className='w-4 h-4    2xl:w-5 2xl:h-5'>
            <a href='https://www.behance.net/danielprieto7' target='_blank'>
              <svg
                className='dark:fill-[#FFFFFF]'
                role='img'
                viewBox='0 0 24 24'
                xmlns='http://www.w3.org/2000/svg'
              >
                <title>Behance</title>
                <path d='M0 4.4804V19.243h7.1554c.6613 0 1.3078-.0832 1.9297-.248.6288-.1654 1.1905-.4203 1.6792-.7661.485-.3431.8784-.788 1.1677-1.3369.2862-.542.4294-1.187.4294-1.9354 0-.9232-.219-1.7109-.6675-2.369-.446-.6542-1.1187-1.1139-2.0274-1.3746.6674-.3161 1.1658-.7227 1.506-1.2177.3371-.4967.5058-1.1174.5058-1.8607 0-.6873-.1127-1.2677-.3375-1.7318-.2306-.4709-.552-.8452-.9632-1.1266-.4176-.2808-.912-.4857-1.4912-.6085-.5827-.1261-1.22-.1872-1.9264-.1872zm15.6674.9903v1.4567h5.9844V5.4707zM3.2509 6.9947h3.0407c.2873 0 .5683.0204.8359.0731.2728.0466.508.134.716.2595.2096.1205.3754.293.501.5132.1208.2203.1806.5038.1806.8474 0 .6189-.1811 1.0702-.5551 1.3426-.3778.2775-.8543.4147-1.4304.4147H3.2509zm15.545 1.2564c-.819 0-1.5587.1462-2.2294.436-.6705.2904-1.2463.6875-1.7318 1.1915-.4846.5011-.8535 1.0986-1.12 1.7909-.2612.69-.3942 1.4366-.3942 2.236 0 .8268.1284 1.5891.3835 2.2786.258.6923.6198 1.2822 1.0856 1.781.478.4967 1.046.8784 1.726 1.1497.6806.269 1.4382.4048 2.2803.4048 1.208 0 2.2446-.2771 3.0949-.8326.8599-.5528 1.4902-1.471 1.9058-2.7574h-2.585c-.1.3307-.359.649-.784.9467-.4295.2988-.9417.4492-1.534.4492-.8233 0-1.4588-.2168-1.8985-.6462-.4412-.4294-.7267-1.2289-.7267-2.0742h7.713c.0552-.8291-.0122-1.6218-.2045-2.3797-.1938-.7601-.5033-1.4365-.9393-2.029-.4355-.5931-.9904-1.0667-1.667-1.4165-.6788-.3543-1.4703-.5288-2.3747-.5288zm-.0887 2.217c.7209 0 1.3126.2092 1.6612.5954.3503.389.6065.9432.6766 1.6915h-4.7766c.0136-.2085.058-.4444.1339-.7045.0749-.2668.2039-.5164.3933-.753.1905-.2326.4402-.431.744-.5896.3109-.1608.6986-.2397 1.1676-.2397zM3.251 12.664h3.5334c.6996 0 1.2682.1602 1.6948.4836.4259.328.6405.8685.6405 1.6292 0 .3885-.0632.7094-.1946.9566-.131.2495-.3106.4466-.528.5896-.2172.1491-.4753.2498-.7661.3137-.2862.0639-.5905.092-.9115.092H3.2509z' />
              </svg>
            </a>
          </li>
        </ul>
      </footer>
    </div>
  )
}
