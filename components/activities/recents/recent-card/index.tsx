import Image from 'next/image'

import * as S from './index.style'

interface RecentCardProps {
  image: string
  link: string
  title: string
  rating: string
  date: string
}

const RecentCard = ({
  image,
  link,
  title,
  rating,
  date
}: RecentCardProps): JSX.Element => (
  <S.RecentCard>
    <a href={link} target="_blank">
      <div
        className="recent-card__image"
      >
        <Image
          src={image}
          alt={title}
          layout="responsive"
          width="2"
          height="3"
          loading="lazy"
        />
      </div>
    </a>

    <div
      className="recent-card__info"
    >
      <S.Info>{rating}</S.Info>
      <S.Info>{date}</S.Info>
    </div>
  </S.RecentCard>
)

export default RecentCard