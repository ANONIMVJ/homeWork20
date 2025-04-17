import styled from 'styled-components';
import { colors } from "@/styles/theme"

export const SectionWrapper = styled.section`
  padding: 4rem 1rem;
  margin-bottom: 15px;
`;

export const SectionContent = styled.div`
  max-width: 1280px;
  width: 100%;
  display: flex;
  gap: 410px;
  align-items: flex-start;

  @media (max-width: 1024px) {
    flex-direction: column;
    gap: 2rem;
  }
`;

export const Title = styled.h2`
  flex: 1;
  font-size: 40px;
  font-weight: 500;
  color: #3d3d3d;
  line-height: 1.2;
  min-width: 300px;

  @media (max-width: 768px) {
    font-size: 2rem;
  }

  @media (max-width: 480px) {
    font-size: 1.75rem;
  }
`;

export const DescriptionWrapper = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const Paragraph = styled.p`
  font-size: 1.125rem;
  line-height: 1.8;
  font-weight: 300;
  color: ${colors.main};

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;
