import './cart.css'
import { useContext } from "react"
import { StoreContext } from "../../context/StoreContext"

const Cart = () => {
    const { allProducts, cartItem, decreaseCartItem, cartLength, removeFromCart, addToCart, getTotalCartAmount } = useContext(StoreContext)
  
  return (
    <section className='cart container'>
      <h2 className='main-title'>Cart</h2>
      { cartLength == 0 ? <p className='no-products'>No Products Yet</p> :
        <div className="cart-content flexBetween">
          <div className="cart-products">
          {
            allProducts.map((value, index) => {
              if (cartItem[value.id] > 0) {
                return (
                  <div className="cart-card flexBetween" key={index}>
                    <div className="cart-image">
                      <h5 className="cart-made">{value.made}</h5>
                      <img src={value.img} alt="img" />
                    </div>

                    <div className="cart-details">
                      <h4 className="cart-shortName">{value.shortName}</h4>
                      <h4 className="cart-fullName">{value.fullName}</h4>
                      <p className="cart-quantity">
                        ${value.selling? (Number(value.price) - Number(value.price * .25)).toFixed(2) : value.price} *
                        <span className='spcial-color'> {cartItem[value.id]}</span>
                      </p>
                    </div>

                    <div className="cart-functions">
                      <i onClick={() => removeFromCart(value.id)} className="fas fa-times remove-cart"></i>
                      <div className="cart-control">
                        <i onClick={() => addToCart(value.id)} className="fa fa-plus inc-cart"></i>
                        <i onClick={() => decreaseCartItem(value.id)} className="fa fa-minus dec-cart"></i>
                      </div>
                    </div>
                  </div>
                );
              }
            })
          }
          </div>

          <div className="cart-total">
            <h2>Cart Summary</h2>
            <div className="flexBetween">
              <h4>Total Price : </h4>
              <h3>${getTotalCartAmount().toFixed(2)}</h3>
            </div>
          </div>
        </div>
      }
    </section>
  )
}

export default Cart