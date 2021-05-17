import * as S from './index.style'

const ContactCard = ({ name, image, link }): JSX.Element => (
  <S.ContactCard
    href={link}
    target="_blank"
    rel="noopener noreferrer"
  >
    <img
      src={image}
      alt={link}
    />
    <h6>{name}</h6>
  </S.ContactCard>
)

export default ContactCard