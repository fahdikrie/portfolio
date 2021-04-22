import { Swiper, SwiperSlide } from 'swiper/react'

import ProjectCard from './project-card'
import * as S from './index.style'
import 'swiper/swiper-bundle.min.css'

const ProjectsCollab = ({ projects }): JSX.Element => {
  const settings = {
    spaceBetween: 15,
    slidesPerView: 1,
    grabCursor: true,
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
        Projects I've <br/>
        Participated in.
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
        <div></div>
      </S.MobileSwiper>
    </S.ProjectsCollab>
  )
}


export default ProjectsCollab