import React from 'react';
import PropTypes from 'prop-types';
import {Image} from './Image';

export const Card = ({header, imageUrl, content}) => {
  return (
    <section className="card--container">
      <h4>{header}</h4>
      {imageUrl && <Image content={imageUrl}/>}
      <p>{content}</p>
    </section>
  );
};

Card.propTypes = {
  header: PropTypes.string.isRequired,
  imageUrl: PropTypes.string,
  content: PropTypes.string.isRequired,
}

Card.defaultProps = {
  imageUrl: undefined,
};

Card.contentDefinition = {
  props: [
    {name: 'header', type: 'string'},
    {name: 'imageUrl', type: 'string'},
    {name: 'content', type: 'string'},
  ],
};
