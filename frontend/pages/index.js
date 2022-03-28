import Head from 'next/head'
import { Introduction } from '../components/Introduction'
import { IntroductionPageProvider } from '../contexts/Introduction'

export default function Home() {
  return (
    <>

      <div>
        <Head>
          <title>Invictos</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/invictos.png" />
        </Head>
      </div>
        <Introduction />
    </>
  )
}
