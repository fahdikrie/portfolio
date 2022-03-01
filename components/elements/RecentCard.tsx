import Image from 'next/image';
import tw, { styled } from 'twin.macro';

interface RecentCardProps {
  image: string;
  link: string;
  title: string;
  rating: string;
  date: string;
}

const SInfo: any = tw.p`
  opacity-70
  mt-5 md:mt-3
  text-gunmetal dark:text-white
  font-size[calc(0.25rem + 1vw)]
  md:font-size[calc(0.075rem + 0.75vw)]
`;

const SRecentCard = styled.div`
  ${tw`w-full`}

  &:hover {
    .recent-card__image {
      ${tw`border-bronze dark:border-purple-900`}
    }

    ${SInfo} {
      ${tw`opacity-100`}
    }
  }

  & .recent-card__image {
    ${tw`
      border-2
      border-radius[5px]
      border-transparent
      width[calc(100% - 4px)]
    `}
  }

  & .recent-card__image img {
    ${tw`
      object-cover
      border-radius[3px]
    `}
  }

  & .recent-card__info {
    ${tw`
      my-0
      text-gunmetal dark:text-white
      width[calc(100% - 4px)]
      flex justify-between items-center
    `}
  }
`;

const RecentCard = ({ image, link, title, rating, date }: RecentCardProps): JSX.Element => (
  <SRecentCard>
    <a href={link} target="_blank" rel="noreferrer">
      <div className="recent-card__image">
        <Image src={image} alt={title} layout="responsive" width="2" height="3" loading="lazy" />
      </div>
    </a>

    <div className="recent-card__info">
      <SInfo>{rating}</SInfo>
      <SInfo>{date}</SInfo>
    </div>
  </SRecentCard>
);

export default RecentCard;
