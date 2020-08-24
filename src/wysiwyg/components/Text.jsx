import React from 'react';
import PropTypes from 'prop-types';

export const Text = ({content}) => {
  return <p>{content}</p>
};

Text.propTypes = {
  content: PropTypes.string.isRequired,
};

Text.contentDefinition = {
  props: [
    {name: 'content', type: 'string'},
  ],
};
