import React from 'react'
import dynamic from 'next/dynamic'

import NavigationBar from 'components/layout/navigationbar'

const VantaLayout = dynamic(
  () => import('./vantalayout/index'),
  { ssr: false }
)

interface LayoutProps {
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