import { useContext } from "react"
import { StoreContext } from "../../../context/StoreContext"

const ProductsItem = ({img, numReviews, shortName, price, id}) => {
  const { addToCart } = useContext(StoreContext)
  return (
    <div className="prods-card">
      <img src={img} alt='img'/>

      <div className="card-review">
        <i className="fas fa-star"></i>
        <span>( <span className="num-rev">{numReviews}</span>K Reviews )</span>
      </div>

      <h4 className="prod-name">{shortName}</h4>

      <div className="card-footer flexBetween">
        <h5 className="price">${price}</h5>
        <i onClick={() => addToCart(id)} className="fas fa-shopping-cart"></i>
      </div>
    </div>
  )
}

export default ProductsItem