import { useContext, useEffect, useState, useRef } from 'react'
import './sale.css'
import { StoreContext } from '../../context/StoreContext'

const Sale = ({cartIconRef}) => {
  const { allProducts, addToFav, addToCart, favArray, flyToCart } = useContext(StoreContext)
  const [ saleProducts, setSaleProducts ] = useState([])
  useEffect (() => {
    setSaleProducts(allProducts.filter((item) => item.selling == true))
  }, [allProducts])

  const productImgRefs = useRef({})
  useEffect(() => {
    setSaleProducts(allProducts.filter((item) => item.selling == true))
  }, [allProducts])

  return (
    <section className='sale container'>
      <h2 className='main-title'>sale</h2>
      {saleProducts.length === 0 ? <p className='no-products'>No Products Yet</p>: <></>}
      <div className="sale-products">
        {
          saleProducts.map((value, index) => {
            const handleAddToCart = () => {
              addToCart(value.id)
              flyToCart(productImgRefs.current[value.id], cartIconRef.current)
            }
            if (value.selling) {
              const isFav = favArray.some(prod => prod[0] == value.id)
              return (
                <div className="sale-card" key={index}>
                  <div className="sale-image">
                    <img ref={(el) => (productImgRefs.current[value.id] = el)}  src={value.img} alt="img" />
                  </div>

                  <div className="sale-made-review flexBetween">
                    <span className="sale-made">{value.made}</span>
                    <span className="sale-review">
                      ({value.numReviews}<span className="spcial-letter">K</span> Review)
                    </span>
                  </div>

                  <h4 className="sale-shortName">{value.shortName}</h4>

                  <h5 className="sale-fullName">{value.fullName}</h5>

                  <div className="selling-price flexBetween">
                    <h5 className="price">${(Number(value.price) - Number(value.price * .25)).toFixed(2)}</h5>
                    <h5 className="price">${value.price}</h5>
                  </div>

                  <div className="sale-btn flexBetween">
                    <i onClick={() => addToFav(value.id)} className={`${isFav ? "fas fa-heart" : "far fa-heart"}`}></i>
                    <i onClick={() => handleAddToCart(value.id)} className="fas fa-shopping-cart"></i>
                  </div>
                </div>
              )
            }
          })
        }
      </div>
    </section>
  )
}

export default Sale