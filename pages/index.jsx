import Head from 'next/head'

import Layout from 'components/Layout/index'
import ProjectCard from 'components/ProjectCard/index'
import {
  fetchMainProjects,
  fetchSoloProjects
} from 'utils/selectors'
import {
  Heading,
  HomepageWrapper,
  Title
} from 'styles/index.style'


export default function Home() {
  const { mainProjects } = fetchMainProjects('/api/main-projects')
  const { soloProjects } = fetchSoloProjects('/api/solo-projects')

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

              <br/><br/>

              All the funsies aside 🎭 Fahdii is currently a software engineer in the making 🧑‍💻
              Having great interest in full-stack web development technologies 🌐 He's looking forward to be able
              to do big things 💯 and partake in this vast & rapid growing world of tech-industry 🚀
            </h3>
          </div>

          <div className="projects-section">
            <div className="main-projects">
              {mainProjects
                ? mainProjects.map(
                    el => (
                      <div
                        className="main-projects__project-card"
                        key={el.id}
                      >
                        {/* {el.name} */}
                      </div>
                    ))
                : ""}
            </div>

            <div className="solo-projects">
              {soloProjects
                ? soloProjects.map(
                    el =>(
                      <div
                        className="solo-projects__project-card"
                        key={el.id}
                      >
                          {/* {el.name} */}
                      </div>
                    ))
                : ""}
            </div>

          </div>
        </HomepageWrapper>
      </Layout>
    </>
  )
}