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
            <h3>
              A 19 years old sophomore student majoring CS 💻 at the University of Indonesia 🎓
              Meet Fahdii Ajmalal Fikrie! 👋

              <br/><br/>

              Fahdii is very passionate when it comes to taking nap 💤 and watching movies 🍿
              His current favorite movies are Good Morning (1959) 🌄 and The Makioka Sisters (1983) 🎎

              <br/> <br/>

              All the funsies aside 🎭 Fahdii is a software engineer in the making 🧑‍💻
              He looks forward to be able to give significant contributions
              to the vast & rapid growing world of technology 💯
            </h3>
          </div>
        </HomepageWrapper>
      </Layout>
    </>

  )
}
