import React from 'react'
import dynamic from 'next/dynamic'

import NavigationBar from 'components/layout/navigation-bar'
import * as S from './index.style'

const VantaLayout = dynamic(
  () => import('./vanta-layout/index'),
  { ssr: false }
)

interface LayoutProps {
  currentPage: string
  children: React.ReactNode
}

const Layout = ({ currentPage, children }: LayoutProps) => {
  return (
    <S.Layout>
      {/* {currentPage === "/" ? <VantaLayout /> : null} */}
      <NavigationBar currentPage={currentPage} />
      {children}
    </S.Layout>
  )
}

export default Layout