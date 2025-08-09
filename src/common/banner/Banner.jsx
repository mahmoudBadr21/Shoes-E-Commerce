import './banner.css'
import banner1 from '../../images/banner1.jpg'

const Banner = () => {
  return (
    <section className='banner'>
      <div className="banner-content container flexBetween">
        <p className="banner-text">
          Shop Now and Unleash<br/>Your Inner Glow!
        </p>

        <div className="banner-image">
          <img src={banner1} alt="banner" />
        </div>
      </div>
    </section>
  )
}

export default Banner
