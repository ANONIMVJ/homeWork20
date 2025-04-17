import React from 'react'
import { BasketButton, CardFooter, Header, PopularProductCard, PopularProductCardWrapper, PopularProductSwapper, Title, ViewAllButton } from './PopularProductSection.style'
import { ArrowIcon } from "@/assets/icons";
import Product1 from '@/assets/images/popular-products/prod1.png'
import Basket from '@/assets/basket.svg'
import Like from '@/assets/like.svg'

const products = [
    {
        img: Product1,
        title: "Встраиваемый светильник Novotech",
        realPrice: "7 000₽",
        price: "6 399₽"
    },
    {
        img: Product1,
        title: "Встраиваемый светильник Novotech",
        realPrice: "7 000₽",
        price: "6 399₽"
    },
    {
        img: Product1,
        title: "Встраиваемый светильник Novotech",
        realPrice: "7 000₽",
        price: "6 399₽"
    },
    {
        img: Product1,
        title: "Встраиваемый светильник Novotech",
        realPrice: "7 000₽",
        price: "6 399₽"
    },

]


function PopularProduct() {
    return (
        <PopularProductSwapper className='container'>
            <Header>
                <Title>Популярные товары</Title>
                <ViewAllButton>
                    Все товары <ArrowIcon />{" "}
                </ViewAllButton>
            </Header>

            <PopularProductCardWrapper className='container'>
                {products.map((product) => {
                    return (
                        <>
                        <PopularProductCard>
                            <img className='card__like' src={Like} alt="like.svg" />
                            <img  src={product.img} alt="img.png" />
                            <h3>
                                {product.title}
                            </h3>
                            <CardFooter>
                                <div>
                                    <del>
                                        {product.realPrice}
                                    </del>
                                    <p>
                                        {product.price}
                                    </p>
                                </div>
                                <BasketButton>
                                    <img src={Basket} alt="basket.svg" />
                                </BasketButton>
                            </CardFooter>
                        </PopularProductCard>
                        <PopularProductCard>
                            <img className='card__like' src={Like} alt="like.svg" />
                            <img  src={product.img} alt="img.png" />
                            <h3>
                                {product.title}
                            </h3>
                            <CardFooter>
                                <div>
                                    <del>
                                        {product.realPrice}
                                    </del>
                                    <p>
                                        {product.price}
                                    </p>
                                </div>
                                <BasketButton>
                                    <img src={Basket} alt="basket.svg" />
                                </BasketButton>
                            </CardFooter>
                        </PopularProductCard>
                        </>
                        
                    )
                })}
            </PopularProductCardWrapper>
        </PopularProductSwapper>
    )
}

export default PopularProduct