import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import Header from '../../components/Header/Header';
import Sidebar from '../../components/Sidebar/Sidebar';
import UserDetails from '../../components/UserDetails/UserDetails';
import ProfileDetails from './ProfileDetails';
import './profile.scss';
import * as actions from '../../../store/actions/profile';
import Button from '../../components/Button';
import Footer from '../../components/Footer/Footer';
import profileValidator from '../../validations/profileValidation';

export class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.imageFile = React.createRef();
    this.state = {
      isEdit: false,
      error: {},
      data: {},
    };
    this.toggleEdit = this.toggleEdit.bind(this);
    this.handleInput = this.handleInput.bind(this);
  }

  componentDidMount() {
    const { getProfile, userId } = this.props;
    getProfile(userId);
  }

  submitHandler = async () => {
    const { data } = this.state;
    const inputError = profileValidator(data);
    this.setState({ error: inputError });
    if (Object.entries(inputError).length === 0) {
      const { updateProfile } = this.props;
      const updatedProfile = data;
      await updateProfile(updatedProfile);
      this.toggleEdit();
    }
  }

  toggleEdit() {
    this.setState(prevState => ({ isEdit: !prevState.isEdit }));
  }

  handleInput(e) {
    const { name, value } = e.target;
    const { data } = this.state;
    const newData = { ...data };
    newData[name] = value;
    this.setState({ data: newData });
  }

  render() {
    const { profile, isLoading, uploadImage } = this.props;
    const { isEdit, error } = this.state;
    return (
      <div>
        <Header />
        <Row>
          <Col md="3" lg="2" sm="3" className="d-sidebar">
            <Sidebar>
              <ProfileDetails
                profile={profile}
                loading={isLoading}
                uploadImage={uploadImage}
                imageFile={this.imageFile}
              />
            </Sidebar>
          </Col>
          <Col md="9" lg="10" sm="9">
            <div className="main">
              <h2 style={{ color: '#6D6666' }}>
                Welcome back
              </h2>
              <div className="memberCard">
                <h5>
                  {profile.isEnrolled
                    ? 'You have started the course journey'
                    : 'You have not enrolled in any course'}
                  <Link to="/dashboard">
                    <Button type="button" text={profile.isEnrolled ? 'Continue' : 'Start journey'} />
                  </Link>
                </h5>
              </div>
              <UserDetails
                profile={profile}
                toggleEdit={this.toggleEdit}
                isEdit={isEdit}
                handleInput={this.handleInput}
                submitProfile={this.submitHandler}
                error={error}
              />
            </div>
          </Col>
        </Row>
        <Footer />
      </div>
    );
  }
}

Profile.propTypes = {
  getProfile: PropTypes.func.isRequired,
  profile: PropTypes.shape({
    email: PropTypes.string,
    name: PropTypes.string,
    image: PropTypes.string,
    isEnrolled: PropTypes.bool,
  }),
  userId: PropTypes.number.isRequired,
  isLoading: PropTypes.bool,
  uploadImage: PropTypes.func,
  updateProfile: PropTypes.func,
};
const mapStateToProps = state => ({
  profile: state.profile.data,
  userId: state.auth.user.userId,
  isLoading: state.profile.isLoading,
});

const mapDispatchToProps = dispatch => ({
  getProfile: userId => dispatch(actions.getProfile(userId)),
  uploadImage: image => dispatch(actions.uploadImage(image)),
  updateProfile: data => dispatch(actions.updateProfile(data)),
});
export default connect(mapStateToProps, mapDispatchToProps)(Profile);
