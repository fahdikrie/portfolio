import * as S from './index.style';

const Favorites = ({ header, subheader, data, type }): JSX.Element => (
  <S.Favorites>
    <S.Header>{header}</S.Header>
    <S.SubHeader>{subheader}</S.SubHeader>
    <S.List>
      {data?.map((el, id) => (
        <S.ListItem key={id}>
          <a href={el.link} target="_blank" rel="noopener noreferrer">
            {el.title}
          </a>
          <span> ({el.year})</span> <br />
          <span>
            {' '}
            {type == 'movie' ? 'dir.' : 'by'} {el.author}{' '}
          </span>
          <span className="list-item__rating">{el.rating}/100</span>
        </S.ListItem>
      ))}
    </S.List>
  </S.Favorites>
);

export default Favorites;
