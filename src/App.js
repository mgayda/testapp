import './App.css';
import { DisplayData } from './components/DisplayData';
import { DisplayDataAgain } from './components/DisplayData';
import { DisplayDataFromIds } from './components/DisplayData';

// console.log({displayData});
function App() {
  return (
    <div className="App">
      <DisplayData />
      <DisplayDataAgain />
      <DisplayDataFromIds />
    </div>
  );
}

export default App;
