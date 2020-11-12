import Head from 'next/head'

import Layout from 'components/Layout'
import ProjectCard from 'components/ProjectCard'
import {
  HomepageWrapper,
  TitleSection,
  Title,
  AboutSection,
  About,
  ProjectsSection,
  Heading,
} from 'styles/index.style'
import {
  fetchMainProjects
} from 'utils/selectors'


export default function Home() {
  const { mainProjects } = fetchMainProjects('/api/main-projects')

  return (
    <>
      <Layout
        currentPage="index"
      >
        <HomepageWrapper>
          <TitleSection className="title-section">
            <Title>
              badi, <br/>
              at your service!
            </Title>
          </TitleSection>

          <AboutSection className="about-section">
            <About>
              A 19 years old sophomore student currently majoring CS 💻 at the University of Indonesia 🧑‍🎓
              Meet Fahdii Ajmalal Fikrie! 👋

              <br/><br/>

              Fahdii is very passionate when it comes to taking naps 💤 and watching movies 🍿
              His current favorite movies are Good Morning (1959) 🌄 and The Makioka Sisters (1983) 🎎

              <br/><br/>

              All the funsies aside 🎭 Fahdii is a software engineer in the making 🧑‍💻
              Having great interest in full-stack web development 🌐 He looks forward to be able
              to do big things 💯 and partake in this vast & rapid growing world of tech-industry 🚀
            </About>
          </AboutSection>

          <ProjectsSection className="projects-section">
            <div className="main-projects-wrapper">
              <Heading>Projects I've Participated in.</Heading>
              <div className="main-projects">
                {mainProjects
                  ? mainProjects.map(
                      el => (
                        <div
                          className="main-projects__project-card"
                          key={el.id}
                        >
                          <ProjectCard
                            key={el.id}
                            image={el.image}
                            name={el.name}
                            time={el.time}
                            desc={el.desc}
                            stacks={el.stacks}
                          />
                        </div>
                      ))
                  : ""}
              </div>
            </div>
          </ProjectsSection>
        </HomepageWrapper>
      </Layout>
    </>
  )
}