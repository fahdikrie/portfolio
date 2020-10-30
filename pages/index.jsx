import Head from 'next/head'

import Layout from 'components/Layout/index';
import {
  HomepageWrapper,
  Heading
} from 'styles/index.style'


export default function Home() {
  return (
    <>
      <Layout
        currentPage="index"
      >
        <HomepageWrapper>
          <div className="title-section">
            <Heading>
              badi, <br/>
              at your service!
            </Heading>
          </div>

          <div className="about-section">

          </div>
        </HomepageWrapper>
      </Layout>
    </>

  )
}
