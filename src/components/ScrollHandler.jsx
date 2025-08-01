import { useEffect } from "react";
import { useLocation } from "react-router-dom"

const ScrollHandler = () => {
  const location = useLocation();

  useEffect(() => {
    if(location.hash){
      var element = document.querySelector(location.hash)
    };
    if (element) {
      element.scrollIntoView({behavior: "smooth"})
    }else{
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      })
    }
  }, [location])
  return null
}

export default ScrollHandler