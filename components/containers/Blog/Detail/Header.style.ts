import tw from 'twin.macro';

export const Header = tw.div`
  text-center
`;

export const Title = tw.h1`
  font-sans font-black
  text-gunmetal dark:text-white
  text-sm-wambo md:text-md-wambo xl:text-wambo

  mb-16
`;

export const Info = tw.div`
  flex justify-center gap-5
  mb-16
`;

export const InfoText = tw.div`
  text-sm-small md:text-md-small xl:text-small
  font-medium font-sans
  opacity-70
`;

export const Summary = tw.h5`
  font-sans font-normal
  text-gunmetal dark:text-white
  text-sm-large md:text-md-large xl:text-large

  mb-16
`;

export const Tags = tw.div`
  flex justify-center gap-5
  text-sm-small md:text-md-small xl:text-small

  mb-16
`;

export const Tag = tw.div`
  cursor-pointer!

  p-5 rounded
  hover:opacity-90
  bg-bronze dark:bg-magenta

  text-white
  font-sans font-medium
  text-sm-tiny md:text-md-tiny xl:text-tiny
`;

export const Separator = tw.div`
  my-24 md:my-32 lg:my-40

  h-1 w-full rounded
  bg-bronze dark:bg-white
`;
