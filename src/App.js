import './App.css';
import React, {useState} from 'react';
import StarRating from './StarRating';
import ColorList from './ColorList';
import colorData from './color-data.json';

function App() {
  const [colors, setColors] = useState(colorData)
  const onDeleteColor = (id) => {
    const newColors = colors.filter(color => color.id !== id);
    setColors(newColors);
  } 
  const onRate = (id, rating) => {
    console.log(id, rating)
    const newColors = colors.map(color => {
      return color.id === id ? {...color, rating} : color
    });
    setColors(newColors);
  }
  return (
    <div className="App">
      <ColorList colors={colors} onDeleteColor={onDeleteColor} onRate={onRate}/>
    </div>
  );
}

export default App;
