import { SContactCard } from '@/components/elements/ContactCard';
import tw, { styled } from 'twin.macro';

export const Wrapper = styled.div`
  ${tw`
    mt-32
    md:margin-top[88px]
    lg:margin-top[91.4px]

    pt-0 md:pt-48
    overflow-y-scroll
  `}
`;

export const Section = styled.div`
  ${tw`
    mb-16 lg:mb-32
  `}
`;

export const Header = tw.h2`
  mb-5
  text-left
  font-black
  text-gunmetal dark:text-white
  text-sm-large md:text-large
  lg:text-sm-subheader xl:font-size[28px]
`;

export const Paragraph = styled.p`
  ${tw`
    opacity-80
    font-sans font-normal
    text-gunmetal dark:text-white
    text-sm-small md:text-md-small
  `}

  a {
    ${tw`
      text-blue-700 dark:text-blue-300
    `}
  }
`;

export const SubSection = tw.div`
  flex flex-col
  gap-10 lg:gap-20
  mt-5
`;

export const SkillRow = styled.div`
  ${tw`
    text-gunmetal dark:text-white
    text-sm-small md:text-md-small
  `}

  div.skill_type {
    ${tw`font-medium md:mb-5`}
  }

  div.skill_desc {
    ${tw`opacity-80`}
  }
`;

export const ExperienceRow = styled.div`
  ${tw`
      text-gunmetal dark:text-white
      text-sm-small md:text-md-small
  `}

  span.flex {
    ${tw`
      flex gap-10 items-center
      mb-5
    `}
  }

  div.position {
    ${tw`
      font-size[14px] md:font-size[18px]
      font-medium
      mb-2
    `}
  }

  div.company {
    ${tw`
      text-sm-small md:text-md-small
      font-medium
      mb-2
    `}
  }

  div.time {
    ${tw`
      mt-0 md:mt-3
      opacity-80
      text-md-tiny lg:text-tiny
    `}
  }

  div.description {
    ${tw`
      opacity-80
      text-tiny md:text-md-small
      line-height[1.75]!
    `}

    ul {
      ${tw`mt-5`}
    }

    ul li {
      ${tw`
        ml-5 md:ml-10
        line-height[2]!
        flex gap-5 md:gap-10
      `}
    }
  }
`;

export const Contacts = styled.div`
  ${tw`
    mt-5
    gap-10
    flex flex-col
    items-start
  `}

  ${SContactCard} {
    ${tw`mb-5!`}

    & img {
      ${tw`
        mr-5
        w-20 h-20
      `}
    }

    & h6 {
      ${tw`
        underline
        opacity-80 hover:opacity-95
        text-gunmetal dark:text-white
        text-decoration-color[#513203]
        dark:text-decoration-color[#4C1D95]
        text-sm-small md:text-md-small lg:font-size[unset]
      `}
    }
  }
`;
