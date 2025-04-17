import styled from 'styled-components';
import { colors } from "@/styles/theme"

export const BlogContainer = styled.section`
`;

export const BlogHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
  flex-wrap: wrap;
  gap: 1rem;

  h2 {
    font-size: 2.5rem;
    font-weight: 500;
    color: #333;
  }
`;

export const BlogButton = styled.button`
  border: 1px solid #333;
  padding: 0.75rem 1.5rem;
  background: transparent;
  border-radius: 100px;
  cursor: pointer;
  font-size: 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: all 0.3s ease;

  &:hover {
    background: #f3f3f3;
  }
`;

export const BlogCardsWrapper = styled.div`
  display: grid;
  gap: 2rem;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
`;

export const BlogCard = styled.div`
  border-radius: 12px;
  margin-bottom: 20px;
  overflow: hidden;
  background: #fff;
  display: flex;
  flex-direction: column;

  & > hr{
    color: ${colors.main}10;
  }
`;

export const BlogImage = styled.img`
  width: 100%;
  height: 304px;
  object-fit: cover;
  border-radius: 10px;
`;

export const BlogCardFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 1.5rem 0;
`;

export const BlogTitle = styled.h3`
  font-size: 25px;
  font-weight: 400;
  margin-bottom: 1.2rem;
  color: ${colors.main};
`;

export const BlogDate = styled.p`
  font-size: 0.875rem;
  color: ${colors.main};
`;

export const BlogLinkIcon = styled.div`
  margin-left: 1rem;
  flex-shrink: 0;
  color: #000;
`;
