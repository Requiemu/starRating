import './App.css';
import StarRating from './StarRating';
import ColorList from './ColorList';
import colorData from './color-data.json';

function App() {
  return (
    <div className="App">
      <ColorList colors={colorData}/>
    </div>
  );
}

export default App;
