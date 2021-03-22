import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import 'semantic-ui-css/semantic.min.css'
import { Header, Image } from 'semantic-ui-react'
import '../styles/master.css'

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  return (
    <>
      <div className="ui inverted vertical center aligned segment" style={router.pathname == "/" ? {minHeight: "330px"} : {minHeight: '0px'}}>
        <div className="ui inverted top fixed menu">
          <div className="item">
            <Header as='h1' style={{ color: "white", fontFamily: "California", fontWeight: "normal", fontSize: "3em"}}>
              <Image circular src='/Profile.jpg' /> KEVIN CHEN
          </Header>
          </div>
          <Link href="/">
            <a className={router.pathname == "/" ? "active item" : "item"}>Home</a>
          </Link>
          <Link href="/resume">
            <a className={router.pathname == "/resume" ? "active item" : "item"}>Resume</a>
          </Link>
          <div className="right item">
            <a href="https://www.linkedin.com/in/kevinchengy/" target="_blank"><button className="ui linkedin button" style={{ marginRight: "1em" }}>
              <i className="linkedin icon"></i>
              LinkedIn
            </button></a>
            <a href="https://github.com/kevinchengy" target="_blank"><button className="ui button" style={{ marginRight: "1em" }}>
              <i className="github icon"></i>
              GitHub
            </button></a>
          </div>
        </div>
        <div className="ui text container">
          <h1 style={{marginTop: "1.5em", fontSize: "4em"}}>{router.pathname == "/" ? "hi there!" : router.pathname.slice(1,router.pathname.length)}</h1>
          <p style={router.pathname == "/" ? {fontWeight: 'normal'} : {display: 'none'}}>
            My name is Guan Yu Chen, you can call me Kevin. I am an University of Toronto Scarborough alumni, specializing in Machine Learning and Data Mining 
            during  my time there. Currently, working in Toronto, Ontario, Canada as a Programmer Analyst developing automation and artificial intelligence 
            solutions.
          </p>
        </div>
      </div>
      <div style={{ marginTop: "2em" }}>
        <Component {...pageProps} />
      </div>
      <div className="ui inverted vertical footer segment">
        <div className="ui center aligned container">
          <Image src="/logo.png" className="ui centered mini image" />
          <div className="ui horizontal inverted small">
            Copyright (c) 2021
          </div>
        </div>
      </div>
    </>
  )
}

export default MyApp
