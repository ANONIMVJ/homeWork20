import React from 'react';
import {
  SectionWrapper,
  SectionContent,
  Title,
  DescriptionWrapper,
  Paragraph,
} from './ManufactureSection.styled';

const ManufactureSection = () => {
  return (
    <SectionWrapper className="container">
      <SectionContent>
        <Title>Производство светильников</Title>
        <DescriptionWrapper>
          <Paragraph>
            Интернет-магазин NORNLIGHT предлагает широкий ассортимент <br /> светильников для освещения вашего дома или офиса. У нас вы <br /> найдете разнообразные модели светильников, от современных и <br /> стильных до классических и элегантных. Мы предлагаем <br /> качественные и надёжные светильники от лучших <br /> производителей, которые подарят вам комфорт и уют.
          </Paragraph>
          <Paragraph>
            Покупая светильники в нашем интернет-магазине, вы получаете <br /> отличное соотношение цены и качества. Мы осуществляем <br /> доставку по всей России, чтобы каждый клиент мог насладиться <br /> прекрасным светом и удобством покупки онлайн. Обратитесь к <br /> нам сегодня и превратите ваш дом в оазис тепла и света с <br /> NORNLIGHT!
          </Paragraph>
        </DescriptionWrapper>
      </SectionContent>
    </SectionWrapper>
  );
};

export default ManufactureSection;
