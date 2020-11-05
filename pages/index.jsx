import Head from 'next/head'

import Layout from 'components/Layout/index';
import {
  Heading,
  HomepageWrapper,
  Title
} from 'styles/index.style'


export default function Home() {
  return (
    <>
      <Layout
        currentPage="index"
      >
        <HomepageWrapper>
          <div className="title-section">
            <Title>
              badi, <br/>
              at your service!
            </Title>
          </div>

          <div className="about-section">
            <h3>
              A 19 years old sophomore student currently majoring CS 💻 at the University of Indonesia 🧑‍🎓
              Meet Fahdii Ajmalal Fikrie! 👋

              <br/><br/>

              Fahdii is very passionate when it comes to taking naps 💤 and watching movies 🍿
              His current favorite movies are Good Morning (1959) 🌄 and The Makioka Sisters (1983) 🎎

              <br/> <br/>

              All the funsies aside 🎭 Fahdii is currently a software engineer in the making 🧑‍💻
              He's looking forward to be able to do big things 🚀 and give significant contributions 💪
              to the vast & rapid growing world of technology 💯
            </h3>
          </div>

          <div className="projects-section">
            <div className="main-projects">

            </div>

            <div className="solo-projects">

            </div>

          </div>
        </HomepageWrapper>
      </Layout>
    </>

  )
}
