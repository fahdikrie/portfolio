import React from 'react'
import Head from 'next/head'
import dynamic from 'next/dynamic'

import NavigationBar from 'components/layout/navigationbar'

const VantaLayout = dynamic(
  () => import('./vantalayout/index'),
  { ssr: false }
)

type LayoutProps = {
  currentPage: string
  children: React.ReactNode
}

const Layout = ({ currentPage, children }: LayoutProps) => {
  return (
    <>
      {currentPage === "index" ? <VantaLayout /> : null}
      <NavigationBar currentPage={currentPage} />
      {children}
    </>
  )
}

export default Layout