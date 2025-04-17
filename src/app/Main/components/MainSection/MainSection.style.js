import styled from "styled-components";
import { colors } from '@/styles/theme';
import { SwiperSlide } from "swiper/react";

export const SliderWrapper = styled.div`
    margin-bottom: 100px;

    .swiper-pagination {
        right: 100px !important;
        left: auto;
        bottom: 40px !important;
        width: fit-content;
    }

    .my-bullet {
        background-color: red;
    }
`;

export const SwiperItemWrapper = styled.div`
    background-color: ${colors.light};
    border-radius: 50px;
    width: 100%;
    max-width: 1700px;
    margin: 0 auto;

    .flex {
        display: flex;
        align-items: center;
        justify-content: space-around;

        .swiper-main-title {
            max-width: 500px;
            font-weight: 700;
            font-size: 55px;
            line-height: 100%;
            letter-spacing: 0%;
            color: ${colors.main};

        }
        span{
            background-color: ${colors.main};
            color: ${colors.white};
            width: 495px;
            padding: 5px 25px;
            height: 86px;
            border-radius: 100px;
            position: relative;
            top: 20px;
            right: 25px;

        }
    }
`;

export const SwriperSlideCustom = styled(SwiperSlide)`
    padding: 0 20px;
`;