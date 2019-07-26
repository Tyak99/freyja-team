/* eslint-disable no-useless-escape */
export default (data) => {
  const valError = {};
  const urlError = 'Incorrect url format';
  const regex = new RegExp('(https?:\/\/(?:www\.)[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})');
  if (data.twitter && !regex.test(data.twitter)) {
    valError.twitter = urlError;
  }
  if (data.facebook && !regex.test(data.facebook)) {
    valError.facebook = urlError;
  }
  if (data.linkedIn && !regex.test(data.linkedIn)) {
    valError.linkedIn = urlError;
  }
  if (data.phoneNumber && (data.phoneNumber.length < 6)) {
    valError.phoneNumber = 'Phone number should be upto 6 digits';
  }
  if (data.yrsOfExperience && (typeof data.yrsOfExperience !== 'number') && (!Number(data.yrsOfExperience))) {
    valError.yrsOfExperience = 'Years or experience should be a number';
  }
  return valError;
};
