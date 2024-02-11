import React, { useState } from 'react';
import './App.css';
import { ChromePicker } from 'react-color'; 
function App() {
  const [selectedColor, setSelectedColor] = useState("#ffffff"); 
  const [savedColors, setSavedColors] = useState([]); // Kullanıcının kaydettiği renklerin listesi


  const handleColorChange = (color) => {
    setSelectedColor(color.hex);
    document.body.style.backgroundColor = color.hex;
  };
  const saveColor = () => {
      setSavedColors([...savedColors, selectedColor]); 
   
  };

  return (
    <div className="App ">
    
      <ChromePicker color={selectedColor} onChange={handleColorChange} />
      <button className='mt-3 save-button mb-3'  onClick={saveColor}>Renk Kaydet</button>

<div>
  <h4 className='kayRenkler_btn mb-5 ' >Kaydedilen Renkler</h4>
  <ul>
    {savedColors.map((color, index) => (
      <li key={index} style={{ backgroundColor: color, padding: '5px', margin: '5px' }}>{color}</li>
    ))}
  </ul>
</div>
  </div>
  );
}

export default App;
