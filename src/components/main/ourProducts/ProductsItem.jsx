import { useContext, useRef } from "react"
import { StoreContext } from "../../../context/StoreContext"

const ProductsItem = ({cartIconRef, img, numReviews, shortName, price, id}) => {
  const { addToCart, flyToCart } = useContext(StoreContext)
  const productImgRef = useRef()
  
  const handleAddToCart = () => {
    addToCart(id)
    flyToCart(productImgRef.current, cartIconRef.current)
  }
  return (
    <div className="prods-card">
      <img ref={productImgRef} src={img} alt='img'/>

      <div className="card-review">
        <i className="fas fa-star"></i>
        <span>( <span className="num-rev">{numReviews}</span>K Reviews )</span>
      </div>

      <h4 className="prod-name">{shortName}</h4>

      <div className="card-footer flexBetween">
        <h5 className="price">${price}</h5>
        <i onClick={() => handleAddToCart(id)} className="fas fa-shopping-cart"></i>
      </div>
    </div>
  )
}

export default ProductsItem