import RecentCard from './recent-card'
import * as S from './index.style'

interface RecentsProps {
  data: any[] | any
  title: string
}

const Recents = ({
  data,
  title
}: RecentsProps): JSX.Element => (
  <S.Recents>
    <S.Title>
      badi's recent {title}
      <span>*</span>
    </S.Title>

    <S.RecentsCards>
      {data?.map((el, i) => (
        <RecentCard
          key={i}
          link={el.link}
          date={el.date}
          image={el.image}
          title={el.title}
          rating={el.rating}
        />
      ))}
    </S.RecentsCards>
  </S.Recents>
)

export default Recents