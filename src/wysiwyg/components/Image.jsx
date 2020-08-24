import React from 'react';
import PropTypes from 'prop-types';

export const Image = ({content}) => {
  return <img src={content} alt=""/>;
};

Image.propTypes = {
  content: PropTypes.string.isRequired,
};

Image.contentDefinition = {
  props: [
    {name: 'content', type: 'string'},
  ],
};
