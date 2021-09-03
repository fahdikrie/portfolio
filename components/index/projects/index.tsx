import SwiperCore, { Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

import { fetchProjects } from 'utils/selectors'
import ProjectCard from './project-card'
import * as S from './index.style'
import 'swiper/css/pagination'
import 'swiper/css'

interface ProjectsData {
  projects: any[] | any
}

SwiperCore.use([Pagination])

const Projects = (): JSX.Element => {
  const { projects }: ProjectsData = fetchProjects('/api/projects')

  const settings = {
    loop: true,
    breakpoints: {
      768: {
        freeMode: false,
        spaceBetween: 15,
        slidesPerView: 3
      }
    }
  }

  return (
    <S.Projects>
      <S.Header>
        Projects I've <br/> participated in
      </S.Header>
      <S.SubHeader>
        Projects I did in collaboration with others. <u>drag to see more</u>
      </S.SubHeader>
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
    </S.Projects>
  )
}

export default Projects