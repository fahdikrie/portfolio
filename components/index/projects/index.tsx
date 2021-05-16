import SwiperCore, { Navigation } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import { useRef } from 'react'

import { fetchProjects } from 'utils/selectors'
import ProjectCard from './project-card'
import * as S from './index.style'
import 'swiper/swiper-bundle.min.css'

import ChevronArrow from 'public/assets/chevron-right.svg'

interface ProjectsData {
  projects: any[] | any
}

SwiperCore.use([Navigation])

const ProjectsCollab = (): JSX.Element => {
  const { projects }: ProjectsData = fetchProjects('/api/projects')

  const navigationPrevRef = useRef<HTMLDivElement>(null)
  const navigationNextRef = useRef<HTMLDivElement>(null)

  const settings = {
    spaceBetween: 15,
    slidesPerView: 1,
    grabCursor: true,
    freeMode: true,
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
    <S.ProjectsCollab>
      <S.SectionHeader>
        Projects I've
        Participated in.
      </S.SectionHeader>
      <S.DesktopSwiper>
        <S.Navigation
          ref={navigationPrevRef}
        >
          <img
            src={ChevronArrow}
            alt="chevron-left"
            className="chevron-left"
          />
        </S.Navigation>
        <Swiper
          {...settings}
          navigation={{
            prevEl: navigationPrevRef.current!,
            nextEl: navigationNextRef.current!,
          }}
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
        <S.Navigation
          ref={navigationNextRef}
        >
          <img
            src={ChevronArrow}
            alt="chevron-right"
            className="chevron-right"
          />
        </S.Navigation>
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