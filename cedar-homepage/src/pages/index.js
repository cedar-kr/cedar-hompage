import Head from 'next/head'
import Footer from '../components/Footer'
import Header from '../components/Header'

export default function Home() {
  return (
    <div >
      <Head>
        <title>(주)시더</title>
        <meta name="description" content="(주)시더는 매장내에 정보나 광고 디스플레이를 원격 관리하는 클라우드 및 안드로이드 기반 디지털 사이니지 솔루션을 서비스하고 있는 회사입니다." />
        <link rel="icon" href="/icons/favicon.png" />
      </Head>
      <Header/>
      <Footer/>
    </div>
  )
}
