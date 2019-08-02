import React from 'react';
import { Col, Button } from 'reactstrap';
import PropTypes from 'prop-types';
import Spinner from '../Spinner/Spinner';
import './questions.scss';

const TestQuestions = ({ testQuestions, loading, onChange }) => (
  <section className="sec-question">
    <div className="que-container">
      <h2 className="module"> Test Questions </h2>
      {loading ? (
        <div className="spinner-container">
          <div className="spinner-position">
            <Spinner />
          </div>
        </div>
      ) : (
        ''
      )}

      {testQuestions
        && testQuestions.map(mod => (
          <div key={mod.id}>
            <h2 className="newmodule">
              {' '}
              <span className="mod-name">Module</span>
              {mod.moduleId}
            </h2>
            <Col />
            {mod.questions.map((que, queIndex) => (
              <Col key={que.id} sm={{ size: 'auto' }} className="m-col-adjust">
                <div>
                  <span className="que-num">{queIndex + 1}</span>
                  <span className="que-text">{que.question}</span>
                </div>
                <div>
                  {' '}
                  {que.options.map((name, index) => (
                    <p key={index}>
                      <input
                        className="test-que"
                        type="radio"
                        id={que.id}
                        key={index}
                        value={name}
                        onChange={onChange}
                        name={que.id}
                      />
                      {name}
                    </p>
                  ))}
                </div>
              </Col>
            ))}
          </div>
        ))}
      <div id="psub">
        {' '}
        <Button className="psub">Submit</Button>
      </div>
    </div>
  </section>
);

TestQuestions.propTypes = {
  testQuestions: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
  })),
  loading: PropTypes.bool,
  onChange: PropTypes.func,
};

export default TestQuestions;
