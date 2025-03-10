import React from 'react';
import PropTypes from 'prop-types'; // Importando o PropTypes para validar as props
import Button from './Button';

export default function PostHeader(props) {
  return (
    <>
      <strong>
        {/* {props.post.read ? <s>{props.post.title}</s> : props.post.title}  */}
        {props.post.read && <s>{props.post.title}</s>}
        {!props.post.read && props.post.title}
      </strong>
      <Button 
        onClick={() => props.onRemove(props.post.id)
        }>
        Remover
      </Button>
    </>  
  )
}

PostHeader.propTypes = {
  onRemove: PropTypes.func.isRequired, // Obrigatório e do tipo função
  post: PropTypes.shape({ // Obrigatório e do tipo objeto
    id: PropTypes.number.isRequired, // Opcional e do tipo number
    title: PropTypes.string.isRequired, // Obrigatório e do tipo string
    read: PropTypes.bool.isRequired, // Obrigatório e do tipo boolean
  }).isRequired,
};
