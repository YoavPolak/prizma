import NavBar from '@/components/NavBar'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import '@/styles/NavBar.css'
import '@/styles/landing.css'
import '@/styles/about.css'
import '@/styles/contact.css'
import '@/styles/Qualty.css'
import { useEffect, useState } from 'react'



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
