import React from 'react'
import {
  CatalogContainer,
  Header,
  Title,
  ViewAllButton,
  Grid,
  Card,
  CardTextContent,
  CardTitle,
  CardPrice,
  CardImageWrapper,
  CardImage,
  SwriperSlideCustom,
  SliderWrapper
} from "./Catalog.styles"

import Cat1 from "@/assets/images/Catalogs/cat1.png"
import Cat2 from "@/assets/images/Catalogs/cat2.png"
import Cat3 from "@/assets/images/Catalogs/cat3.png"
import Cat4 from "@/assets/images/Catalogs/cat4.png"
import Cat5 from "@/assets/images/Catalogs/cat5.png"
import Cat6 from "@/assets/images/Catalogs/cat6.png"

import { ArrowIcon } from "@/assets/icons";
import { Swiper } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

const catalogItems = [
  {
    id: 1,
    title: "Люстры",
    price: "540Р",
    image: `${Cat1}`,
  },
  { id: 2, title: "Светильники", price: "540Р", image: `${Cat2}` },
  { id: 3, title: "Бра", price: "540Р", image: `${Cat3}` },
  { id: 4, title: "Торшеры", price: "540Р", image: `${Cat4}`},
  {
    id: 5,
    title: "Настольные лампы",
    price: "540Р",
    image: `${Cat5}`,
  },
  { id: 6, title: "Споты", price: "540Р", image: `${Cat6}` },
];


function Catalog() {

  return (
      <CatalogContainer className='container'>
        <Header>
          <Title>Каталог</Title>
          <ViewAllButton>
            Весь каталог <ArrowIcon />{" "}
          </ViewAllButton>
        </Header>

        <Grid>
          {catalogItems.map((item) => (
            <Card key={item.id}>
              <CardTextContent>
                <CardTitle>{item.title}</CardTitle>
                <CardPrice>
                  От {item.price} <ArrowIcon /> 
                </CardPrice>
              </CardTextContent>

              <CardImageWrapper>
                <CardImage src={item.image} alt={item.title} loading="lazy" />
              </CardImageWrapper>
            </Card>
          ))}
        </Grid>
        <SliderWrapper>
          <Swiper
            modules={[Pagination]}
            pagination={{ clickable: true, bulletActiveClass: "my-bullet" }}
            spaceBetween={20}
            slidesPerView={2}
          >
            {catalogItems.map((item) => (
              <SwriperSlideCustom key={item.id}>
                <CardTextContent>
                  <CardTitle>{item.title}</CardTitle>
                  <CardPrice>
                    От {item.price} <ArrowIcon /> 
                  </CardPrice>
                </CardTextContent>

                <CardImageWrapper>
                  <CardImage src={item.image} alt={item.title} loading="lazy" />
                </CardImageWrapper>
              </SwriperSlideCustom>
            ))}

          </Swiper>
        </SliderWrapper>
        <Header>
          <Title>Почему NORNLIGHT?</Title>
          <ViewAllButton>
          О компании <ArrowIcon />{" "}
          </ViewAllButton>
        </Header>
      </CatalogContainer>
  )
}


export default Catalog