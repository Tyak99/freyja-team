/* eslint-disable max-len */
import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { Card, CardTitle, CardText, CardBody, CardImg } from 'reactstrap';
import { Header } from '../../components/Header/Header';
import Button from '../../components/Button';
import Footer from '../../components/Footer/Footer';
import './home.scss';
import aboutus from '../../assets/img/aboutus.jpg';
import howitworks from '../../assets/img/howitworks.jpg';
import testimonial1 from '../../assets/img/testimonial.jpg';
import testimonial2 from '../../assets/img/testimonial2.jpg';
import testimonial3 from '../../assets/img/testimonial3.jpg';
import rateImg from '../../assets/img/rate.svg';
import medal from '../../assets/img/medal.svg';
import education from '../../assets/img/education.svg';

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
                  Join a community of like minded customer service skills enthusiast to foster
                  inspiration and innovation by leveraging on the modern web.
                </h2>
              </div>
            </div>
          </div>
        </li>
      </ul>
      <Link className="slink" to="/signup">
        <Button text="Get Started" classname="absolute-button hiw-button" />
      </Link>

      <div className="icons-holder">
        <div className="icons">
          <img className="info" src={rateImg} alt="take-courses" />
          <span>Take Courses</span>
        </div>
        <div className="icons">
          <img className="info" src={medal} alt="get-started" />
          <span>Get Certified</span>
        </div>
        <div className="icons">
          <img className="info" src={education} alt="community" />
          <span>community</span>
        </div>
      </div>
      <div className="desc-container">
        <div className="howitworks">
          <div className="hiw-img hiw">
            <Card className="hiw-card">
              <CardBody>
                <CardImg className="hiw-card-img" src={howitworks} alt="howitworks" />
              </CardBody>
            </Card>
          </div>
          <div className="hiw-content hiw">
            <Card className="hiw-card hiw-card-content">
              <CardBody className="card-body-content">
                <CardTitle>
                  <h2>How it Works</h2>
                </CardTitle>
                <CardText>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam quis mi imperdiet
                  eros lacinia tempor. Pellentesque in quam sit amet nunc scelerisque tincidunt. In
                  hac habitasse platea dictumst. Sed facilisis massa quis congue tempus.
                </CardText>
                <HashLink to="/aboutus/#sect-wrks">
                  <Button text="Learn More" classname="hiw-button" />
                </HashLink>
              </CardBody>
            </Card>
          </div>
        </div>
        <div className="about-us">
          <div className="hiw-img hiw">
            <Card className="hiw-card">
              <CardBody>
                <CardImg className="hiw-card-img" src={aboutus} alt="about-us" />
              </CardBody>
            </Card>
          </div>
          <div className="hiw hiw-content">
            <Card className="hiw-card hiw-card-content">
              <CardBody className="card-body-content">
                <CardTitle>
                  <h2>About Us</h2>
                </CardTitle>
                <CardText>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam quis mi imperdiet
                  eros lacinia tempor. Pellentesque in quam sit amet nunc scelerisque tincidunt. In
                  hac habitasse platea dictumst. Sed facilisis massa quis congue tempus.
                </CardText>
                <HashLink to="/aboutus/#sec-abt">
                  <Button text="Learn More" classname="hiw-button" />
                </HashLink>
              </CardBody>
            </Card>
          </div>
        </div>

        <div className="t-slide">
          <li className="testimonial">
            <div className="hiw-img hiw">
              <Card className="hiw-card">
                <CardBody>
                  <CardImg className="test-card-img" src={testimonial1} alt="testimonial" />
                </CardBody>
              </Card>
            </div>
            <div className="hiw hiw-content">
              <Card className="hiw-card hiw-card-content">
                <CardBody className="card-body-content">
                  <CardTitle>
                    <h1>&quot;</h1>
                  </CardTitle>
                  <CardText>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam quis mi imperdiet
                    eros lacinia tempor. Pellentesque in quam sit amet nunc scelerisque tincidunt.
                    In hac habitasse platea dictumst. Sed facilisis massa quis congue tempus.
                  </CardText>
                </CardBody>
              </Card>
            </div>
          </li>
          <li className="testimonial">
            <div className="hiw-img hiw">
              <Card className="hiw-card">
                <CardBody>
                  <CardImg className="test-card-img" src={testimonial2} alt="testimonial" />
                </CardBody>
              </Card>
            </div>
            <div className="hiw hiw-content">
              <Card className="hiw-card hiw-card-content">
                <CardBody className="card-body-content">
                  <CardTitle>
                    <h1>&quot;</h1>
                  </CardTitle>
                  <CardText>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam quis mi imperdiet
                    eros lacinia tempor. Pellentesque in quam sit amet nunc scelerisque tincidunt.
                    In hac habitasse platea dictumst. Sed facilisis massa quis congue tempus.
                  </CardText>
                </CardBody>
              </Card>
            </div>
          </li>
          <li className="testimonial">
            <div className="hiw-img hiw">
              <Card className="hiw-card">
                <CardBody>
                  <CardImg className="test-card-img" src={testimonial3} alt="testimonial" />
                </CardBody>
              </Card>
            </div>
            <div className="hiw hiw-content">
              <Card className="hiw-card hiw-card-content">
                <CardBody className="card-body-content">
                  <CardTitle>
                    <h1>&quot;</h1>
                  </CardTitle>
                  <CardText>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam quis mi imperdiet
                    eros lacinia tempor. Pellentesque in quam sit amet nunc scelerisque tincidunt.
                    In hac habitasse platea dictumst. Sed facilisis massa quis congue tempus.
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
