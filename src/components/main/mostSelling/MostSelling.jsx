import { useState, useEffect, useContext } from 'react'
import './mostSelling.css'
import { StoreContext } from '../../../context/StoreContext'
import { motion } from 'framer-motion'

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
            return (
              <motion.div
                className="selling-card"
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ delay: 0.02, duration: 0.8 }}
                variants={{
                  hidden: { opacity: 0, y: -50 },
                  visible: { opacity: 1, y: 0 },
                }}
              >
                <div className="selling-image">
                  <img src={value.img} alt={`img${value.id}`} />
                </div>

                <h5 className="selling-name">{value.shortName}</h5>

                <div className="selling-rating">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="far fa-star"></i>
                </div>

                <div className="selling-price flexBetween">
                  <h5 className="price">
                    $
                    {(Number(value.price) - Number(value.price * 0.25)).toFixed(
                      2
                    )}
                  </h5>
                  <h5 className="price">${value.price}</h5>
                </div>
              </motion.div>
            );
          })
        }
      </div>
    </section>
  )
}

export default MostSelling