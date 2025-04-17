import React, { useState } from 'react';
import Brend1 from "@/assets/images/brends-slider/brend1.png"
import Brend2 from "@/assets/images/brends-slider/brend2.png"
import Brend3 from "@/assets/images/brends-slider/brend3.png"
import Brend4 from "@/assets/images/brends-slider/brend3.png"
import { BrendsSectionWrapper, BrendWrapper, SliderButton } from './BrendSection.style';
import { Swiper, SwiperSlide,  } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { Button } from "@/components"
import { LeftArrowIcon } from '@/assets/icons';
import { RightArrowIcon } from '@/assets/icons';

const BrendsSection = (props) => {
    const [swiperInstance , setWiperInstance] = useState(null)
    const [activeIndex , setActiveIndex] = useState(0)

    const handleSlideNext = () => {
        if (swiperInstance) swiperInstance.slideNext()
    }

    const handleSlidePrev = () =>{
        if ( swiperInstance) swiperInstance.slidePrev()
    }

    return (
        <BrendsSectionWrapper className='container'>
            <div className='header-brands'>
            <h2 className='title'>Только проверенные бренды</h2>
            <SliderButton>
                <Button disabled={activeIndex == 0} size="small" onClick={handleSlidePrev}><LeftArrowIcon /></Button>
                <Button disabled={activeIndex == 3} size="small" onClick={handleSlideNext}><RightArrowIcon /></Button>
            </SliderButton>
            </div>
            <Swiper
                slidesPerView={4}
                spaceBetween={20}
                onSlideChange={(e) => setActiveIndex(e.activeIndex)}
                modules={[Navigation]}
                onSwiper={setWiperInstance}
            >
                <SwiperSlide>
                    <BrendWrapper>
                    <img src={Brend3} alt="brend-img3" />
                    </BrendWrapper>
                </SwiperSlide>
                <SwiperSlide>
                    <BrendWrapper>
                    <img src={Brend1} alt="brend-img1" />
                    </BrendWrapper>
                </SwiperSlide>
                <SwiperSlide>
                    <BrendWrapper>
                    <img src={Brend2} alt="brend-img2" />
                    </BrendWrapper>
                </SwiperSlide>
                <SwiperSlide>
                    <BrendWrapper>
                    <img src={Brend4} alt="brend-img4" />
                    </BrendWrapper>
                </SwiperSlide>
                <SwiperSlide>
                    <BrendWrapper>
                    <img src={Brend2} alt="brend-img2" />
                    </BrendWrapper>
                </SwiperSlide>
                <SwiperSlide>
                    <BrendWrapper>
                    <img src={Brend4} alt="brend-img4" />
                    </BrendWrapper>
                </SwiperSlide>
                <SwiperSlide>
                    <BrendWrapper>
                    <img src={Brend2} alt="brend-img2" />
                    </BrendWrapper>
                </SwiperSlide>
                <SwiperSlide>
                    <BrendWrapper>
                    <img src={Brend4} alt="brend-img4" />
                    </BrendWrapper>
                </SwiperSlide>
            </Swiper>
        </BrendsSectionWrapper>
    );
};

export default BrendsSection;