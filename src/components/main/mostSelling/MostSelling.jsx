import { useState, useEffect, useContext } from 'react'
import './mostSelling.css'
import { StoreContext } from '../../../context/StoreContext'

const MostSelling = () => {
  const { allProducts } = useContext(StoreContext)

  const [sellingProducts, setsellingProducts] = useState([])
  
    useEffect (() => {
      if (allProducts.length){
        const selling= allProducts.filter((item) => item.selling == true)
        setsellingProducts(selling.sort(() => 0.5 -Math.random()))
      }
    }, [allProducts])
  return (
    <section className='most-selling container'>
      <h3 className="sec-title">Most Selling Shoes</h3>

      <div className="selling-Prods flexBetween">
        {sellingProducts.length === 0 ? <p className='no-products'>No Products Yet</p>: <></>}
        {
          sellingProducts.slice(0, 2).map((value, index) => {
            return(
              <div className="selling-card" key={index}>
                <div className="selling-image">
                  <img src={value.img} alt={`img${value.id}`} />
                </div>

                <h5 className='selling-name'>{value.shortName}</h5>

                <div className="selling-rating">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="far fa-star"></i>
                </div>

                <div className="selling-price flexBetween">
                  <h5 className="price">${(Number(value.price) - Number(value.price * .25)).toFixed(2)}</h5>
                  <h5 className="price">${value.price}</h5>
                </div>
              </div>
            )
          })
        }
      </div>
    </section>
  )
}

export default MostSelling