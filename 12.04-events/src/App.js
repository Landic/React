import logo from './logo.svg';
import './App.css';
import TextEditor from './Components/texteditor/TextEditor';
import Counter from './Components/Counter/Counter';
import Theme from './Components/Theme/Theme';
import PhotoEditor from './Components/PhotoEditor/PhotoEditor';
import Form from './Components/Form/Form';


function App() {
  return (
    <>
    <h3>Task 1</h3>
    <TextEditor/>
    <h3>Task 2</h3>
    <Counter/>
    <h3>Task 3</h3>
    <Theme/>
    <h3>Task 4</h3>
    <PhotoEditor/>
    <h3>Task 5</h3>
    <Form/>
    </>
  );
}

export default App;
