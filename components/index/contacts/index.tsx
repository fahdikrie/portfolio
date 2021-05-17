import ContactCard from './contact-card'
import * as S from './index.style'

import LinkedInSvg from 'public/assets/socials/linkedin.svg'
import EmailSvg from 'public/assets/socials/email.svg'
import GithubSvg from 'public/assets/socials/github.svg'
import GitlabSvg from 'public/assets/socials/gitlab.svg'
import LetterboxdSvg from 'public/assets/socials/letterboxd.svg'
import GoodreadsSvg from 'public/assets/socials/goodreads.svg'

const Contacts = ():JSX.Element => (
  <S.Contacts>
    <S.Header>Hit me up!</S.Header>
    <S.SubHeader>For any feedback, work opportunities, or even a simple "Hi!"</S.SubHeader>
    <S.ContactCardWrapper>
      <ContactCard
        name="fahdiaf@ristek.cs.ui.ac.id"
        image={EmailSvg}
        link="mailto:fahdiaf@ristek.cs.ui.ac.id"
      />
      <ContactCard
        name="linkedin.com/in/fahdikrie"
        image={LinkedInSvg}
        link="https://www.linkedin.com/in/fahdikrie/"
      />
      <ContactCard
        name="github.com/fahdikrie"
        image={GithubSvg}
        link="https://github.com/fahdikrie"
      />
      <ContactCard
        name="gitlab.com/fahdikrie"
        image={GitlabSvg}
        link="https://gitlab.com/fahdikrie/"
      />
      <ContactCard
        name="letterboxd.com/fahdikrie"
        image={LetterboxdSvg}
        link="https://boxd.it/Up8H"
      />
      <ContactCard
        name="goodreads.com/fahdikrie"
        image={GoodreadsSvg}
        link="https://www.goodreads.com/fahdikrie/"
      />
    </S.ContactCardWrapper>
  </S.Contacts>
)

export default Contacts