import './head.css'
import head from '../../../images/head.png'

const Head = () => {
  return (
    <section className="head container flexBetween">
      <div className="head-left">
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
      </div>

      <div className="head-right">
        <div className="head-img">
          <img src={head} alt="head" />
          <span>120$</span>
        </div>
      </div>
    </section>
  );
}

export default Head