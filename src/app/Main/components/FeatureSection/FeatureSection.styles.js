import styled from "styled-components";
import { colors } from '@/styles/theme';

export const SectionWrapper = styled.section`
  padding: 40px 0;
  background-color: ${colors.white};
`;

export const FeatureGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 24px;
  margin: 0 auto;
  padding: 0 7px;
`;

export const FeatureCard = styled.div`
  width: 310px;
  height: 360px;
  border: 1px solid${colors.lightGray}50;
  padding: 30px;
  text-align: start;
  display: flex;
  flex-direction: column;
  align-items: start;
`;

export const IconWrapper = styled.div`
  width: 80px;
  height: 80px;
  background-color: ${colors.main};;
  color: ${colors.white};
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  font-size: 28px;
  margin-bottom: 79px;
`;

export const Title = styled.h3`
  font-size: 21px;
  font-weight: 500;
  width: 214px;
  height: 52px;
  line-height: 130%;
  letter-spacing: 0%;
  color: ${colors.main};;
  margin-bottom: 20px
`;

export const Description = styled.p`
    width: 240px;
    height: 42px;
    font-weight: 100;
    line-height: 130%;
    letter-spacing: 0%;
    font-size: 16px;
    color: ${colors.main}50;
`;
