import Landing from '@/components/Landing'
import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>פתרונות דפוס מתקדמים - שילוט ודפוס לתעשייה, למשרד ולבית - פריזמה</title>
      </Head>
      <main>
        <Landing/>
        <footer  className='footer' data-visble='true'>
          <div  id='buttom' className='footer-content'>
            <h1>כל הזכויות שמורות לפריזמה פתרונות מתקדמים בע&quot;מ</h1>
            <a>Created by @Yoav Polakovsky</a>
          </div>
        </footer>
      </main>
    </>
  )
}
