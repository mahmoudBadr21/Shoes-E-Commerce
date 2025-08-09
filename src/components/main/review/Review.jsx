import './review.css'
import { motion } from 'framer-motion'
import cl1 from '../../../images/avatar1.jpg'
import cl2 from '../../../images/avatar2.jpg'
import cl3 from '../../../images/avatar3.jpg'
import cl4 from '../../../images/avatar4.jpg'
import cl5 from '../../../images/avatar5.jpg'

const Review = () => {
  return (
    <section className="review container">
      <h3 className="sec-title"> Review From Client</h3>

      <p className="review-prag">
        “ See What Our Valued Customers Have To Say <br />
        About Thair Shoes <span className="spcial-color">Luxe</span> “
      </p>

      <div className="review-clients">
        <motion.div
          className="review-row"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.02, duration: 0.8 }}
          variants={{
            hidden: { opacity: 0, y: -50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <img src={cl1} alt="client" />
          <img src={cl2} alt="client" />
          <img src={cl3} alt="client" />
        </motion.div>
        <motion.div
          className="review-row"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.02, duration: 0.8 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <img src={cl4} alt="client" />
          <img src={cl5} alt="client" />
        </motion.div>
      </div>

      <div className="review-comment">
        <p>
          has truly changed the game! It’s not just a product; it’s a statement
          of style and personality. Every time I use it, I feel like I’m
          embracing my best self. Perfect blend of quality, comfort, and
          elegance – it redefines what it means to enjoy the little things in
          life.
        </p>

        <div className="review-rating">
          <motion.i
            className="fas fa-star"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.5 }}
            transition={{ delay: 0.02, duration: 0.2 }}
            variants={{
              hidden: { opacity: 0, y: -30 },
              visible: { opacity: 1, y: 0 },
            }}
          ></motion.i>

          <motion.i
            className="fas fa-star"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.5 }}
            transition={{ delay: 0.02, duration: 0.4 }}
            variants={{
              hidden: { opacity: 0, y: -30 },
              visible: { opacity: 1, y: 0 },
            }}
          ></motion.i>

          <motion.i
            className="fas fa-star"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.5 }}
            transition={{ delay: 0.02, duration: 0.6 }}
            variants={{
              hidden: { opacity: 0, y: -30 },
              visible: { opacity: 1, y: 0 },
            }}
          ></motion.i>

          <motion.i
            className="fas fa-star"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.5 }}
            transition={{ delay: 0.02, duration: 0.8 }}
            variants={{
              hidden: { opacity: 0, y: -30 },
              visible: { opacity: 1, y: 0 },
            }}
          ></motion.i>

          <motion.i
            className="fas fa-star"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.5 }}
            transition={{ delay: 0.02, duration: 1 }}
            variants={{
              hidden: { opacity: 0, y: -30 },
              visible: { opacity: 1, y: 0 },
            }}
          ></motion.i>
        </div>
      </div>
    </section>
  );
}

export default Review