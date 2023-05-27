
import { Container, Row, Col } from 'react-bootstrap';
import lady from "./base-apparel-coming-soon-master/images/hero-desktop.jpg"
import ladyMobile from "./base-apparel-coming-soon-master/images/hero-mobile.jpg"
import arrow from "./base-apparel-coming-soon-master/images/icon-arrow.svg"
import { motion } from 'framer-motion';
function App() {
  return (
    <div>
      <main>
        <Container>
          <Row>
            {/* logo div  */}
            <motion.div
              initial={{ x: "30vw", scale: 2 }}
              animate={{ x: 0, scale: 1, transition: { duration: 2, delay: 4 ,ease: "easeInOut"} }}

              className='logo-container'>
              <div className='logo'>
                <motion.span className='logo-circle'
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1, transition: { duration: 2, delay: 0 ,ease: "easeInOut"} }}
                ></motion.span>

                <p>
                  <motion.span initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0, transition: { duration: .7, delay: 1.7,ease: "easeInOut" } }}>b</motion.span>

                  <motion.span initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0, transition: { duration: .7, delay: 1.8 ,ease: "easeInOut"} }}>a</motion.span>

                  <motion.span initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0, transition: { duration: .7, delay: 2 ,ease: "easeInOut"} }}>s</motion.span>
                  <motion.span initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0, transition: { duration: .7, delay: 2,ease: "easeInOut" } }}>e</motion.span>
                  <br>
                  </br>

                  <motion.span initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0, transition: { duration: .7, delay: 2.2 ,ease: "easeInOut"} }}>a</motion.span>

                  <motion.span initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0, transition: { duration: .7, delay: 2.4 ,ease: "easeInOut"} }}>p</motion.span>

                  <motion.span initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0, transition: { duration: .7, delay: 2.6,ease: "easeInOut" } }}>p</motion.span>
                  <motion.span initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0, transition: { duration: .7, delay: 2.6 ,ease: "easeInOut"} }}>a</motion.span>
                  <motion.span initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0, transition: { duration: .7, delay: 2.6 ,ease: "easeInOut"} }}>r</motion.span>
                  <motion.span initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0, transition: { duration: .7, delay: 2.6,ease: "easeInOut" } }}>e</motion.span>
                  <motion.span initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0, transition: { duration: .7, delay: 2.6,ease: "easeInOut" } }}>l</motion.span>
                </p>
              </div>
            </motion.div>
          </Row>
        </Container>
    <motion.div className='lady-mobile-image-container'
                initial={{ x: "600" }}
                animate={{ x: 0, transition: { duration: 2, delay: 4 ,ease: "easeInOut"} }}
              >
       
          <img src={ladyMobile} alt="Beautiful lady wearing a shirt with plants in the background" />
        </motion.div>
        <Container>
          <Row>
            {/* information container */}
            <Col md={6} sm={12}>
              <div>


                {/* header and information contanier */}
                <div className='information-container'>
                  {/* h1 */}
                  <h1>
                    <span> <svg width="286" height="76" viewBox="0 0 286 76" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M8 3.98H4.38731L5.66036 7.36095L25.1131 59.0235L24.9392 59.5038L25.3367 59.6174L26.0844 61.603L28.4608 67.9143L30.7725 61.579L30.9075 61.2091L32.7801 61.7441L31.738 58.933L39.9328 36.4751L48.4059 58.9778L48.1908 59.5373L48.6841 59.7168L49.3944 61.603L51.6965 67.7171L54.0487 61.6675L56.4997 62.5588L55.1259 58.897L75.1541 7.38596L76.4784 3.98H72.824H71.27H69.5528L68.9366 5.58278L51.8225 50.0921L35.1307 5.60182L34.5222 3.98H32.79H31.31H27.6973L28.9704 7.36095L36.5405 27.4658L28.4034 49.9372L11.9721 5.61105L11.3675 3.98H9.628H8ZM100.454 3.906H97.9538V6.406V58.354V60.854H100.454H132.496H134.996V58.354V56.948V54.448H132.496H104.434V35.324H128.574H131.074V32.824V31.418V28.918H128.574H104.434V10.312H131.46H133.96V7.812V6.406V3.906H131.46H100.454ZM162.143 5.03968L162.183 2.5H159.643H157.941H155.441V5V23.426V25.926H157.941H159.347H161.808L161.847 23.4657C161.896 20.3581 161.946 17.2999 161.995 14.291L161.995 14.2903C162.044 11.2314 162.094 8.14788 162.143 5.03968ZM197.194 30.99H191.702V10.312H198.452C200.059 10.312 201.519 10.5649 202.851 11.0495C204.18 11.5325 205.323 12.2263 206.305 13.1298L206.325 13.1485L206.346 13.1668C207.292 13.9989 208.042 15.0274 208.593 16.288L208.612 16.3319L208.633 16.3749C209.197 17.5399 209.494 18.8412 209.494 20.318C209.494 21.5747 209.292 22.8774 208.868 24.2343L208.86 24.2586L208.853 24.283C208.512 25.4568 207.923 26.5534 207.051 27.5831C206.28 28.4951 205.136 29.3205 203.497 29.9931L203.486 29.9974L203.476 30.0019C202.014 30.6171 199.96 30.99 197.194 30.99ZM191.702 58.354V37.396H197.416C198.858 37.396 200.229 37.3088 201.521 37.1254L215.03 59.6402L215.758 60.854H217.174H218.876H223.291L221.019 57.0678L207.82 35.0682C209.279 34.2509 210.556 33.2553 211.622 32.0658C213.126 30.441 214.244 28.5918 214.951 26.5308L214.954 26.5207L214.957 26.5106C215.635 24.4793 215.974 22.387 215.974 20.244C215.974 17.3727 215.423 14.775 214.172 12.5792C213.013 10.4979 211.483 8.77794 209.578 7.46464C207.823 6.22202 205.916 5.31025 203.865 4.7396C201.964 4.1972 200.13 3.906 198.378 3.906H187.722H185.222V6.406V58.354V60.854H187.722H189.202H191.702V58.354ZM248.194 3.906H245.694V6.406V58.354V60.854H248.194H280.236H282.736V58.354V56.948V54.448H280.236H252.174V35.324H276.314H278.814V32.824V31.418V28.918H276.314H252.174V10.312H279.2H281.7V7.812V6.406V3.906H279.2H248.194ZM156.996 14.2097C156.946 17.2193 156.897 20.2781 156.848 23.3863L157.941 23.4037V23.426H159.347H160.441V14.2655V14.2653V5.01267V5L156.996 14.2097Z" stroke="#CA979C" stroke-width="5" />
                    </svg>
                    </span>
                    <br></br>
                    <motion.span
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0, transition: { duration: .7, delay: 5,ease: "easeInOut" } }}
                    >coming
                    </motion.span>
                    <br></br>
                    <motion.span
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0, transition: { duration: .7, delay: 5.2,ease: "easeInOut" } }}
                    >soon</motion.span>
                  </h1>
                  {/* paragraph */}
                  <p className='body-text'><motion.span
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0, transition: { duration: .7, delay: 5,ease: "easeInOut" } }}

                  >Hello fellow shoppers! We're currently building our new
                  </motion.span>
                    <motion.span
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0, transition: { duration: .7, delay: 5.2,ease: "easeInOut" } }}

                    > fashion store.
                      Add your email below to stay up-to-date with</motion.span>
                    <motion.span
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0, transition: { duration: .7, delay: 5.4 ,ease: "easeInOut"} }}

                    >announcements and our launch deals.</motion.span></p>
                </div>
                {/* form container */}
                <div className='form-container'>
                  <form>
                    <motion.input
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1, transition: { duration: .7, delay: 5.7,ease: "easeInOut" } }}
                      type='text' required placeholder='  Email Address' />
                    <motion.button
                      className='submit'
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1, transition: { duration: .7, delay: 6.3 ,ease: "easeInOut"} }}
                    >
                      <img src={arrow} alt='arrow icon' />
                    </motion.button>
                  </form>
                </div>
              </div>
            </Col>
            {/* image container */}
            <Col md={6} sm={12}>
              <motion.div className='image-container'
                initial={{ x: "600" }}
                animate={{ x: 0, transition: { duration: 2, delay: 4,ease: "easeInOut" } }}
              >
                <img src={lady} className='img-fluid' alt="Beautiful lady wearing a shirt with plants in the background" />
              </motion.div>
            </Col>
          </Row>
        </Container>
      </main>
      <footer>  Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>.
        Coded by <a href="https://www.frontendmentor.io/profile/Saad-Hisham">SAAD HISHAM</a> Animation design by <a href="https://www.linkedin.com/in/visualdev-web-development-66a171268/">
          visualdennis
        </a></footer>
    </div>
  );

}
export default App;









