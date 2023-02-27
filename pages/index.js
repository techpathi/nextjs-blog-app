import Head from 'next/head';
import Link from 'next/link';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Hey I am techpathi!</p>
        <p>
          (I am building a simple website using Next.js, you too can build one
          by getting started on{' '}
          <Link href='https://nextjs.org/learn'>our Next.js tutorial</Link>.)
        </p>
      </section>
    </Layout>
  );
}
