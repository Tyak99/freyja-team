import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import Spinner from '../../components/Spinner/Spinner';
import defaultImage from '../../utils/config';
import './profileDetails.scss';


const ProfileDetails = ({ profile, loading, imageFile, uploadImage }) => (
  <div className="profile">
    <div className="profileImage">
      <img
        src={profile.image || defaultImage}
        alt="profile"
        style={{ filter: loading && 'blur(4px)' }}
      />
      {loading && (
        <div className="spinner-position">
          <Spinner />
        </div>
      )}
      <input
        type="file"
        name="mediaFile"
        id="image"
        style={{ display: 'none' }}
        ref={imageFile}
        accept="image/*"
        onChange={() => uploadImage(imageFile.current.files[0])}
      />
      <FontAwesomeIcon icon="camera" onClick={() => imageFile.current.click()} id="uploadIcon" />
    </div>
    <div className="profileDetails">
      <h4>
        {profile.name}
      </h4>
      <p className="email">
        {profile.email}
      </p>
    </div>
    <hr className="style-two" />
    <div className="biography">
      <h4> My Biography </h4>
      <p>
        {profile.bio || 'Nil'}
      </p>
    </div>
    <div className="social-details">
      {profile.socialMedia
        ? profile.socialMedia.map(social => (
          <a href={social.url} target="_blank" rel="noopener noreferrer" key={social.name}>
            <FontAwesomeIcon icon={['fab', `${social.name}`]} />
          </a>
        ))
        : (
          <div>
            <FontAwesomeIcon icon={['fab', 'facebook']} />
            <FontAwesomeIcon icon={['fab', 'twitter']} />
            <FontAwesomeIcon icon={['fab', 'linkedin']} />
          </div>
        )
      }
    </div>
  </div>

);

ProfileDetails.propTypes = {
  profile: PropTypes.shape({
    email: PropTypes.string,
    name: PropTypes.string,
    image: PropTypes.string,
    bio: PropTypes.string,
    socialMedia: PropTypes.array,
  }),
  uploadImage: PropTypes.func,
  imageFile: PropTypes.shape({
    current: PropTypes.object,
  }),
  loading: PropTypes.bool,
};
export default ProfileDetails;
