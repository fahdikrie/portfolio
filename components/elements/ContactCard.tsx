import tw, { styled } from 'twin.macro';

export const SContactCard = styled.a`
  ${tw`
    flex justify-center items-center
    mb-20 md:mb-0
  `}

  & img {
    ${tw`
      mr-5
      w-28 h-28
    `}
  }

  & h6 {
    ${tw`
      underline
      text-gunmetal dark:text-white
      text-decoration-color[#513203]
      dark:text-decoration-color[#4C1D95]
      text-sm-large md:text-small lg:text-large
    `}
  }
`;

const ContactCard = ({ name, image, link }): JSX.Element => (
  <SContactCard href={link} target="_blank" rel="noopener noreferrer">
    <img src={image} alt={link} />
    <h6>{name}</h6>
  </SContactCard>
);

export default ContactCard;
