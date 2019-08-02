import React, { Fragment, Component } from 'react';
import { Row, Col, Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import NavBar from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Sidebar from '../../components/Sidebar/Sidebar';
import sideLogo from '../../assets/images/logo.png';

import './speech.scss';

class Speech extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recorded: '',
      recordingStarted: false,
    };
    this.recognition = new webkitSpeechRecognition();
  }

  startSpeech = () => {
    this.setState({ recordingStarted: true, recorded: '' });

    this.recognition.maxAlternatives = 1;
    this.recognition.continuous = true;
    this.recognition.start();
  }


  stopSpeech = () => {
    this.setState({ recordingStarted: false });
    this.recognition.stop();
    this.recogntionMethod();
  }

  recogntionMethod = () => {
    this.recognition.onresult = (e) => {
      const current = e.resultIndex;
      // Get a transcript of what was said.
      const { transcript } = e.results[current][0];
      this.setState({ recorded: transcript });
    };
  }

  render() {
    const { recordingStarted, recorded } = this.state;
    return (
      <Fragment>
        <main className="d-container">
          <NavBar />
          <div className="d-row">
            <Row className="s-row">
              <Col sm="2" className="d-sidebar">
                <Sidebar>
                  <div className="d-aside">
                    <div>
                      <span className="d-logo">
                        <img src={sideLogo} alt="logo" />
                    Community
                      </span>
                    </div>
                    <ul className="d-links">
                      <li className="module-active">
                        <Link to="/dashboard">Modules</Link>
                      </li>
                      <li>
                        <Link to="/profile">Profile</Link>
                      </li>
                      <li>
                        <Link to="/payment">Payment</Link>
                      </li>
                      <li>
                        <Link to="/aboutus">Help</Link>
                      </li>
                    </ul>
                  </div>
                </Sidebar>
              </Col>
              <Col sm="10" className="m-main">
                <div className="recorder">
                  <div className="wrap">
                    <h2>Voice Recorder</h2>
                    <Button className="btn-speech" id="but_start" value="Start Recording" onClick={this.startSpeech}>
                  Start Recording
                    </Button>
                    <Button className="btn-speech2" id="but_stop" value="Stop Recording" onClick={this.stopSpeech}>
                  Stop Recording
                    </Button>
                    <br />
                    <br />
                    <FontAwesomeIcon icon="microphone" className="mic-icon" />
                    <br />
                    <span id="status">{recordingStarted && 'Recording has started'}</span>
                    <div id="volumeBar">
                      <div id="voiceVolume" />
                    </div>
                    <br />
                Said Words -
                    <br />
                    <textarea id="saidwords" value={recorded} />

                  </div>
                </div>
              </Col>
            </Row>
          </div>
          <div className="footer-div d-footer">
            <Footer />
          </div>
        </main>
      </Fragment>
    );
  }
}

export default Speech;
