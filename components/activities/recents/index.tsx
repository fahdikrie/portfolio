import Loading from 'components/loading'
import RecentCard from './recent-card'
import * as S from './index.style'

interface RecentsProps {
  data: any[] | any
  link: string
  title: string
  service: string
  isError: boolean
  isLoading: boolean
}

const Recents = ({
  data,
  link,
  title,
  service,
  isError,
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
      isLoading={isLoading ? true : false}
    >
      {!isLoading || data.length != 0 ? (
        !isError ? (
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
          <S.Error>
            <h5>
              whoops! <br/><br/>
              there seem to be errors on {service}'s end 🤔
            </h5>
          </S.Error>
        )
      ) : (
        <S.Loading>
          <Loading />
        </S.Loading>
      )}
    </S.RecentsCards>
  </S.Recents>
)

export default Recents