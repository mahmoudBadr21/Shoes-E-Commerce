import './contact.css'

const Contact = () => {
  return (
    <section className="contact container">
      <h2 className="main-title">Contact</h2>

      <div className="contact-content">
        <p className="contact-prag">
          Have a <span className='spcial-color'>question</span> or need help? We're here for you <i class="fa-solid fa-circle-info spcial-color"></i>
        </p>

        <p className="contact-prag">
          <i class="fa-solid fa-phone"></i>
          <span>Phone: +20 100 123 4567</span>
        </p>

        <p className="contact-prag">
          <i class="fa-solid fa-envelope"></i>
          <span>Email: support@yourstore.com</span>
        </p>

        <p className="contact-prag">
          <i class="fa-solid fa-location-dot"></i>
          <span>Address: Cairo, Egypt</span>
        </p>

        <p className="contact-prag">
          You can also reach us through our <span className='spcial-color'>social media pages</span>.
        </p>

        <div className="contact-icons flexBetween">
          <a href=""><i class="fa-brands fa-facebook"></i></a>
          <a href=""><i class="fa-brands fa-instagram"></i></a>
          <a href=""><i class="fa-brands fa-whatsapp"></i></a>
          <a href=""><i class="fa-brands fa-x-twitter"></i></a>
        </div>

        <p className="contact-prag">
          Thank you for getting in touch <i className='fas fa-heart spcial-color'></i>
        </p>
      </div>
    </section>
  );
}

export default Contact