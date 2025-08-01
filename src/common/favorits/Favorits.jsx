import './favorits.css'
import '../../components/category/category.css'
import { useContext } from 'react'
import { StoreContext } from '../../context/StoreContext'
import CategoryItem from '../../components/category/CategoryItem'

const Favorits = () => {
  const { allProducts, favItem, addToFav, addToCart, favArray } = useContext(StoreContext)
  
  return (
    <div className='favorits container'>
      <h2 className='main-title'>Favorites</h2>
      { favArray.length == 0 ? <p className='no-products'>No Products Yet</p> :
        <div className="favorits-products">
          {
            allProducts.map((value, index) => {
              if (favItem[value.id] > 0) {
                const isFav = favArray.some(prod => prod[0] == value.id)
                return (
                  <CategoryItem key={index} isFav={isFav} img={value.img} id={value.id} made={value.made} numReviews={value.numReviews} shortName={value.shortName} fullName={value.fullName} price={value.price} addToFav={addToFav} addToCart={addToCart} />
                )
              }
            })
          }
        </div>
      }
    </div>
  )
}

export default Favorits