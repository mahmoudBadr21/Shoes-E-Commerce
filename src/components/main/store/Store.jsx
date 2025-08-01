import './store.css'
import storeImg from '../../../images/sport1.jpg'

const Store = () => {
  return (
    <section className="store container">
      <h3 className="sec-title">Our Store</h3>

      <div className="store-content flexBetween">
        <div className="store-left">
          <img src={storeImg} alt="storeImg" />
        </div>

        <div className="store-right">
          <h4>Inspirational Shoes <br />Of This Year</h4>

          <p>
            Nike collection is designed to make 
            your running routine easier than ever 
            discover them now.
          </p>

          <button className="btn">Discover Now</button>
        </div>
      </div>
    </section>
  );
}

export default Store