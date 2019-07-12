import React, { Fragment } from 'react';
import InputField from './input';
import './inputs.scss';

const exampleForm = () => (
  <Fragment>
    <form className="example">
      <InputField type="text" placeholder="Last name" name="lastName" />
    </form>
  </Fragment>
);

export default exampleForm;
