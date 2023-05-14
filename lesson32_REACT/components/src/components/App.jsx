import Post from "./Post";
import Todo from "./Todo";

function App() {
  const title = 'Dog';
  const text = 'Der Ursprung des Wortes Beagle ist nicht eindeutig geklärt. Es ist möglich, dass das Wort vom französischen Begriff begueule abgeleitet wurde, was so viel wie geöffnete Kehle oder lautes Maul bedeutet. Auch wäre der französische Begriff beugler möglich, was brüllen bedeutet, oder ein angeblich alter deutscher Begriff begele, was schelten bzw. schimpfen bedeuten soll. Genauso wäre auch die alte englische, französische oder walisische Bezeichnung beag möglich, was so viel wie klein bedeutet.';
  const image = 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Beagle_1.jpg/800px-Beagle_1.jpg';
  const mark = true;

  const data = {
    title: 'Dog',
    text: 'Der Ursprung des Wortes Beagle ist nicht eindeutig geklärt. Es ist möglich, dass das Wort vom französischen Begriff begueule abgeleitet wurde, was so viel wie geöffnete Kehle oder lautes Maul bedeutet. Auch wäre der französische Begriff beugler möglich, was brüllen bedeutet, oder ein angeblich alter deutscher Begriff begele, was schelten bzw. schimpfen bedeuten soll. Genauso wäre auch die alte englische, französische oder walisische Bezeichnung beag möglich, was so viel wie klein bedeutet.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Beagle_1.jpg/800px-Beagle_1.jpg',
    mark: true,
  }

  return (
    <>
      <Post data={{...data}} />
      <Todo />
    </>
  );
}

export default App;
