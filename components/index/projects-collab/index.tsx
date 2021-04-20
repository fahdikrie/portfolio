import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react'

// import ProjectCard from 'components/project-card'
import * as S from './index.style'
import 'swiper/swiper-bundle.min.css'

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y])

const ProjectsCollab = ({ projects }): JSX.Element => {

  const settings = {
    grabCursor: true,
    spaceBetween: 15,
    slidesPerView: 1,
    freeMode: true,
    breakpoints: {
      768: {
        freeMode: false,
        spaceBetween: 15,
        slidesPerView: 3
      }
    }
  }

  return (
    <S.ProjectsCollab>
      <S.SectionHeader>
        Projects i've Participated in.
      </S.SectionHeader>
      <S.DesktopSwiper>
        <Swiper {...settings}>
          {projects?.map((el, i) => (
            <SwiperSlide key={i}>
              <img
                key={i}
                src={el.image}
                alt={el.name}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </S.DesktopSwiper>
      <S.MobileSwiper>
        {projects?.map((el, i) => (
          <img
            key={i}
            src={el.image}
            alt={el.name}
          />
        ))}
        <span>e</span>
      </S.MobileSwiper>
    </S.ProjectsCollab>
  )
}


export default ProjectsCollab