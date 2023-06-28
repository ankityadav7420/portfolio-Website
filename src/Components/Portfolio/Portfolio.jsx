import React from 'react'
import './Portfolio.css'
import {Swiper, SwiperSlide} from 'swiper/react'
import LoginPage from '../../img/loginPage.png'
import Keeper from '../../img/keeper.png'
import MusicApp2 from '../../img/music2.png'
import MusicApp3 from '../../img/music3.png'
import SwiperCore, {Pagination} from 'swiper'
import 'swiper/css'

SwiperCore.use([Pagination]);

export default function Portfolio() {
  return (
    <div className='portfolio' id='Portfolio'>
        {/* heading */}
        <span>Recent UI Projects</span>
        <span>Portfolio</span>
        {/* slider */}
        <Swiper
        modules={[Pagination]}
        slidesPerView={1}
        pagination={{ clickable: true }}
        className='portfolio-slider'
      >
        <SwiperSlide>
          <img src={MusicApp3} alt='Hoc' />
        </SwiperSlide>
        <SwiperSlide>
          <img src={MusicApp2} alt='MusicApp' />
        </SwiperSlide>
        <SwiperSlide>
          <div></div>
          <img src={Keeper} alt='keeper' />
        </SwiperSlide>
        <SwiperSlide>
          <img src={LoginPage} alt='LoginPage' />
        </SwiperSlide>
     
      </Swiper>
    </div>
  );
};