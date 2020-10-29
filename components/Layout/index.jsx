import React from 'react'
import Head from 'next/head'
import Link from "next/link"
import dynamic from 'next/dynamic'

import NavigationBar from './NavigationBar/index'

// importing VantaLayout using dynamic non-ssr import
const VantaLayout = dynamic(
  () => import('./VantaLayout/index'),
  { ssr: false }
)

const HeadTags = () => {
  return (
    <Head>
      {/* import THREE using cdn */}
      <script
        src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r121/three.min.js">
      </script>

      <link
        rel="preload"
        href="fonts/San\ Francisco\ Pro/SF-Pro-Display-Light.otf"
        as="font"
        crossOrigin=""
      />
      <link
        rel="preload"
        href="fonts/San\ Francisco\ Pro/SF-Pro-Display-LightItalic.otf"
        as="font"
        crossOrigin=""
      />
      <link
        rel="preload"
        href="fonts/San\ Francisco\ Pro/SF-Pro-Display-Regular.otf"
        as="font"
        crossOrigin=""
      />
      <link
        rel="preload"
        href="fonts/San\ Francisco\ Pro/SF-Pro-Display-RegularItalic.otf"
        as="font"
        crossOrigin=""
      />
      <link
        rel="preload"
        href="fonts/San\ Francisco\ Pro/SF-Pro-Display-Bold.otf"
        as="font"
        crossOrigin=""
      />
      <link
        rel="preload"
        href="fonts/San\ Francisco\ Pro/SF-Pro-Display-BoldItalic.otf"
        as="font"
        crossOrigin=""
      />
      <link
        rel="preload"
        href="fonts/San\ Francisco\ Pro/SF-Pro-Display-Black.otf"
        as="font"
        crossOrigin=""
      />
      <link
        rel="preload"
        href="fonts/San\ Francisco\ Pro/SF-Pro-Display-BlackItalic.otf"
        as="font"
        crossOrigin=""
      />
      <link
        rel="preload"
        href="fonts/Ubuntu/Ubuntu-R.ttf"
        as="font"
        crossOrigin=""
      />
      <link
        rel="preload"
        href="fonts/Ubuntu/Ubuntu-RI.ttf"
        as="font"
        crossOrigin=""
      />
      <link
        rel="preload"
        href="fonts/Ubuntu/Ubuntu-B.ttf"
        as="font"
        crossOrigin=""
      />
      <link
        rel="preload"
        href="fonts/Ubuntu/Ubuntu-BI.ttf"
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

      <VantaLayout/>
      <NavigationBar/>
      {props.children}
    </>
  )
}

export default Layout;

