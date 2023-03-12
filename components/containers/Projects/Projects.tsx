import SwiperCore, { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import fetcher from 'libs/fetcher';
import * as S from './Projects.style';
import ProjectCard from '@/components/elements/ProjectCard';

import 'swiper/swiper-bundle.min.css';

SwiperCore.use([Pagination]);

const ProjectList = () => {
  const { data: projects }: Projects = fetcher('/api/projects');

  const settings = {
    loop: true,
    breakpoints: {
      768: {
        freeMode: false,
        spaceBetween: 15,
        slidesPerView: 3,
      },
    },
  };
  return (
    <S.Wrapper>
      <div>
        <h1>Selected Projects</h1>
        Carousel goes here
        <S.DesktopSwiper>
          <Swiper {...settings} pagination={{ clickable: true }}>
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
      </div>
      <div>
        <h1>All Projects</h1>
        List goes here with search
        <div className="wrapper">
          <div className="card">
            img name date desc stacks[] links[writeup, github, gitlab, web]
          </div>
        </div>
      </div>
    </S.Wrapper>
  );
};

export default ProjectList;
