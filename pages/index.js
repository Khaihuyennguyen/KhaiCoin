import Head from 'next/head'

import { useEffect, useState } from 'react'

import Post from '../components/Post'
import SendForm from '../components/SendForm'

import metadata from '../public/data/metadata.json'

function App() {
  const [toggleSendForm, setToggleSendForm] = useState(false)

  useEffect(() => {
    if (toggleSendForm) {
      document.body.classList.add("send-form")
    } else {
      document.body.classList.remove("send-form")
    }
  }, [toggleSendForm])

  const applyForKha = (
    <a href="#">Apply for $KHA</a>
  )

  const toggleForm = e => {
    e.preventDefault()
    setToggleSendForm(!toggleSendForm)
  }

  return (
    <>
      <Head>
        <title>K-H-A-I</title>
      </Head>

      <header>
        <h1>K<span>&mdash;</span>H<span>&mdash;</span>A<span>&mdash;</span>I</h1>

        <nav>
          {applyForKha}
          <a href="#" className="primary-action">Connect wallet</a>
        </nav>
      </header>

      <SendForm />

      <main>
        {metadata.map((data, index) => {
          return (
            <Post data={data} key={index} />
          )
        })}
      </main>
    </>
  );
}

export default App;
