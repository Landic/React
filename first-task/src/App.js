import logo from './logo.svg';
import './App.css';
import Information from './FirstTask/information';
import City from './SecondTask/City';
import Book from './ThirdTask/Book';

function App() {
  return (
    <>
      <h2 class = "task">Task 1</h2>
      <Information/>
      <h2 class="task">Task 2</h2>
      <City/>
      <h2 class="task">Task 3</h2>
      <Book/>
    </>
  );
}

export default App;
