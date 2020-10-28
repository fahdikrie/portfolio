import React from 'react'
import Head from 'next/head'
import dynamic from 'next/dynamic'

import NavigationBar from './NavigationBar/index'

// importing VantaLayout using dynamic non-ssr import
const VantaLayout = dynamic(
  () => import('./VantaLayout/index'),
  { ssr: false }
)

const Layout = (props) => {
  return (
    <>
      <Head>
        <script
          src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r121/three.min.js">
        </script>
      </Head>

      <VantaLayout/>
      <NavigationBar/>
      {props.children}
    </>
  )
}

export default Layout;

