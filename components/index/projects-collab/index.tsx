import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react'

// import ProjectCard from 'components/project-card'
import * as S from './index.style'
import 'swiper/swiper-bundle.min.css'

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y])

const ProjectsCollab = ({ projects }): JSX.Element => {

  const settings = {
    centeredSlides: true,
    spaceBetween: 15,
    slidesPerView: 1,
    breakpoints: {
      768: {
        spaceBetween: 18,
        slidesPerView: 3
      }
    }
  }

  return (
    <S.ProjectsCollab>
      <Swiper {...settings}>
        {projects?.map((el, i) => (
          <SwiperSlide key={i}>
            <img
              key={el.id}
              src={el.image}
              alt={el.name}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </S.ProjectsCollab>
  )
}


export default ProjectsCollab