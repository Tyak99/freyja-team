import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Button, Form, FormGroup, Input } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Header } from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import './aboutus.scss';

const About = () => (
  <Fragment>
    <Header />
    <div className="wrapper">
      <section className="sec-abt row" name="sec-abt" id="sec-abt">
        <div className="container-A">
          <h1 className="abt-h">About us</h1>
          <p className="top-texx">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
            laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
            architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas
            sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
            voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit
            amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut
            labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis
            nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi
            consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam
            nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla
            pariatur?
          </p>
        </div>
      </section>

      <section className="sect-wrks row" id="sect-wrks">
        <div className="container-A spe">
          <h1 className="abt-h">How it works</h1>
          <br />
          <div className="textg row">
            <div className="boxxx">
              <span className="nummm">1</span>
            </div>
            <div className="tesx">
              Browse through the totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et
              quasi architecto aut odit aut fugit, sed quia consequuntur magni dolores eos qui
              ratione voluptatem sequi n
            </div>
          </div>
          <div className="textg row">
            <div className="boxxx">
              <span className="nummm">2</span>
            </div>
            <div className="tesx">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
              laudant totam rem aperiam, eaque ipsa quae aut odit aut fugit, sed quia consequuntur
              magni dolores eos qui ratione voluptatem sequi n
            </div>
          </div>
          <div className="textg row">
            <div className="boxxx">
              <span className="nummm">3</span>
            </div>
            <div className="tesx">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
              laudant totam rem aperiam, eaque ipsa aut odit aut fugit, sed quia consequuntur magni
              dolores eos qui ratione voluptatem sequi n
            </div>
          </div>
          <div id="psub">
            {' '}
            <Link to="/signup">
              <Button className="psub">Get Started</Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="Ms-t row">
        <div className="container-A">
          <h1 className="abt-h">Meet our Trainers</h1>
          <br />
          <div className="row">
            <div className="tutors">
              <div className="circ" />
              <div className="nam"> Gabriella David</div>
              <div className="handlesd">
                <Link to="/aboutus">
                  <FontAwesomeIcon icon={['fab', 'twitter']} className="icon alt fci" />
                </Link>
                <Link to="/aboutus" className="icii">
                  <FontAwesomeIcon icon={['fab', 'facebook-f']} className="icon alt fci" />
                </Link>
                <Link to="/aboutus">
                  <FontAwesomeIcon icon={['fab', 'google']} className="icon alt fci" />
                </Link>
              </div>
            </div>
            <div className="tutors">
              <div className="circ1" />
              <div className="nam"> Kareem David</div>
              <div className="handlesd">
                <Link to="/aboutus">
                  <FontAwesomeIcon icon={['fab', 'twitter']} className="icon alt fci" />
                </Link>
                <Link to="/aboutus" className="icii">
                  <FontAwesomeIcon icon={['fab', 'facebook-f']} className="icon alt fci" />
                </Link>
                <Link to="/aboutus">
                  <FontAwesomeIcon icon={['fab', 'google']} className="icon alt fci" />
                </Link>
              </div>
            </div>
            <div className="tutors">
              <div className="circ3" />
              <div className="nam">Aliona Adeboye</div>
              <div className="handlesd">
                <Link to="/aboutus">
                  <FontAwesomeIcon icon={['fab', 'twitter']} className="icon alt fci" />
                </Link>
                <Link to="/aboutus" className="icii">
                  <FontAwesomeIcon icon={['fab', 'facebook-f']} className="icon alt fci" />
                </Link>
                <Link to="/aboutus">
                  <FontAwesomeIcon icon={['fab', 'google']} className="icon alt fci" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="nbg-t row" id="nbg-t">
        <div className="container-A spe">
          <h1 className="abt-h">Contact us</h1>
          <h3> You can drop a message for us using the form below</h3>
          <Form className="form-hw">
            <FormGroup>
              <Input type="text" name="firstname" placeholder="First Name" className="inp" />
            </FormGroup>
            <FormGroup>
              <Input type="text" name="lastname" placeholder="Last Name" className="inp" />
            </FormGroup>
            <FormGroup>
              <Input type="email" name="email" placeholder="Email" className="inp" />
            </FormGroup>
            <FormGroup>
              <Input type="textarea" name="text" placeholder="Message" className="textar" />
            </FormGroup>
            <Button className="psub">Submit</Button>
          </Form>
        </div>
      </section>
    </div>
    <Footer />
  </Fragment>
);
export default About;
