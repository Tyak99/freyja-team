/* eslint-disable max-len */
import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import {
  Card,
  CardTitle,
  CardText,
  CardBody,
  CardImg,
} from 'reactstrap';
import { Header } from '../../components/Header/Header';
import Button from '../../components/Button';
import Footer from '../../components/Footer/Footer';
import './home.scss';


const Home = () => (

  <Fragment>
    <div className="landing-container">
      <Header />
      <ul className="slide-container">
        <li>
          <div className="hwu-wrapper">
            <div className="hwu">
              <div>
                <h2>Develop yourself the right way</h2>
              </div>
            </div>
          </div>
        </li>
        <li>
          <div className="hwu-wrapper">
            <div className="hwu">
              <div>
                <h2>Grow your business with every conversation</h2>
              </div>
            </div>
          </div>
        </li>
        <li>
          <div className="hwu-wrapper">
            <div className="hwu">
              <div>
                <h2>
                        Join  a community of like minded customer service skills enthusiast to
                        foster inspiration and innovation by leveraging on the modern web.
                </h2>
              </div>
            </div>
          </div>
        </li>
      </ul>
      <Link className="slink" to="/signup"><Button text="Get Started" classname="absolute-button hiw-button" /></Link>

      <div className="icons-holder">
        <div className="icons">
          <img className="info" src="./src/assets/img/rate.svg" alt="take-courses" />
          <span>Take Courses</span>

        </div>
        <div className="icons">
          <img className="info" src="./src/assets/img/medal.svg" alt="get-started" />
          <span>Get Certified</span>

        </div>
        <div className="icons">
          <img className="info" src="./src/assets/img/education.svg" alt="community" />
          <span>community</span>

        </div>
      </div>
      <div className="desc-container">
        <div className="howitworks">

          <div className="hiw-img hiw">
            <Card className="hiw-card">
              <CardBody>
                <CardImg className="hiw-card-img" src="./src/assets/img/howitworks.jpg" alt="howitworks" />
              </CardBody>
            </Card>
          </div>
          <div className="hiw-content hiw">
            <Card className="hiw-card hiw-card-content">
              <CardBody className="card-body-content">
                <CardTitle><h2>How it Works</h2></CardTitle>
                <CardText>
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam quis mi imperdiet eros lacinia tempor.
                          Pellentesque in quam sit amet nunc scelerisque tincidunt. In hac habitasse platea dictumst.
                          Sed facilisis massa quis congue tempus.
                </CardText>
                <Link className="slink" to="/signup"><Button text="Get Started" classname="hiw-button" /></Link>
              </CardBody>
            </Card>
          </div>
        </div>
        <div className="about-us">
          <div className="hiw-img hiw">
            <Card className="hiw-card">
              <CardBody>
                <CardImg className="hiw-card-img" src="./src/assets/img/aboutus.jpg" alt="about-us" />
              </CardBody>
            </Card>
          </div>
          <div className="hiw hiw-content">
            <Card className="hiw-card hiw-card-content">
              <CardBody className="card-body-content">
                <CardTitle><h2>About Us</h2></CardTitle>
                <CardText>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam quis mi imperdiet eros lacinia tempor.
                        Pellentesque in quam sit amet nunc scelerisque tincidunt. In hac habitasse platea dictumst.
                        Sed facilisis massa quis congue tempus.
                </CardText>
                <Button text="Learn More" classname="hiw-button" />
              </CardBody>
            </Card>
          </div>
        </div>

        <div className="t-slide">
          <li className="testimonial">
            <div className="hiw-img hiw">
              <Card className="hiw-card">
                <CardBody>
                  <CardImg className="test-card-img" src="./src/assets/img/testimonial.jpg" alt="testimonial" />
                </CardBody>
              </Card>
            </div>
            <div className="hiw hiw-content">
              <Card className="hiw-card hiw-card-content">
                <CardBody className="card-body-content">
                  <CardTitle><h1>&quot;</h1></CardTitle>
                  <CardText>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam quis mi imperdiet eros lacinia tempor.
                        Pellentesque in quam sit amet nunc scelerisque tincidunt. In hac habitasse platea dictumst.
                        Sed facilisis massa quis congue tempus.
                  </CardText>
                </CardBody>
              </Card>
            </div>
          </li>
          <li className="testimonial">
            <div className="hiw-img hiw">
              <Card className="hiw-card">
                <CardBody>
                  <CardImg className="test-card-img" src="./src/assets/img/testimonial2.jpg" alt="testimonial" />
                </CardBody>
              </Card>
            </div>
            <div className="hiw hiw-content">
              <Card className="hiw-card hiw-card-content">
                <CardBody className="card-body-content">
                  <CardTitle><h1>&quot;</h1></CardTitle>
                  <CardText>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam quis mi imperdiet eros lacinia tempor.
                        Pellentesque in quam sit amet nunc scelerisque tincidunt. In hac habitasse platea dictumst.
                        Sed facilisis massa quis congue tempus.
                  </CardText>
                </CardBody>
              </Card>
            </div>
          </li>
          <li className="testimonial">
            <div className="hiw-img hiw">
              <Card className="hiw-card">
                <CardBody>
                  <CardImg className="test-card-img" src="./src/assets/img/testimonial3.jpg" alt="testimonial" />
                </CardBody>
              </Card>
            </div>
            <div className="hiw hiw-content">
              <Card className="hiw-card hiw-card-content">
                <CardBody className="card-body-content">
                  <CardTitle><h1>&quot;</h1></CardTitle>
                  <CardText>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam quis mi imperdiet eros lacinia tempor.
                        Pellentesque in quam sit amet nunc scelerisque tincidunt. In hac habitasse platea dictumst.
                        Sed facilisis massa quis congue tempus.
                  </CardText>
                </CardBody>
              </Card>
            </div>
          </li>
        </div>

      </div>
    </div>
    <div className="footer-wrapper">
      <Footer />
    </div>
  </Fragment>
);


export default Home;
