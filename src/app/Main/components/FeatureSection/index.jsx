// src/app/Main/components/FeatureSection/index.jsx
import React from "react";
import {
  SectionWrapper,
  FeatureGrid,
  FeatureCard,
  IconWrapper,
  Title,
  Description,
} from "./FeatureSection.styles";
import { DollarIcon, ExpressIcon, MenuToolIcon, StarIcon } from "@/assets/icons";

const features = [
  {
    icon: <StarIcon />,
    title: "Только проверенные бренды",
    description: "Бренды, проверенные временем и качеством",
  },
  {
    icon: <DollarIcon />,
    title: "Самые низкие цены",
    description: "Ниже не будет нигде",
  },
  {
    icon: <ExpressIcon />,
    title: "Быстрая доставка",
    description: "Доставляем по всей РФ за 1-10 дней",
  },
  {
    icon: <MenuToolIcon />,
    title: "Большой ассортимент",
    description: "Более 1000 товаров",
  },
];

const FeatureSection = () => {
  return (
    <SectionWrapper className='container'>
      <FeatureGrid>
        {features.map((feature, index) => (
          <FeatureCard key={index}>
            <IconWrapper>{feature.icon}</IconWrapper>
            <Title>{feature.title}</Title>
            <Description>{feature.description}</Description>
          </FeatureCard>
        ))}
      </FeatureGrid>
    </SectionWrapper>
  );
};

export default FeatureSection;
