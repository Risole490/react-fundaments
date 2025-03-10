# React Fundaments

Este projeto é uma aplicação React que demonstra os fundamentos do React, incluindo componentes, props, estado e hooks.

## Estrutura do Projeto

- `public/index.html`: Arquivo HTML principal.
- `src/App.js`: Componente principal da aplicação.
- `src/Header.js`: Componente de cabeçalho.
- `src/Post.js`: Componente de post.
- `src/ThemeContext.js`: Contexto de tema para gerenciar o tema da aplicação.
- `src/index.js`: Ponto de entrada da aplicação.

## Contexto de Tema

O arquivo `src/ThemeContext.js` define um contexto para gerenciar o tema da aplicação (claro ou escuro).

### Exemplo de Uso

```javascript
import React, { useContext } from 'react';
import { ThemeContext } from './ThemeContext';

function MyComponent() {
  const { theme, onToggleTheme } = useContext(ThemeContext);

  return (
    <div style={{ background: theme === 'dark' ? '#333' : '#FFF', color: theme === 'dark' ? '#FFF' : '#000' }}>
      <p>O tema atual é {theme}</p>
      <button onClick={onToggleTheme}>Alternar Tema</button>
    </div>
  );
}

```

## Scripts Disponíveis

No diretório do projeto, você pode executar:

### `yarn build`

Compila a aplicação para produção na pasta `build`.

### `yarn dev`

Inicia o servidor de desenvolvimento.

## Licença

Este projeto está licenciado sob a Licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.
