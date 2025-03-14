import React, {useContext} from "react";
import PropTypes from "prop-types";
import Button from "../Button";

import * as styles from "./Header.scss";

import { ThemeContext } from "../../context/ThemeContext";

export default function Header(props) {
  const { onToggleTheme } = useContext(ThemeContext);

  return (
    <div>
      <h1 className={styles.title}>{props.title}</h1>
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
