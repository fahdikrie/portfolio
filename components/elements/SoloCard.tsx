import Image from 'next/image';
import tw, { styled } from 'twin.macro';

interface OverlayProps {
  overlay: string;
  color: string;
}

export const SSoloCard = tw.div`
  w-full
  relative
`;

export const SOverlay = styled.div<OverlayProps>`
  ${tw`
    absolute
    cursor[grab] active:cursor[grabbing]
    top-0 right-0 bottom-0 left-0
    padding[4.5% 5%]
    border-radius[3%]
  `}

  color: ${(props) => props.color};
  background-color: rgba(0, 0, 0, 0);
  backdrop-filter: blur(0px);

  -webkit-transition: background-color 0.5s ease-in-out,
    backdrop-filter 0.25s linear;
  -moz-transition: background-color 0.5s ease-in-out,
    backdrop-filter 0.25s linear;
  -o-transition: background-color 0.5s ease-in-out, backdrop-filter 0.25s linear;
  transition: background-color 0.5s ease-in-out, backdrop-filter 0.25s linear;

  h2,
  h3 {
    ${tw`opacity-0`}

    -webkit-transition: opacity 0.35s ease-in;
    -moz-transition: opacity 0.35s ease-in;
    -o-transition: opacity 0.35s ease-in;
    transition: opacity 0.35s ease-in;
  }

  &:hover {
    background-color: ${(props) => props.overlay};
    backdrop-filter: blur(10px);

    h2,
    h3 {
      ${tw`opacity-100 hidden`}
    }
  }
`;

export const SName = tw.h2`
  cursor[grab] active:cursor[grabbing]
  font-black color[inherit]
  leading-tight
  mb-3
  font-size[calc(0.95rem + 2.75vw)]
  md:font-size[calc(0.35rem + 0.4vw)]
  lg:font-size[calc(0.75rem + 0.65vw)]
  xl:font-size[calc(0.75rem + 0.95vw)]
  2xl:font-size[calc(0.75rem + 1.1vw)]
`;

export const STime = tw.h3`
  cursor[grab] active:cursor[grabbing]
  font-bold color[inherit]
  font-size[calc(0.25rem + 2.5vw)]
  md:font-size[calc(0.15rem + 0.5vw)]
  lg:font-size[calc(0.5rem + 0.45vw)]
  xl:font-size[calc(0.5rem + 0.5vw)]
  2xl:font-size[calc(0.5rem + 0.6vw)]
`;

interface SoloCardProps {
  image: string;
  name: string;
  time: string;
  overlay: string;
  color: string;
}

const SoloCard = ({
  image,
  name,
  time,
  overlay,
  color,
}: SoloCardProps): JSX.Element => (
  <SSoloCard>
    <Image
      src={image}
      alt={name}
      layout="responsive"
      width="2"
      height="1"
      loading="eager"
      priority
    />

    <SOverlay overlay={overlay} color={color}>
      <SName dangerouslySetInnerHTML={{ __html: name }} />
      <STime dangerouslySetInnerHTML={{ __html: time }} />
    </SOverlay>
  </SSoloCard>
);

export default SoloCard;
