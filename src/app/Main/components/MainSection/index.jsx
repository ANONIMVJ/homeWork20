import React from 'react';

import { Swiper } from 'swiper/react';
import { Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import SliderImage1 from '@/assets/images/main-slider/1.png';
import { SwiperItemWrapper, SwriperSlideCustom, SliderWrapper } from './MainSection.style';

function MainSection() {
    return (
        <SliderWrapper>
            <Swiper
                modules={[Pagination]}
                pagination={{ clickable: true, bulletActiveClass: "my-bullet" }}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
            >
                <SwriperSlideCustom>
                    <SwiperItemWrapper>
                        <div className='container flex'>
                            <div >
                                <h1 className='swiper-main-title'>Скидка 15% <br /> на все подвесные светильники <br /> <span >до 5 февраля</span></h1>
                            </div>
                            <div>
                                <img src={SliderImage1} alt="Lamps" />
                            </div>
                        </div>
                    </SwiperItemWrapper>
                </SwriperSlideCustom>
                <SwriperSlideCustom>
                    <SwiperItemWrapper>
                        <div className='container flex'>
                            <div>
                                <h1 className='swiper-main-title'>Скидка 15% <br /> на все подвесные светильники <br /> <span >до 5 февраля</span></h1>
                            </div>
                            <div>
                                <img src={SliderImage1} alt="Lamps" />
                            </div>
                        </div>
                    </SwiperItemWrapper>
                </SwriperSlideCustom>
                <SwriperSlideCustom>
                    <SwiperItemWrapper>
                        <div className='container flex'>
                            <div>
                                <h1 className='swiper-main-title'>Скидка 15% <br /> на все подвесные светильники <br /> <span >до 5 февраля</span></h1>
                            </div>
                            <div>
                                <img src={SliderImage1} alt="Lamps" />
                            </div>
                        </div>
                    </SwiperItemWrapper>
                </SwriperSlideCustom>
                <SwriperSlideCustom>
                    <SwiperItemWrapper>
                        <div className='container flex'>
                            <div>
                                <h1 className='swiper-main-title'>Скидка 15% <br /> на все подвесные светильники <br /> <span >до 5 февраля</span></h1>
                            </div>
                            <div>
                                <img src={SliderImage1} alt="Lamps" />
                            </div>
                        </div>
                    </SwiperItemWrapper>
                </SwriperSlideCustom>
                <SwriperSlideCustom>
                    <SwiperItemWrapper>
                        <div className='container flex'>
                            <div>
                                <h1 className='swiper-main-title'>Скидка 15% <br /> на все подвесные светильники <br /> <span >до 5 февраля</span></h1>
                            </div>
                            <div>
                                <img src={SliderImage1} alt="Lamps" />
                            </div>
                        </div>
                    </SwiperItemWrapper>
                </SwriperSlideCustom>
                <SwriperSlideCustom>
                    <SwiperItemWrapper>
                        <div className='container flex'>
                            <div>
                                <h1 className='swiper-main-title'>Скидка 15% <br /> на все подвесные светильники <br /> <span >до 5 февраля</span></h1>
                            </div>
                            <div>
                                <img src={SliderImage1} alt="Lamps" />
                            </div>
                        </div>
                    </SwiperItemWrapper>
                </SwriperSlideCustom>
            </Swiper>
        </SliderWrapper>
    );
}

export default MainSection;