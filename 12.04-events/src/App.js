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
    <h1>Task 1</h1>
    <TextEditor/>
    <h1>Task 2</h1>
    <Counter/>
    <h1>Task 3</h1>
    <Theme/>
    <h1>Task 4</h1>
    <PhotoEditor/>
    <h1>Task 5</h1>
    <Form/>
    </>
  );
}

export default App;
