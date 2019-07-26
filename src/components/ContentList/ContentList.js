import React from 'react';
import { arrayOf, object } from 'prop-types';
import './contentList.scss';

const ContentList = ({ contents }) => contents.map((content) => (
  <div key={content.id} className="content-item">
    <a href={content.link}>
      <p>{content.name}</p>
    </a>
  </div>)
)

ContentList.propTypes = {
  contents: arrayOf(object),
};

export default ContentList;
