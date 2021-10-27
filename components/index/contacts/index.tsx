import ContactCard from './contact-card';
import * as S from './index.style';

import LinkedInImg from 'public/assets/socials/linkedin.png';
import EmailImg from 'public/assets/socials/email.png';
import GithubImg from 'public/assets/socials/github.png';
import GitlabImg from 'public/assets/socials/gitlab.png';
import LetterboxdImg from 'public/assets/socials/letterboxd.png';
import GoodreadsImg from 'public/assets/socials/goodreads.png';

const Contacts = (): JSX.Element => (
  <S.Contacts>
    <S.Header>Hit me up!</S.Header>
    <S.SubHeader>
      For any feedback, work opportunities, or even a simple "Hi!"
    </S.SubHeader>
    <S.ContactCardWrapper>
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
        image={GithubImg}
        link="https://github.com/fahdikrie"
      />
      <ContactCard
        name="gitlab.com/fahdikrie"
        image={GitlabImg}
        link="https://gitlab.com/fahdikrie/"
      />
      <ContactCard
        name="letterboxd.com/fahdikrie"
        image={LetterboxdImg}
        link="https://boxd.it/Up8H"
      />
      <ContactCard
        name="goodreads.com/fahdikrie"
        image={GoodreadsImg}
        link="https://www.goodreads.com/fahdikrie/"
      />
    </S.ContactCardWrapper>
  </S.Contacts>
);

export default Contacts;
