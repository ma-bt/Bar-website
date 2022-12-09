import React from 'react'
import { Post } from '../Data/Data'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function About() {
  return (<>
    <section id='about' className='bg-light'>
      <div> <h1 className=' fw-light text-center pt-5 pb-3 border-bottom ' style={{ color: ' #ce0303' }}>ABOUT </h1>
        <p className=' fw-light text-center container pt-3' >Lorem ipsum dolor sit amet, consectetur adipiscing elit.Aliquam ac dolor pharetra, bibendum leo <br />ornare, fermentum felis. In tincidunt  facilisis sodales arcu venenatis.consectetur adipiscing elit.Aliquam ac dolor pharetra, bibendum leo<br /> consectetur adipiscing elit.Aliquam ac dolor pharetra, bibendum leo consectetur adipiscing elit.Aliquam ac dolor pharetra, bibendum leo <br />consectetur adipiscing elit.Aliquam ac dolor pharetra, bibendum leo</p>
      </div>
      <div className='p-5'>
        <h3 className='text-center'>Some of Our Snaps..</h3>
       
        <Swiper
              // install Swiper modules
              modules={[Navigation, Pagination, Scrollbar, A11y]}
              spaceBetween={50}
              slidesPerView={4}
              navigation
              pagination={{ clickable: true }}
              scrollbar={{ draggable: true }}
              onSwiper={(swiper) => console.log(swiper)}
              onSlideChange={() => console.log('slide change')}

              breakpoints={{
                // when window width is >= 640px
                400: {
                  width: 400,
                  slidesPerView: 1,
                },
                640: {
                  width: 640,
                  slidesPerView: 2,
                },
                // when window width is >= 768px
                768: {
                  width: 768,
                  slidesPerView: 2,
                },
              }}
            > 

        <div className='row '>
          {Post.map((a) => (
            <SwiperSlide><div className="card p-4 m-3 shadow p-3 mb-5 bg-body rounded zoom" style={{ width: '23rem', height: '20rem' }}>
              <img src={a.cover} className="card-img-top" alt="..." style={{ height: '20rem' }} />
              
            </div> 
            </SwiperSlide>))}

        </div>
        </Swiper>

      </div>


    </section>
  </>
  )
}
