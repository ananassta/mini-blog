import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import Search from '../components/search'
// import utilStyles from '../styles/utils.module.css'

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section>
        <h2>Search</h2>
        <Search />
      </section>
    </Layout>
  )
}