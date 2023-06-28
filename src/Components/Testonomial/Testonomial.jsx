import React from 'react'
import './Testonomials.css'
import { Swiper,SwiperSlide } from 'swiper/react'
import {Pagination} from 'swiper'
import 'swiper/css/pagination'
import 'swiper/css'
import profilePic3 from '../../img/business2.jpg'
import LadiesStyless from '../../img/business1.jpg'

const Testonomials=()=>{
    const clients=[
        {
            img: profilePic3,
            link:"https://www.instagram.com/fashion_ki_dukan_apni/",
            review:
             "Welcome to Fashion Ki Dukan Apani, your go-to destination for online retailing and reselling. Explore our carefully selected collection of premium products, spanning fashion, home decor, electronics, and more. Follow us on Instagram for exclusive deals, trend alerts, and an effortless shopping experience, delivered right to your fingertips.",
        },
        {
            img: LadiesStyless,
            link:"https://www.instagram.com/ladies_styless_/",
            review:
             "Discover a world of curated products at Ladies Styless. We offer a wide range of high-quality items, from fashion to small electronics, delivered right to your doorstep. Follow us on Instagram for the latest trends, exclusive deals, and a seamless shopping experience.",
        }
    ]

  return (
    <div className='t-wrapper' id='Testonomials'>
        <div className="t-heading">
        <span className='own-business'>My Own Business</span>
        <br />
            <span>Clients always get </span>
        
            <span>Exceptional work</span>
            <span>from us...</span>
            <div className='blur t-blur1' style={{background: "var(--purple)"}}></div>
            <div className='blur t-blur2' style={{background: "styblue"}}></div>
        </div>
        {/* slider */}
        <Swiper
            modules={[Pagination]}
            slidesPerView={1}
            pagination={{clickable:true}}
            >
            {clients.map((client, index)=>{
                return(
                    <SwiperSlide key={index}>
                        <div className="testimonial">
                            {/* <a href='https://www.instagram.com/ladies_styless_/' target='blank'> */}
                                <img src={client.img} alt='' />
                                  {/* </a> */}
                            <span> {client.review}</span>
                            <a href={client.link} target='blank'> Link</a>
                        </div>
                    </SwiperSlide>
                )
            })}
        </Swiper>

    </div>
  )
}

export default Testonomials;