import styled from "styled-components";
import { colors } from "@/styles/theme";

export const PopularProductSwapper = styled.div`
  margin-bottom: 71px;
`

export const Header = styled.div`
  display: flex;
  flex-direction: column; 
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 2rem; 
  gap: 1rem; 
  @media (min-width: 640px) {
    flex-direction: row;
    align-items: center; 
  }
`;



export const Title = styled.h2`
  font-size: 2.25rem;
  line-height: 2.5rem;
  font-weight: 500; 
  color: ${colors.main};

  @media (min-width: 768px) {
    font-size: 3rem; 
    line-height: 1;
  }
`;


export const ViewAllButton = styled.button`
  display: inline-flex;
  align-items: center;
  padding: 0.625rem 1.5rem;
  border: 1px solid ${colors.main}; 
  border-radius: 9999px;
  background-color: ${colors.white};
  color: ${colors.main};
  font-size: 1rem; 
  transition: background-color 200ms ease-in-out; 
  cursor: pointer;
  align-self: flex-start;
  gap: 10px;
  &:hover {
    background-color: ${colors.gray100}; 
  }
  @media (min-width: 640px) {
    align-self: auto; 
  }
`

export const PopularProductCardWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr)); 

  
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, minmax(0, 1fr)); 
  }
  @media (min-width: 768px) {
    grid-template-columns: repeat(3, minmax(0, 1fr)); 
  }
  
  @media (min-width: 1024px) {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }
  `


export const PopularProductCard = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 326px;
    color: ${colors.main};
    height: 395px;
    justify-content: space-between;
    padding: 30px;
    position: relative;
    .card__like{
      position: absolute;
      top: 14px;
      right: 14px;
      width: 20px;
    }
    &>img{
      width: 173px;
    }
    &>h3{
     font-weight: 500;
    }
    
    @media (max-width: 768px) {
      padding: 10px;
      width: 160px;
     &>img{
       width: 96px;
     }

    }
`

export const CardFooter = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;

    &>div>del{
      font-size: 12px;
      opacity:50%;
    }
`

export const BasketButton = styled.div`
    padding: 5px 20px;
    border-radius: 100px;
    background-color: ${colors.main};
`