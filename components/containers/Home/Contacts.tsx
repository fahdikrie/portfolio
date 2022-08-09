import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';

import ContactCard from 'components/elements/ContactCard';
import * as S from './Contacts.style';

import LinkedInImg from 'public/assets/socials/linkedin.png';
import EmailImg from 'public/assets/socials/email.png';
import GithubLightImg from 'public/assets/socials/github-light.png';
import GithubDarkImg from 'public/assets/socials/github-dark.png';
import GitlabImg from 'public/assets/socials/gitlab.png';

const Contacts = (): JSX.Element => {
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
    <S.Contacts>
      <S.Header>Hit me up!</S.Header>
      <S.SubHeader>
        For any feedback, work opportunities, or even a simple &quot;Hi!&quot;
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
          image={githubImg}
          link="https://github.com/fahdikrie"
        />
        <ContactCard
          name="gitlab.com/fahdikrie"
          image={GitlabImg}
          link="https://gitlab.com/fahdikrie/"
        />
      </S.ContactCardWrapper>
    </S.Contacts>
  );
};

export default Contacts;
