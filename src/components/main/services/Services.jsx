import './services.css'

const Services = () => {
  return (
    <section className='services flexBetween'>
      <div className="serv flexBetween">
        <div className="serv-icon">
          <i className="fas fa-van-shuttle fa-2x"></i>
        </div>

        <div className="serv-text">
          <h5>Free Delivery</h5>
          <p>Free Shipping on all order</p>
        </div>
      </div>
      <div className="serv flexBetween">
        <div className="serv-icon">
          <i className="fa-regular fa-comments fa-2x"></i>
        </div>

        <div className="serv-text">
          <h5>Online Support 24-7</h5>
          <p>support online 24 hours a day</p>
        </div>
      </div>
      <div className="serv flexBetween">
        <div className="serv-icon">
          <i className="fa-solid fa-shekel fa-2x"></i>
        </div>

        <div className="serv-text">
          <h5>Money Return</h5>
          <p>support online 24 hours a day</p>
        </div>
      </div>
      <div className="serv flexBetween">
        <div className="serv-icon">
          <i className="fas fa-money-bill fa-2x"></i>
        </div>

        <div className="serv-text">
          <h5>Secure Payment</h5>
          <p>support online 24 hours a day</p>
        </div>
      </div>
    </section>
  )
}

export default Services
