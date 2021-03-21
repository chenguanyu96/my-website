import React from 'react'
import Link from 'next/Link'
import { useRouter } from 'next/router'
import 'semantic-ui-css/semantic.min.css'
import { Header, Image } from 'semantic-ui-react'

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  return (
    <>
      <div className="ui inverted top fixed menu">
        <div className="item">
          <Header as='h1' style={{ color: "white" }}>
            <Image circular src='/Profile.jpg' /> Kevin Chen
        </Header>
        </div>
        <Link href="/">
          <a className={router.pathname == "/" ? "active item" : "item"}>Home</a>
        </Link>
        <Link href="/projects">
          <a className={router.pathname == "/projects" ? "active item" : "item"}>Projects</a>
        </Link>
        <div className="right item">
          <button className="ui linkedin button" style={{ marginRight: "1em" }}>
            <i className="linkedin icon"></i>
            LinkedIn
          </button>
          <button className="ui button" style={{ marginRight: "1em" }}>
            <i className="github icon"></i>
            GitHub
          </button>
          <button className="ui positive button">
            <i className="envelope icon"></i>
            Email
          </button>
        </div>
      </div>
      <div style={{ marginTop: "7em" }}>
        <Component {...pageProps} />
      </div>
    </>
  )
}

export default MyApp
