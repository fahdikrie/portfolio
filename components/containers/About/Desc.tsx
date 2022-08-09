import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

import ContactCard from '@/components/elements/ContactCard';
import * as S from './Desc.style';

import LinkedInImg from 'public/assets/socials/linkedin.png';
import EmailImg from 'public/assets/socials/email.png';
import GithubLightImg from 'public/assets/socials/github-light.png';
import GithubDarkImg from 'public/assets/socials/github-dark.png';
import GitlabImg from 'public/assets/socials/gitlab.png';

const Desc = () => {
  const { resolvedTheme } = useTheme();
  const [githubImg, setGithubImg] = useState();

  useEffect(() => {
    if (resolvedTheme) {
      const GithubImg =
        resolvedTheme === 'light' ? GithubLightImg : GithubDarkImg;
      setGithubImg(GithubImg);
    }
  }, [resolvedTheme]);

  return (
    <S.Wrapper>
      <S.Section>
        <S.Header>
          <span>––– </span>short bio 👤
        </S.Header>
        <S.Paragraph>
          Fahdii (or Badi) is a final year <a href="https://cs.ui.ac.id/">CS</a>{' '}
          student at the <a href="https://ui.ac.id/">University of Indonesia</a>
          . He mostly focuses on <u>full-stack web development</u>, while also
          having some experiences on <u>android development</u>.
        </S.Paragraph>
      </S.Section>
      <S.Section>
        <S.Header>
          <span>––– </span>skills & tools 🛠
        </S.Header>
        <S.SubSection>
          <S.SkillRow>
            <div className="skill_type">Languages:</div>
            <div className="skill_desc">
              Javascript, Typescript, Python, Java, Kotlin, Haskell, HTML, CSS,
              SQL (PostgreSQL, SQLite)
            </div>
          </S.SkillRow>
          <S.SkillRow>
            <div className="skill_type">Libraries/Frameworks:</div>
            <div className="skill_desc">
              React (Next.js, create-react-app, Gatsby), Redux, Django (Django
              REST Framework), NodeJS, ExpressJS, Spring Boot, Tailwind CSS,
              Chakra UI, twin.macro
            </div>
          </S.SkillRow>
          <S.SkillRow>
            <div className="skill_type">Tools:</div>
            <div className="skill_desc">
              Linux (Ubuntu, Pop_OS!, Debian), Git, Docker, Selenium, Postman,
              Azure, GCP, AWS, MongoDB
            </div>
          </S.SkillRow>
        </S.SubSection>
      </S.Section>
      <S.Section>
        <S.Header>
          <span>––– </span>experiences 📜
        </S.Header>
        <S.SubSection>
          <S.ExperienceRow>
            <div className="position">Android Developer Apprenticeship</div>
            <span className="flex gap-10">
              <div className="company">Traveloka Singapore</div>
              <div className="time">Jun 2022</div>
            </span>
            <div className="description">
              This apprenticeship program is part of Bangkit Academy 2022’s
              company capstone project.
              {/* <ul>
                <li><div>•</div><div>Selected as <b>the best team of the topic</b> out of four groups.</div></li>
                <li><div>•</div><div>Involved in the mock-up and prototype design process.</div></li>
                <li><div>•</div><div>Implemented the Onboarding, Settings, and Chatroom (demo is available on the Github repository).</div></li>
                <li><div>•</div><div>Tech-stacks: <b>Figma</b>, <b>Kotlin</b>, <b>Android Jetpack</b> (LiveData, ViewModel, DataStore), <b>Android Volley</b>, <b>Github Workflow</b>, <b>Firebase App Distribution</b>.</div></li>
              </ul> */}
            </div>
          </S.ExperienceRow>
          <S.ExperienceRow>
            <div className="position">Lead Web Developer</div>
            <span className="flex gap-10">
              <div className="company">RISTEK Fasilkom UI</div>
              <div className="time">Feb 2020 – Jan 2022</div>
            </span>
            <div className="description">
              RISTEK is an independent organization in the Faculty of Computer
              Science, Universitas Indonesia, that aims to foster students’
              interest and talent in technology.
            </div>
          </S.ExperienceRow>
          <S.ExperienceRow>
            <div className="position">Head of IT Force Bureau</div>
            <span className="flex gap-10">
              <div className="company">FUKI Fasilkom UI</div>
              <div className="time">Feb 2020 – Jan 2022</div>
            </span>
            <div className="description">
              FUKI is an independent muslim organization in the Faculty of
              Computer Science, University of Indonesia. IT Force Bureau is an
              organizational unit within FUKI whose job is to develop and
              maintain FUKI’s IT system.
            </div>
          </S.ExperienceRow>
          <S.ExperienceRow>
            <div className="position">Staff of Data Science Academy</div>
            <span className="flex gap-10">
              <div className="company">COMPFEST 12</div>
              <div className="time">Feb 2020 – Dec 2020</div>
            </span>
            <div className="description">
              COMPFEST is Indonesia’s largest IT event held by the students of
              the Faculty of Computer Science, University of Indonesia. Data
              Science Academy is one of COMPFEST’s divisions that focuses on
              planning and organizing a two weeks data science bootcamp.
            </div>
          </S.ExperienceRow>
          <S.ExperienceRow>
            <div className="position">Staff of Supervision Commission</div>
            <span className="flex gap-10">
              <div className="company">DPM Fasilkom UI</div>
              <div className="time">Feb 2020 – Dec 2020</div>
            </span>
            <div className="description">
              DPM is an organization that holds the legislative authority within
              the organizational scope in the Faculty of Computer Science,
              University of Indonesia. Supervision Commission is a subunit of
              DPM whose jobs are to supervise and evaluate the performance of
              student’s council and all of the independent organizations within
              the faculty.
            </div>
          </S.ExperienceRow>
        </S.SubSection>
      </S.Section>
      <S.Section>
        <S.Header>
          <span>––– </span>educations 🎓
        </S.Header>
        <S.SubSection>
          <S.ExperienceRow>
            <div className="position">Android Developer Learning Path</div>
            <span className="flex gap-10">
              <div className="company">Bangkit Academy</div>
              <div className="time">Feb 2022 – Jul 2022</div>
            </span>
            <div className="description">
              Bangkit is a Google-led academy designed to produce high-caliber
              technical talent for world-class Indonesian technology companies
              and startups. The Bangkit program consists of three learning
              paths: Android Development, Cloud Computing, and Machine Learning.
            </div>
          </S.ExperienceRow>
          <S.ExperienceRow>
            <div className="position">Bachelor of Computer Science</div>
            <span className="flex gap-10">
              <div className="company">Universitas Indonesia</div>
              <div className="time">Jul 2019 – Jan 2023</div>
            </span>
            <div className="description">
              Relevant Courseworks: Data Structure and Algorithm, Operating
              Systems, Web Programming and Design, Programming Foundation,
              Discrete Mathematics, Calculus, Statistics and Probability,
              Database, Computer Networks, Linear Algebra, Advanced Programming,
              Software Engineering
            </div>
          </S.ExperienceRow>
        </S.SubSection>
      </S.Section>
      <S.Section>
        <S.Header>
          <span>––– </span>contacts ☎️
        </S.Header>
        <S.Contacts>
          <ContactCard
            name="fahdiaf@ristek.cs.ui.ac.id"
            image={EmailImg}
            link="mailto:fahdiaf@ristek.cs.ui.ac.id"
          />
          <ContactCard
            name="linkedin.com/in/fahdikrie"
            image={LinkedInImg}
            link="https://www.linkedin.com/in/fahdikrie/"
          />
          <ContactCard
            name="github.com/fahdikrie"
            image={githubImg}
            link="https://github.com/fahdikrie"
          />
          <ContactCard
            name="gitlab.com/fahdikrie"
            image={GitlabImg}
            link="https://gitlab.com/fahdikrie/"
          />
        </S.Contacts>
      </S.Section>
    </S.Wrapper>
  );
};

export default Desc;
