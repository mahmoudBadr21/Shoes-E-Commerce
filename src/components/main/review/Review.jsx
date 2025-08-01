import './review.css'
import cl1 from '../../../images/avatar1.jpg'
import cl2 from '../../../images/avatar2.jpg'
import cl3 from '../../../images/avatar3.jpg'
import cl4 from '../../../images/avatar4.jpg'
import cl5 from '../../../images/avatar5.jpg'

const Review = () => {
  return (
    <section className='review container'>
      <h3 className="sec-title"> Review From Client</h3>
      
      <p className='review-prag'>
          “ See What Our Valued Customers Have To Say <br />
          About Thair Shoes <span className="spcial-color">Luxe</span> “
      </p>

      <div className="review-clients">
        <div className="review-row">
          <img src={cl1} alt="client" />
          <img src={cl2} alt="client" />
          <img src={cl3} alt="client" />
        </div>
        <div className="review-row">
          <img src={cl4} alt="client" />
          <img src={cl5} alt="client" />
        </div>
      </div>
      
      <div className="review-comment">
        <p>
            has truly changed the game! It’s not just a product; it’s a statement of style and 
            personality. Every time I use it, I feel like I’m embracing my best self. Perfect 
            blend of quality, comfort, and elegance – it redefines what it means to enjoy the 
            little things in life.
        </p>

        <div className="review-rating">
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
        </div>
      </div>
    </section>
  )
}

export default Review