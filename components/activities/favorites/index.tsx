import { Swiper, SwiperSlide } from 'swiper/react'
import { fetchFavorites } from 'utils/selectors'
import { useEffect, useState } from 'react'
import Image from 'next/image'

import * as S from './index.style'
import 'swiper/swiper-bundle.min.css'

interface FavoritesData {
  favorites: any[] | any
}

interface Favorites {
  title: string
  slug: string
  images: string[]
}

const Favorites = (): JSX.Element => {
  const { favorites }: FavoritesData = fetchFavorites('/api/favorites')
  const [activeImage, setActiveImage] = useState<Favorites | Object | any>()

  useEffect(() => {
    setActiveImage(favorites?.[1])
  }, [favorites])

  useEffect(() => {
    console.log(activeImage)
  }, [activeImage])

  const handleOnClick = (i) => {
    setActiveImage(favorites?.[i])
  }

  const mainSettings = {
    slidesPerView: 1,
    grabCursor: true,
    loop: true
  }

  const thumbSettings = {
    slidesPerView: 3,
    grabCursor: true,
  }

  return (
    <S.Favorites>
      <Swiper
        {...mainSettings}
      >
        {activeImage?.images.map((el, i) => (
          <SwiperSlide key={i}>
            <div>
              <Image
                src={el}
                alt={i}
                width="16"
                height="9"
                layout="responsive"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <Swiper
        {...thumbSettings}
      >
        {favorites?.map((el, i) => (
          <SwiperSlide key={i}>
            <div
              // onClick={handleOnClick(i)}
            >
              <Image
                src={el.images[0]}
                alt={i}
                width="16"
                height="9"
                layout="responsive"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </S.Favorites>

  )
}

export default Favorites