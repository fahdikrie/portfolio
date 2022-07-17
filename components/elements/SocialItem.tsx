import tw from 'twin.macro';

export const SSocialItem = tw.img`
  inline z-50
  cursor-pointer
  w-24 md:w-28 lg:w-32
  mr-12 md:mr-0
  mt-0 md:mt-12
  opacity-70 hover:opacity-100
  flex[0 0 auto]
`;

const SocialItem = ({ href, src, alt }: SocialItemProps) => (
  <a href={href} target="_blank" rel="noopener noreferrer">
    <SSocialItem src={src} alt={alt} />
  </a>
);

export default SocialItem;
