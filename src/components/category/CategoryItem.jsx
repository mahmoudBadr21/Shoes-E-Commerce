import { motion } from "framer-motion"

const CategoryItem = ({isFav, img, id, made, numReviews, shortName, fullName, price, addToFav, addToCart }) => {

  return (
    <motion.div
      className="category-card"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      transition={{ delay: 0.02, duration: 0.6 }}
      variants={{
        hidden: { opacity: 0, y: -30 },
        visible: { opacity: 1, y: 0 },
      }}
    >
      <div className="category-image">
        <img src={img} alt="img" />
        <i
          onClick={() => addToFav(id)}
          className={`${isFav ? "fas fa-heart fav-active" : "far fa-heart"}`}
        ></i>
      </div>

      <div className="category-made-review flexBetween">
        <span className="category-made">{made}</span>
        <span className="category-review">
          ({numReviews}
          <span className="spcial-letter">K</span> Review)
        </span>
      </div>

      <h4 className="category-shortName">{shortName}</h4>

      <h5 className="category-fullName">{fullName}</h5>

      <h5 className="category-price">${price}</h5>

      <button className="btn" onClick={() => addToCart(id)}>
        <i className="fas fa-shopping-cart"></i>
        <span>Add To Cart</span>
      </button>
    </motion.div>
  );
}

export default CategoryItem