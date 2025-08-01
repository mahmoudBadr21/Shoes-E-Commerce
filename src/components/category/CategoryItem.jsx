
const CategoryItem = ({isFav, img, id, made, numReviews, shortName, fullName, price, addToFav, addToCart }) => {

  return (
    <div className="category-card">
      <div className="category-image">
        <img src={img} alt="img" />
        <i onClick={() => addToFav(id)} className={`${isFav ? "fas fa-heart fav-active" : "far fa-heart"}`}></i>
      </div>

      <div className="category-made-review flexBetween">
        <span className="category-made">{made}</span>
        <span className="category-review">
          ({numReviews}<span className="spcial-letter">K</span> Review)
        </span>
      </div>

      <h4 className="category-shortName">{shortName}</h4>

      <h5 className="category-fullName">{fullName}</h5>

      <h5 className="category-price">${price}</h5>

      <button className="btn" onClick={() => addToCart(id)}>
        <i className="fas fa-shopping-cart"></i>
        <span>Add To Cart</span>
      </button>
    </div>
  )
}

export default CategoryItem