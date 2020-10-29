import Head from 'next/head'

import Layout from 'components/Layout/index';
import {
  HomepageWrapper,
  Heading
} from 'styles/index.style'


export default function Home() {
  return (
    <>
      <Layout>
        <HomepageWrapper>
          <div className="title-section">
            <Heading>
              badi, <br/>
              at your service!
            </Heading>
          </div>
        </HomepageWrapper>
      </Layout>
    </>

  )
}
