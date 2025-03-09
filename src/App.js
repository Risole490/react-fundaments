import React, {useState} from 'react'; // O uso do React é obrigatório em todos os arquivos que contém JSX

import Post from './Post';
import Header from './Header';

function App() {
  // useState é um Hook que permite adicionar o estado do React a um componente de função
  // posts é o nome da variável que armazena o estado
  // setPosts é a função que atualiza o estado
  // useState([]) é o valor inicial do estado
  const [posts, setPosts] = useState([
    { id: Math.random(), title: 'Título da notícia 01', subtitle: 'Subtítulo da notícia 01', likes: 20 },
    { id: Math.random(), title: 'Título da notícia 02', subtitle: 'Subtítulo da notícia 02', likes: 10 },
    { id: Math.random(), title: 'Título da notícia 03', subtitle: 'Subtítulo da notícia 03', likes: 50 },
  ]);

  function handleRefresh() { // Função que será executada ao clicar no botão "Atualizar"
    setTimeout(() => {
      setPosts((prevState) => [
        ...prevState,
        {
          id: Math.random(),
          title: `Título da notícia ${prevState.length + 1}`,
          subtitle: `Subtítulo da notícia ${prevState.length + 1}`,
          likes: Math.floor(Math.random() * 100)
        },
      ]);
    }, 2000);

    // Toda vez que formos atualizar o State com base no valor anterior, devemos passar uma função para o setState.
    // Quando usamos o valor do estado diretamente, o React pega o valor do momento em que a gente clicou no botão.
    // Quando passamos a função, o React pega o valor do estado no momento em que a função foi chamada.
  }

  return (
    <> {/* Fragment */}
      <Header>
        <h2>
          Posts da semana
          <button onClick={handleRefresh}>Atualizar</button>
        </h2>
      </Header>

      <hr />

      {posts.map(post => ( // Itera sobre o array de posts
        <Post // Renderiza o componente Post
          key={post.title} // Define uma chave única para o post
          likes={post.likes}
          post={{
            title: post.title,
            subtitle: post.subtitle
          }}
        />
      ))}
    </>
  );
}

export default App;
