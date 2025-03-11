import React, {useContext} from "react";
import PropTypes from "prop-types";
import Button from "./Button";

import styles from './Header.css';

console.log(styles);

import { ThemeContext } from "./ThemeContext";

export default function Header(props) {
  const { onToggleTheme } = useContext(ThemeContext);

  return (
    <div>
      <h1 className="title">{props.title}</h1>
      <Button onClick={onToggleTheme}>
        Mudar tema
      </Button>
      {props.children}
    </div>
  );
}

Header.propTypes = {
  title: PropTypes.string, // Obrigatório e do tipo string
  children: PropTypes.node.isRequired, // Obrigatório e pode ser qualquer tipo de dado
};

Header.defaultProps = { // Define valores padrões para as props, caso não sejam passadas
  title: "Título padrão",
};
