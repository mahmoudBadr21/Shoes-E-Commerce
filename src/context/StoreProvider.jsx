import{ useState } from "react"
import { StoreContext } from "./StoreContext";
import { allProducts } from "../assets/assets";

const StoreProvider = ({children}) => {
    const [cartItem, setCartItem] = useState({});
    const [favItem, setFavItem] = useState({});
    const favArray = Object.entries(favItem).filter(i => i[1] != 0)
    const cartLength = Object.entries(cartItem).filter(i => i[1] != 0).length
  
    const addToCart = (itemId) => {
    if (!cartItem[itemId]) {
      setCartItem((prev) => ({ ...prev, [itemId]: 1 }));
    }
    else {
      setCartItem((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    }
  };

  const decreaseCartItem = (itemId) => {
    setCartItem((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };

  const removeFromCart = (itemId) => {
    setCartItem((prev) => ({ ...prev, [itemId]: 0 }))
  };

    const addToFav = (itemId) => {
    if (!favItem[itemId]) {
      setFavItem((prev) => ({ ...prev, [itemId]: 1 }));
    }
    else {
      setFavItem((prev) => ({ ...prev, [itemId]: 0 }))
    }
  };

    const getTotalCartAmount = () => {
      let totalAmount = 0;
      for (const item in cartItem) {
        if (cartItem[item] > 0) {
          let itemInfo = allProducts.find((product) => product.id === item)
          if (itemInfo.selling) {
            totalAmount += (Number(itemInfo.price) - Number(itemInfo.price * .25)) * cartItem[item]
          }else {
            totalAmount += itemInfo.price * cartItem[item]
          }
        }
      }
      return totalAmount;
    }

    const flyToCart = (imgEl, cartIcon) => {
      if (imgEl && cartIcon) {
        const imgClone = imgEl.cloneNode(true);
        imgClone.style.position = "absolute";
        imgClone.style.width = "100px";
        imgClone.style.height = "100px";
        imgClone.style.transition = "all 0.8s ease-in-out";
        imgClone.style.zIndex = 1000;

        const imgRect = imgEl.getBoundingClientRect();
        const cartRect = cartIcon.getBoundingClientRect();

        // start from center bottom of img
        imgClone.style.top = imgRect.bottom + window.scrollY + "px";
        imgClone.style.left = imgRect.left + window.scrollX + imgRect.width / 2 - 50 + "px";

        document.body.appendChild(imgClone);

        requestAnimationFrame(() => {
          // End to cart icon
          imgClone.style.top = cartRect.top + window.scrollY + "px";
          imgClone.style.left = cartRect.left + window.scrollX + "px";
          imgClone.style.width = "45px";
          imgClone.style.height = "45px";
          imgClone.style.opacity = "0.3";
        });

        imgClone.addEventListener("transitionend", () => {
          imgClone.remove();
        });
      }
    }


    const contextValue = {
      allProducts,
      cartItem,
      cartLength,
      favArray,
      favItem,
      addToCart,
      removeFromCart,
      decreaseCartItem,
      addToFav,
      getTotalCartAmount,
      flyToCart,
    }
  return (
    <StoreContext.Provider value={contextValue}>
      {children}
    </StoreContext.Provider>
  )
}

export default StoreProvider