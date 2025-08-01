import ChooseUs from '../main/chooseUs/ChooseUs'
import Head from '../main/head/Head'
import MostSelling from '../main/mostSelling/MostSelling'
import OurProducts from '../main/ourProducts/OurProducts'
import Review from '../main/review/Review'
import Services from '../main/services/Services'
import Store from '../main/store/Store'
import './home.css'

const Home = () => {
  return (
    <section className='home'>
      <Head />
      <OurProducts />
      <Store />
      <MostSelling />
      <Services />
      <ChooseUs />
      <Review />
    </section>
  )
}

export default Home