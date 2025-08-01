import './chooseUs.css'
import us1 from '../../../images/us1.jpg'
import us2 from '../../../images/us2.jpg'

const ChooseUs = () => {
  return (
    <section className='chooseUs container'>
      <div className="chooseUs-content flexBetween">
        <div className="chooseUs-left">
          <img src={us1} alt="img1" />
        </div>

        <div className="chooseUs-right flexBetween">
          <div className="chooseUs-text">
            <h3>Why choose us ?</h3>

            <p>
              We focus on creating unique products in 
              small batches, crafted with care and 
              delivered directly to you. No middlemen, 
              no high markups, and no unsold inventory 
              just quality you can trust.
            </p>

            <button className="btn">Shop Now</button>
          </div>

          <div className="chooseUs-image">
            <img src={us2} alt="img2" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default ChooseUs