import { useParams } from 'react-router-dom'
import './category.css'
import { useContext, useEffect, useState } from 'react'
import { StoreContext } from '../../context/StoreContext'
import CategoryItem from './CategoryItem'

const Category = () => {
  const { type } = useParams()
  const { allProducts, addToCart, addToFav, favItem } = useContext(StoreContext)
  const [item, setItem] = useState([])
  const [favProd, setFAvProd] = useState([])

  useEffect(() => {
    const item = allProducts.filter(product => product.category == type)
    window.scrollTo(0, 0)
    if (item) {
      setItem(item)
    }
  }, [allProducts, type])

  useEffect(() => {
    const favArray = Object.entries(favItem)
    setFAvProd(favArray)
  }, [favItem])

  return (
    <section className='category container'>
      <h2 className='main-title'>{type}</h2>

      <div className="category-products">
        {
          item.map((value, index) => {
            const isFav = favProd.some(prod => prod[0] == value.id && prod[1] > 0)
            return (
              <CategoryItem key={index} isFav={isFav} img={value.img} id={value.id} made={value.made} numReviews={value.numReviews} shortName={value.shortName} fullName={value.fullName} price={value.price} addToFav={addToFav} addToCart={addToCart} />
            );
          })
        }
      </div>
    </section>
  )
}

export default Category