import './store.css'
import storeImg from '../../../images/sport1.jpg'
import { motion } from 'framer-motion';

const Store = () => {
  return (
    <section className="store container">
      <h3 className="sec-title">Our Store</h3>

      <div className="store-content flexBetween">
        <motion.div
          className="store-left"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.5 }}
          transition={{ delay: 0.02, duration: 0.8 }}
          variants={{
            hidden: { opacity: 0, x: 50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <img src={storeImg} alt="storeImg" />
        </motion.div>

        <motion.div
          className="store-right"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.02, duration: 0.8 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <h4>
            Inspirational Shoes <br />
            Of This Year
          </h4>

          <p>
            Nike collection is designed to make your running routine easier than
            ever discover them now.
          </p>

          <button className="btn">Discover Now</button>
        </motion.div>
      </div>
    </section>
  );
}

export default Store