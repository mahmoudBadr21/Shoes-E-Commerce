import './about.css'

const About = () => {
  return (
    <section className="about container">
      <h2 className="main-title">About</h2>

      <div className="about-content">
        <p className="about-prag">Welcome to our store <i className='fa-regular fa-handshake spcial-color'></i></p>

        <p className="about-prag">
          We are an <span className='spcial-color'>online shoes store</span> offering a wide range of styles for men,
          women, kids, and sportswear. <span className='spcial-color'>Our goal</span> is to provide high-quality,
          comfortable, and <span className='spcial-color'>stylish footwear</span> at <span className='spcial-color'>the best prices.</span>
        </p>

        <p className="about-prag">
          <span className='spcial-color'>Our team</span> carefully selects every item to ensure it meets our quality
          standards and <span className='spcial-color'>matches the latest fashion trends</span>.
        </p>

        <p className="about-prag">
          We are <span className='spcial-color'>committed</span> to delivering a smooth and <span className='spcial-color'>secure shopping experience</span>,
          with fast shipping and <span className='spcial-color'>responsive customer support</span>.
        </p>

        <p className="about-prag">Thank you for choosing us <i className='fas fa-heart spcial-color'></i></p>
      </div>
    </section>
  );
}

export default About