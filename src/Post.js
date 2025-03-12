import React from 'react';
import PropTypes from 'prop-types'; // Importando o PropTypes para validar as props
import PostHeader from './PostHeader';

import * as styles from './Post.scss';

export default function Post(props) {
  // console.log(props);
  // if(props.post.read){
  //   return <h2>{props.post.title} Já foi lido</h2>
  // }

  return (
      <article 
        className={
          props.post.removed
            ? styles.postDeleted
            : styles.post
        }
      >
        <PostHeader
          onRemove={props.onRemove}
          post={{
            id: props.post.id,
            title: props.post.title,
            read: props.post.read
          }}
        />
        <br />
        <small>{props.post.subtitle}</small>
        <br />
        Media: {props.post.likes / 2}
      </article>
  );
}

Post.propTypes = {
  onRemove: PropTypes.func.isRequired, // Obrigatório e do tipo função
  post: PropTypes.shape({ // Obrigatório e do tipo objeto
    id: PropTypes.number.isRequired, // Opcional e do tipo number
    title: PropTypes.string.isRequired, // Obrigatório e do tipo string
    subtitle: PropTypes.string.isRequired,
    likes: PropTypes.number.isRequired, // Obrigatório e do tipo number
    read: PropTypes.bool.isRequired, // Obrigatório e do tipo boolean
    removed: PropTypes.bool.isRequired, // Obrigatório e do tipo boolean
  }).isRequired,
};
