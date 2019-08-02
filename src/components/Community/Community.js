import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { withRouter, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Moment from 'react-moment';
import Header from '../Header/Header';
import Spinner from '../Spinner/Spinner';
import Footer from '../Footer/Footer';
import Sidebar from '../Sidebar/Sidebar';
import Input from '../Inputs/Input';
import Button from '../Button';
import * as actions from '../../../store/actions/community';
import './community.scss';
import sideLogo from '../../assets/images/logo.png';

export class Community extends PureComponent {
  state = {
    messages: [],
  };

  componentDidMount() {
    const getCommMessages = async () => {
      const { getCommunityMessages } = this.props;
      await getCommunityMessages();
      const { messages } = this.props;
      this.setState({ messages });
    };
    getCommMessages();
  }

  render() {
    const spinner = (
      <div className="spinner-position">
        <Spinner />
      </div>
    );

    const { messages } = this.state;
    const { loading } = this.props;
    return (
      <div>
        <Header />
        <div className="main_com">
          <Sidebar>
            <div className="d-aside">
              <div className="c-side">
                <span className="c-logo">
                  <img src={sideLogo} alt="logo" />
                  Community
                </span>
              </div>
              <ul className="d-links">
                <li className="module-active">
                  <Link to="/community">Forum</Link>
                </li>
                <li>
                  <Link to="/profile">Profile</Link>
                </li>
                <li>
                  <Link to="/payment">Messages</Link>
                </li>
                <li>
                  <Link to="/aboutus">Help</Link>
                </li>
              </ul>
            </div>
          </Sidebar>
          <div className="main_sec">
            <div className="input_section">
              <Input id="inp" placeholder="Title" />
              <textarea rows="3" placeholder="enter your message..." />
              <Button text="Post message" classname="com_btn" />
              <hr />
            </div>
            <div className="posts">
              {loading ? (
                spinner
              ) : (
                messages.map(msg => (
                  <div className="posts_section" key={msg && msg.id}>
                    <h4 className="post_title">
                      {msg.owner && msg.owner.lastName}
                      {' '}
                      {msg.owner && msg.owner.firstName}
                    </h4>
                    <p className="timeCreated">
                      <Moment local format="LLLL">
                        {msg.createdAt}
                      </Moment>
                    </p>
                    <p className="post_body">{msg.body}</p>
                    <p className="poster_name">{msg.owner && msg.owner.userName}</p>
                    <p className="poster_role">{msg.owner && msg.owner.role}</p>
                    <hr />
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  loading: state.community.isLoading,
  messages: state.community.allMessages,
  error: state.community.error,
});

const mapDispatchToProps = {
  getCommunityMessages: () => actions.getCommunityMessages(),
};

Community.propTypes = {
  getCommunityMessages: PropTypes.func,
  loading: PropTypes.bool,
  messages: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    body: PropTypes.string,
  })),
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Community));
