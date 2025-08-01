import { useContext, useEffect, useState } from "react"
import './ourProducts.css'
import { StoreContext } from "../../../context/StoreContext"
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react'
import 'swiper/css'
import { sliderSettings } from '../../../assets/commen'
import ProductsItem from "./ProductsItem"

const OurProducts = () => {
  const { allProducts } = useContext(StoreContext)

  const [randomProducts, setRandomProducts] = useState([])

  useEffect (() => {
    if (allProducts.length){
      const shuffled = [...allProducts].sort(() => 0.5 -Math.random())
      setRandomProducts(shuffled.slice(0,10))
    }
  }, [allProducts])
  return (
    <section className='our-products container' id="our-products">
      <div className="products-head">
        <h3 className="sec-title">Our Product</h3>
      </div>

      <Swiper {...sliderSettings}>
        <SliderButtons />
        {
          randomProducts.map((value, index) => {
            return (
              <SwiperSlide key={index}>
                <ProductsItem
                  img={value.img}
                  numReviews={value.numReviews}
                  shortName={value.shortName}
                  price={value.price}
                  id={value.id}
                />
              </SwiperSlide>
            );
          })
        }
      </Swiper>
    </section>
  )
}

export default OurProducts

const SliderButtons = () => {
  const swiper = useSwiper();
  return (
    <>
      <div className="prods-buttons">
        <button onClick={() => swiper.slidePrev()}><i className="fas fa-arrow-left-long"></i></button>
        <button onClick={() => swiper.slideNext()}><i className="fas fa-arrow-right-long"></i></button>
      </div>
    </>
  )
}
