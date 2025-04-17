import styled from "styled-components";
import { colors } from '@/styles/theme';
import { SwiperSlide } from "swiper/react";

export const CatalogContainer = styled.div`
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 32px;
  gap: 16px;

  @media (min-width: 640px) {
    flex-direction: row;
    align-items: center;
  }
`;

export const Title = styled.h2`
  font-size: 40px;
  line-height: 55px;
  font-weight: 500;
  letter-spacing: 0%;
  color:  ${colors.main};

  @media (min-width: 768px) {
    font-size: 48px;
    line-height: 48px;
  }
`;

export const ViewAllButton = styled.button`
  display: inline-flex;
  align-items: center;
  padding: 10px 24px;
  border: 1px solid ${colors.gray300};
  border-radius: 9999px;
  background-color: ${colors.white};
  color: ${colors.gray800};
  font-size: 16px;
  transition: background-color 200ms ease-in-out;
  cursor: pointer;
  align-self: flex-start;

  &:hover {
    background-color: ${colors.gray100};
  }

  @media (min-width: 640px) {
    align-self: auto;
  }

  svg {
    margin-left: 8px;
    width: 16px;
    height: 16px;
  }
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 24px;
  margin-bottom: 50px;

  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
`;

export const Card = styled.div`
  position: relative;
  background-color: ${colors.light};
  border-radius: 16px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 200px;
  overflow: hidden;
  transition: transform 200ms ease-in-out, box-shadow 200ms ease-in-out;
  cursor: pointer;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

export const CardTextContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  flex-grow: 1;
  margin-bottom: 16px;
  position: relative;
  z-index: 10;
`;

export const CardTitle = styled.h3`
  font-size: 20px;
  line-height: 28px;
  padding: 10px;
  font-weight: 300;
  color:   ${colors.main};
  letter-spacing: 0%;
  margin-bottom: 8px;
`;

export const CardPrice = styled.span`
  font-size: 16px;
  padding: 2px 10px;
  color: ${colors.gray600};
  display: flex;
  align-items: center;
  margin-top: auto;

  svg {
    margin-left: 6px;
    width: 13px;
    height: 13px;
    opacity: 0.7;
  }
`;

export const CardImageWrapper = styled.div`
  position: absolute;
  right: 16px;
  bottom: 0;
  width: 50%;
  max-width: 500px;
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  z-index: 0;

  @media (max-width: 640px) {
    top: 25%;
    right: 25%;
    bottom: 25%;
  }
`;

export const CardImage = styled.img`
  max-width: 100%;
  max-height: 160px;
  height: auto;
  object-fit: contain;
`;

export const SliderWrapper = styled.div`
  display: none;
  margin-bottom: 100px;

  .swiper-pagination {
    bottom: 0;
  }

  .my-bullet {
    background-color: red;
  }

  @media (max-width: 768px) {
    display: block;

    .swiper-button-prev,
    .swiper-button-next {
      color: ${colors.gray800};
      top: 50%;
      transform: translateY(-50%);
      width: 32px;
      height: 32px;
    }

    .swiper-button-prev {
      left: 8px;
    }

    .swiper-button-next {
      right: 8px;
    }
  }
`;

export const SwriperSlideCustom = styled(SwiperSlide)`
  position: relative;
  background-color: ${colors.light};
  border-radius: 16px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 200px;
  overflow: hidden;
  transition: transform 200ms ease-in-out, box-shadow 200ms ease-in-out;
  cursor: pointer;
`;