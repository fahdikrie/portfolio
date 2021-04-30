import Loading from 'components/loading'
import RecentCard from './recent-card'
import * as S from './index.style'

interface RecentsProps {
  data: any[] | any
  link: string
  title: string
  isLoading: boolean
}

const Recents = ({
  data,
  link,
  title,
  isLoading
}: RecentsProps): JSX.Element => (
  <S.Recents>
    <S.Header>
      <S.Title>
        badi's recent {title}
        <span>*</span>
      </S.Title>
      <S.Title>
        <a
          href={link} target="_blank"
        >
          see more
        </a>
      </S.Title>
    </S.Header>

    <S.RecentsCards
      isLoading={isLoading ? 1 : 0}
    >
      {data.length != 0 ? (
        data.map((el, i) => (
          <RecentCard
            key={i}
            link={el.link}
            date={el.date}
            image={el.image}
            title={el.title}
            rating={el.rating}
          />
        ))
      ) : (
        <S.Loading>
          <Loading />
        </S.Loading>
      )}
    </S.RecentsCards>
  </S.Recents>
)

export default Recents