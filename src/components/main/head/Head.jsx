import './head.css'
import head from '../../../images/head.png'
import { motion } from 'framer-motion'

const Head = () => {
  return (
    <section className="head container flexBetween">
      <motion.div
        className="head-left"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ delay: 0.02, duration: 0.8 }}
        variants={{
          hidden: { opacity: 0, x: -50 },
          visible: { opacity: 1, x: 0 },
        }}
      >
        <h3>
          Sh<span className="spcial-color">oes</span> <br /> Collect!
        </h3>

        <div className="prag-btn flexBetween">
          <p>
            Discover our stylish and comfortable shoes, perfect for every
            occasion and need
          </p>

          <button className="btn">Shop Now</button>
        </div>
      </motion.div>

      <motion.div
        className="head-right"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.5 }}
        transition={{ delay: 0.02, duration: 0.8 }}
        variants={{
          hidden: { opacity: 0, x: 50 },
          visible: { opacity: 1, x: 0 },
        }}
      >
        <div className="head-img">
          <img src={head} alt="head" />
          <span>120$</span>
        </div>
      </motion.div>
    </section>
  );
}

export default Head