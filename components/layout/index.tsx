import React from 'react'
import Head from 'next/head'
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
  pageTitle: string,
  description: string
}

const Layout = ({
  currentPage,
  children,
  pageTitle,
  description
}: LayoutProps) => {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content={description}></meta>
        <meta charSet="utf-8" />

        <meta property="og:title" content={pageTitle} key="ogtitle" />
        <meta property="og:description" content={description} key="ogdesc" />

        <link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>☔️</text></svg>" />
        <title>{pageTitle}</title>
      </Head>
      <S.Layout>
        {currentPage === "/" ? <VantaLayout /> : null}
        <NavigationBar currentPage={currentPage} />
        {children}
      </S.Layout>
    </>
  )
}

export default Layout