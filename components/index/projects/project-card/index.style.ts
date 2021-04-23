import tw, { styled } from 'twin.macro'

interface OverlayProps {
  overlay: string
}

export const ProjectCard = tw.div`
  w-full
  relative
`

export const Overlay = styled.div<OverlayProps>`
  ${tw`
    absolute
    cursor[grab] active:cursor[grabbing]
    top-0 right-0 bottom-0 left-0
    px-14 md:px-16
    py-16 md:py-20
    border-radius[2%]
  `}

  background-color: rgba(0, 0, 0, 0);
  backdrop-filter: blur(0px);

  -webkit-transition: background-color 0.5s ease-in-out, backdrop-filter 0.25s linear;
  -moz-transition: background-color 0.5s ease-in-out, backdrop-filter 0.25s linear;
  -o-transition: background-color 0.5s ease-in-out, backdrop-filter 0.25s linear;
  transition: background-color 0.5s ease-in-out, backdrop-filter 0.25s linear;

  &:hover {
    background-color: ${props => props.overlay};
    backdrop-filter: blur(10px);
  }
`

export const Name = tw.h2`
  cursor[grab] active:cursor[grabbing]
  font-black text-white
  leading-tight
  mb-3
  font-size[calc(0.95rem + 2.75vw)]
  md:font-size[calc(0.65rem + 0.75vw)]
  lg:font-size[calc(0.95rem + 0.95vw)]
  xl:font-size[calc(0.95rem + 1.25vw)]
  2xl:font-size[calc(0.95rem + 1.35vw)]
`

export const Time = tw.h3`
  cursor[grab] active:cursor[grabbing]
  font-bold text-white italic
  font-size[calc(0.25rem + 2.5vw)]
  md:font-size[calc(0.25rem + 0.5vw)]
  lg:font-size[calc(0.5rem + 0.5vw)]
  xl:font-size[calc(0.5rem + 0.65vw)]
  2xl:font-size[calc(0.5rem + 0.70vw)]
`