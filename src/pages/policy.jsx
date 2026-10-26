import Head from 'next/head';
import Policy from '../section/Policy';

export default function PolicyPage() {
  return (
    <div>
      <Head>
        <title>개인정보 처리방침 | 주식회사 시더</title>
        <meta name="description" content="주식회사 시더 개인정보 처리방침" />
        <link rel="icon" href="/icons/favicon.png" />
      </Head>
      <Policy />
    </div>
  );
}
