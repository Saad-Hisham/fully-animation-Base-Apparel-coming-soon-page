
import { Container, Row, Col } from 'react-bootstrap';
import lady from "./base-apparel-coming-soon-master/images/hero-desktop.jpg"
import arrow from "./base-apparel-coming-soon-master/images/icon-arrow.svg"
import { motion } from 'framer-motion';
function App() {
  return (
    <main>
      <Container>
        <Row>
          {/* information container */}
          <Col md={6} sm={12}>
            <div>
              {/* logo div  */}
              <motion.div className='logo-container'>
                <div className='logo'>
                  <span className='logo-circle'></span>
                  <p>base<br></br>apparel</p>
                </div>
              </motion.div>

              {/* header and information contanier */}
              <div className='information-container'>
                {/* h1 */}
                <h1>
                <span> We're</span> 
                  <br></br>
                  <span>coming </span>
                  <br></br>
                  <span>soon</span>
                </h1>
                {/* paragraph */}
                <p>Hello fellow shoppers! We're currently building our new fashion store.
                  Add your email below to stay up-to-date with announcements and our launch deals.</p>
              </div>
              {/* form container */}
              <div className='form-container'>
                <form>
                  <input type='text' required placeholder='  Email Address'/>
                  <button className='submit'>
                    <img src={arrow}/>
                  </button>
                </form>
              </div>
            </div>
          </Col>
          {/* image container */}
          <Col md={6} sm={12}>
            <div className='image-container'>
              <img src={lady} alt="Beautiful lady wearing a shirt with plants in the background " className='img-fluid' />
            </div>
          </Col>
        </Row>
      </Container>

    </main>

  );

}
export default App;









