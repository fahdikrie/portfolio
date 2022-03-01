import SwiperCore, { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import fetcher from 'libs/fetcher';
import SoloCard from 'components/elements/SoloCard';
import * as S from './Solos.style';

import 'swiper/swiper-bundle.min.css';

SwiperCore.use([Pagination]);

const Solos = (): JSX.Element => {
  const { data: solos }: Solos = fetcher('/api/solos');

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
    <S.Solos>
      <S.Header>
        Projects I <br /> did on my own
      </S.Header>
      <S.SubHeader>
        Side projects and college assignments. <u>drag to see more</u>
      </S.SubHeader>
      <S.DesktopSwiper>
        <Swiper {...settings} pagination={{ clickable: true }}>
          {solos?.map((el, i) => (
            <SwiperSlide key={i}>
              <SoloCard
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
        {solos?.reverse().map((el, i) => (
          <SoloCard
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
    </S.Solos>
  );
};

export default Solos;
