import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { getTest } from '../../../store/actions/testActions';
import Questions from '../../components/Questions/Questions';
import Navbar from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

class TestQuestions extends React.Component {
  componentDidMount() {
    const { getModuleTest, match } = this.props;
    const { moduleId } = match.params;
    getModuleTest(moduleId);
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  render() {
    const { test, isLoading } = this.props;
    return (
      <Fragment>
        <Navbar />
        <section className="sec-question">
          <div className="que-container">
            <Questions
              testQuestions={test}
              loading={isLoading}
              onChange={e => this.handleChange(e)}
            />
          </div>
        </section>
        <Footer />
      </Fragment>
    );
  }
}

TestQuestions.propTypes = {
  getModuleTest: PropTypes.func.isRequired,
  test: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
  })),
  isLoading: PropTypes.bool,
  match: PropTypes.shape({
    params: PropTypes.shape({
      moduleId: PropTypes.string.isRequired,
    }),
  }),
};
const mapStateToProps = state => ({
  test: state.test.data,
  isLoading: state.test.isLoading,
  moduleId: state.modules.singleModule.moduleId,
});

export const mapDispatchToProps = dispatch => bindActionCreators(
  {
    getModuleTest: getTest,
  },
  dispatch,
);
export { TestQuestions };
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withRouter(TestQuestions));
