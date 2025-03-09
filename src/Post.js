import React from 'react';
import PropTypes from 'prop-types'; // Importando o PropTypes para validar as props

export default function Post(props) {
  // console.log(props);
  return (
    <>
      <article>
        <strong>{props.post.title}</strong><br />
        <small>{props.post.subtitle}</small>
        <br />
        media: {props.likes / 2}
      </article>
      <br />
    </>
  );
}

Post.propTypes = {
  likes: PropTypes.number.isRequired, // Obrigatório e do tipo number
  post: PropTypes.shape({ // Obrigatório e do tipo objeto
    title: PropTypes.string.isRequired, // Obrigatório e do tipo string
    subtitle: PropTypes.string.isRequired,
  }).isRequired,
};
