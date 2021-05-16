import SwiperCore, { Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import { useRef } from 'react'

import { fetchProjects } from 'utils/selectors'
import ProjectCard from './project-card'
import * as S from './index.style'
import 'swiper/swiper-bundle.min.css'

interface ProjectsData {
  projects: any[] | any
}

SwiperCore.use([Pagination])

const ProjectsCollab = (): JSX.Element => {
  const { projects }: ProjectsData = fetchProjects('/api/projects')

  const settings = {
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
        Projects I've Participated in
      </S.SectionHeader>
      <S.SectionSubHeader>
        Projects I did in collaboration with others, <u>drag to see more</u>
      </S.SectionSubHeader>
      <S.DesktopSwiper>
        <Swiper
          {...settings}
          pagination={{ clickable: true }}
        >
          {projects?.map((el, i) => (
            <SwiperSlide key={i}>
              <ProjectCard
                key={i}
                image={el.image}
                name={el.name}
                time={el.time}
                overlay={el.overlay}
                color={el.color}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </S.DesktopSwiper>
      <S.MobileSwiper>
        {projects?.reverse().map((el, i) => (
          <ProjectCard
            key={i}
            image={el.image}
            name={el.name}
            time={el.time}
            overlay={el.overlay}
            color={el.color}
          />
        ))}
        <div className="swiper__margin"></div>
      </S.MobileSwiper>
    </S.ProjectsCollab>
  )
}

export default ProjectsCollab