import './styles/index.css';
import Book from './components/Book';
import data from './resources/data.json';

function App() {
  return <Book data={data} />;
}

export default App;
