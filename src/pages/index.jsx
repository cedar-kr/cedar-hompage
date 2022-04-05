import Head from 'next/head'
import { Section } from '../section'

export default function Home() {
  return (
    <div>
      <Head>
        <title>(주)시더</title>
        <meta
          name="description"
          content="(주)시더는 매장내에 정보나 광고 디스플레이를 원격 관리하는 클라우드 및 안드로이드 기반 디지털 사이니지 솔루션을 서비스하고 있는 회사입니다."
        />
        <meta charset="UTF-8"/>
        <link rel="icon" href="/favicon.png" type="image/x-icon" sizes="16x16" />
        <meta name="viewport" content="width=device-width, initial-scale=0.1" />
        {/* 기본 태그 미리보기 */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="http://cedar.kr" />
        <meta property="og:title" content="(주) 시더" />
        <meta property="og:image" content="https://example.com/image.jpg" />
        <meta property="og:description" content="설명" />
        <meta property="og:site_name" content="(주) 시더" />
        <meta property="og:locale" content="en_US" />

        {/* -- 다음의 태그는 필수는 아니지만, 포함하는 것을 추천함 --*/}
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

        {/* 네이버 블로그 / 카카오톡 미리보기 */}
        <meta property="og:title" content="(주) 시더" />
        <meta property="og:url" content="http://cedar.kr" />
        <meta property="og:type" content="text/html; charset=utf-8" />
        <meta property="og:image" content="https://example.com/image.jpg" />
        <meta property="og:title" content="(주) 시더" />
        <meta property="og:description" content="설명" />

        {/* 트위터 미리보기 설정  */}
        <meta
          name="twitter:card"
          content="트위터 카드 타입(요약정보, 사진, 비디오)"
        />
        <meta name="twitter:title" content="(주) 시더" />
        <meta name="twitter:description" content="설명" />
        <meta name="twitter:image" content="https://example.com/image.jpg" />

        {/* 검색 키워드 정리 */}
        <meta name="Keywords" content="시더" />
        <meta name="Keywords" content="주식회사 시더" />

        {/* 검색 로봇 제어 */}
        <meta name="robots" content="all" />

        {/* charset */}
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />

        {/* charset */}
        <meta httpEquiv="Subject" content="주식회사 시더" />

        <link rel="icon" href="/icons/favicon.png" />
        <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR&family=Roboto:wght@700&display=swap" rel="stylesheet" />
      </Head>
      <Section />
    </div>
  )
}
