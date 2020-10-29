import Head from 'next/head'

import Layout from '../components/Layout/index';
import {
  HomepageWrapper,
  Heading
} from '../styles/index.style'


export default function Home() {
  return (
    <>
      <Layout>
        <HomepageWrapper>
          <Heading>
            badi, <br/>
            at your service!
          </Heading>
        </HomepageWrapper>
      </Layout>
    </>

  )
}
