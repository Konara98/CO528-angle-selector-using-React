import React, { useState } from 'react';
import './App.css';

function App() {
  // State to keep track of the selected angle value
  const [angle, setAngle] = useState(0);

  // Handle changes in the text input box
  const handleInputChange = (e) => {
    // Ensure the value stays within 0 to 360 range
    const value = Math.max(0, Math.min(360, Number(e.target.value)));
    setAngle(value);
  };

  // Handle changes in the slider
  const handleSliderChange = (e) => {
    // Update the angle state based on the slider's value
    setAngle(Number(e.target.value));
  };

  // Handle changes in the radio buttons
  const handleRadioChange = (e) => {
    // Update the angle state based on the selected radio button's value
    setAngle(Number(e.target.value));
  };

  return (
    <div className="container">
      {/* Title of the tool */}
      <h1>Angle Selector Tool</h1>

      {/* Text input for angle value */}
      <div className="control">
        <label htmlFor="angleInput">Angle:</label>
        <input
          type="number"
          id="angleInput"
          min="0"
          max="360"
          value={angle}
          onChange={handleInputChange}
        />
      </div>

      {/* Slider input for angle value */}
      <div className="control">
        <input
          type="range"
          id="angleSlider"
          min="0"
          max="360"
          value={angle}
          onChange={handleSliderChange}
        />
      </div>

      {/* Radio buttons for common angle values */}
      <div className="control">
        <label>Common Values:</label>
        <label>
          <input
            type="radio"
            name="angleRadio"
            value="0"
            checked={angle === 0}
            onChange={handleRadioChange}
          /> 0
        </label>
        <label>
          <input
            type="radio"
            name="angleRadio"
            value="45"
            checked={angle === 45}
            onChange={handleRadioChange}
          /> 45
        </label>
        <label>
          <input
            type="radio"
            name="angleRadio"
            value="60"
            checked={angle === 60}
            onChange={handleRadioChange}
          /> 60
        </label>
        <label>
          <input
            type="radio"
            name="angleRadio"
            value="90"
            checked={angle === 90}
            onChange={handleRadioChange}
          /> 90
        </label>
        <label>
          <input
            type="radio"
            name="angleRadio"
            value="180"
            checked={angle === 180}
            onChange={handleRadioChange}
          /> 180
        </label>
      </div>
    </div>
  );
}

export default App;
