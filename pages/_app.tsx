import NavBar from '@/components/NavBar'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import '@/styles/NavBar.css'
import '@/styles/landing.css'
import '@/styles/about.css'
import '@/styles/contact.css'
import '@/styles/Qualty.css'
import { useEffect, useState } from 'react'
import { FaFacebook, FaWhatsapp, FaLinkedin} from 'react-icons/fa'
import { HiOutlineMail} from 'react-icons/hi'
import { BsFillPersonLinesFill, BsPhone } from 'react-icons/bs'
import Link from 'next/link'
//updated




export default function App({ Component, pageProps }: AppProps) {

  const [footerVisible, setFooterVisible] = useState(true);
  useEffect(() => {
    if (Component.name === 'Home') {
      setFooterVisible(false);
    } else {
      setFooterVisible(true);
    }
  }, [Component.name]);
  

  return (
    <>
      <NavBar/>
      {/* Social icons */}
      <div className='hidden lg:flex fixed flex-col top-[35%] z-index 9999'>
      <ul>

      <div className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[0px] duration-300 bg-blue-600'>
          <Link style={{ marginLeft: '15px' }}
            className='flex justify-between items-center w-full text-gray-300'
            href='https://www.facebook.com/sharer.php?u=https%3A%2F%2Fwww.prizma-il.com%2F'
          >
            Linkedin <FaLinkedin style={{ marginRight: '15px' }} size={30} />
          </Link>
        </div>

        <div className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[0px] duration-300 bg-blue-900'>
          <Link style={{ marginLeft: '15px' }}
            className='flex justify-between items-center w-full text-gray-300'
            href='https://www.facebook.com/sharer.php?u=https%3A%2F%2Fwww.prizma-il.com%2F'
          >
            Facebook <FaFacebook style={{ marginRight: '15px' }} size={30} />
          </Link>
        </div>

        <div className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[0px] duration-300 bg-[#25D366]'>
          <Link style={{ marginLeft: '15px' }}
            className='flex justify-between items-center w-full text-gray-300'
            href='/'
          >
            Whatsapp <FaWhatsapp style={{ marginRight: '15px' }} size={30} />
          </Link>
        </div>

        <div className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[0px] duration-300 bg-[#6fc2b0]'>
          <Link style={{ marginLeft: '15px' }}
            className='flex justify-between items-center w-full text-gray-300'
            href='/'
          >
            Email <HiOutlineMail style={{ marginRight: '15px' }} size={30} />
          </Link>
        </div>

        <div className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[0px] duration-300 bg-[#565f69]'>
          <Link style={{ marginLeft: '15px' }}
            className='flex justify-between items-center w-full text-gray-300'
            href='/about'
          >
            Resume <BsFillPersonLinesFill style={{ marginRight: '15px' }} size={30} />
          </Link>
        </div>
      </ul>
    </div>

    <Component {...pageProps} />
    { footerVisible && (
      <footer  id='webfooter' className='footer'>
        <div  id='buttom' className='footer-content'>
          <h1>כל הזכויות שמורות לפריזמה פתרונות מתקדמים בע&quot;מ</h1>
          <a>Created by @Yoav Polakovsky</a>
        </div>
      </footer>
    )}
  </>
  )
}