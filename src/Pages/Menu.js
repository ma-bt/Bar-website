import React from 'react'
import Data, { Post1 } from '../Data/Data'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function Menu() {
  return (
    <>
      <div className='' >
        <div> <h1 className=' fw-light text-center pt-5 pb-3  ' style={{ color: ' #ce0303' }}>MENU</h1></div>
        <div className='container border-top'>
          <div className='pt-4'>
            <h3 className=' ps-4 fw-Light '>Wine Section</h3>

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
              <div className='row'>
                {Data.map((a) => (
                  <SwiperSlide>

                    <div className="card p-4 m-3 shadow p-3 mb-5 bg-body rounded zoom1 " style={{ width: '280px', height: '400px' }}>
                      <img src={a.cover} className="card-img-top mx-auto" alt="wine" style={{ width: '180px', height: '260px' }}/>
                      <div className="card-body border-top">
                        <h6 className="card-title">{a.title}</h6>
                        <p className="card-text">{a.price}</p>
                      </div>
                    </div>

                  </SwiperSlide>
                ))}
              </div>
            </Swiper>
          </div>

          {/* Wiskey Section */}

          <div>
            <h3 className=' ps-4 fw-Light '>Vodka Section</h3>

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
              <div className='row'>
                {Post1.map((a) => (
                  <SwiperSlide>

                    <div className="card p-4 m-3 shadow p-3 mb-5 bg-body rounded  zoom1" style={{ width: '280px', height: '400px' }}>
                      <img src={a.cover} className="card-img-top mx-auto " alt="wine" style={{ width: '180px', height: '260px' }}/>
                      <div className="card-body border-top">
                        <h6 className="card-title">{a.title}</h6>
                        <p className="card-text">{a.price}</p>
                      </div>
                    </div>

                  </SwiperSlide>
                ))}
              </div>
            </Swiper>
          </div>

          {/* Vodka Section */}

          <div>
            <h3 className=' ps-4 fw-Light '>Wiskey Section</h3>

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
              <div className='row'>
                {Data.map((a) => (
                  <SwiperSlide>

                    <div className="card p-4 m-3 shadow p-3 mb-5 bg-body rounded  zoom1" style={{ width: '280px', height: '400px' }}>
                      <img src={a.cover} className="card-img-top mx-auto" alt="wine" style={{ width: '180px', height: '260px' }}/>
                      <div className="card-body border-top">
                        <h6 className="card-title">{a.title}</h6>
                        <p className="card-text">{a.price}</p>
                      </div>
                    </div>

                  </SwiperSlide>
                ))}
              </div>
            </Swiper>
          </div>
        </div>
      </div>
    </>
  )
}
