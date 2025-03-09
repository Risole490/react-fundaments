import React from "react";
import PropTypes from "prop-types";

export default function Header({ title, children }) {
  return (
    <>
      <h1>{title}</h1>
      {children}
    </>
  );
}

Header.propTypes = {
  title: PropTypes.string, // Obrigatório e do tipo string
  children: PropTypes.node.isRequired, // Obrigatório e pode ser qualquer tipo de dado
};

Header.defaultProps = { // Define valores padrões para as props, caso não sejam passadas
  title: "Título padrão",
};
