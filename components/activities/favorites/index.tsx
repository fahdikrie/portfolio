import * as S from './index.style'

const Favorites = ({ header, subheader, data, type }):JSX.Element => (
  <S.Favorites>
    <S.Header>{header}</S.Header>
    <S.SubHeader>{subheader}</S.SubHeader>
    <S.List>
      {data?.map(el => (
        <S.ListItem>
          <a
            href={el.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            {el.title}
          </a>
          <span> ({el.year})</span> <br/>
          <span> {type == "movie" ? "🎬" : "✍️"} {el.author},</span>
          <span> ⭐️ {el.rating}/100</span>
        </S.ListItem>
      ))}
    </S.List>
  </S.Favorites>
)

export default Favorites