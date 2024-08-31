import './App.css';
import Button from './components/Button/Button';
import JornalItem from './components/JornalItem/JornalItem';

// используем функциональный подход
function App() {
  return (
    // должен быть один родительский элемент <>
    <>
      <h1>Title</h1>
      <p>Description</p>
      <Button />
      <JornalItem />
    </>
  );
  // возвращаем jsx разметку, которая потом преобразуется в js код
}

export default App;
