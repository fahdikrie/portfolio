import React from 'react'
import Head from 'next/head'
import dynamic from 'next/dynamic'

import NavigationBar from 'components/layout/navigationbar'

const VantaLayout = dynamic(
  () => import('./vantalayout/index'),
  { ssr: false }
)

const HeadTags = () => {
  return (
    <Head>
      <script
        src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r121/three.min.js"
      />
      <link
        rel="preload"
        href="/fonts/San Francisco Pro/SF-Pro-Display-Bold.ttf"
        as="font"
        crossOrigin=""
      />
      <link
        rel="preload"
        href="/fonts/San Francisco Pro/SF-Pro-Display-BoldItalic.ttf"
        as="font"
        crossOrigin=""
      />
      <link
        rel="preload"
        href="/fonts/San Francisco Pro/SF-Pro-Display-Black.ttf"
        as="font"
        crossOrigin=""
      />
    </Head>
  )
}

const Layout = (props) => {
  return (
    <>
      <HeadTags/>
      {props.currentPage === "index" ? <VantaLayout/> : null}
      <NavigationBar currentPage={props.currentPage}/>
      {props.children}
    </>
  )
}

export default Layout