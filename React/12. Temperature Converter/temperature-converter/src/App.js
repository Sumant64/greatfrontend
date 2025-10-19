import { useState } from "react";


function format(number) {
  // show 4 d.p. if no has more than 4 decimal places
  return /\.\d{5}/.test(number) ? Number(number).toFixed(4) : number;
}

function App() {
  const [celsius, setCelsius] = useState('');
  const [fahrenheit, setFahrenheit] = useState('');

  const convert = (value, setDestination, calculateValue) => {
    const numericValue = Number(value);
    const isValid = !Number.isNaN(numericValue) && Boolean(value);

    setDestination(
      isValid ? format(calculateValue(numericValue)) : ''
    )
  }


  return (
    <>
      <div>
        <div className="temperature-converter">
          <label className="temperature-converter-column">
            <input 
              className="temperature-converter-column-top-row"
              type="number"
              value={celsius}
              onChange={(event) => {
                const newValue = event.target.value;
                setCelsius(newValue);
                convert(
                  newValue,
                  setFahrenheit,
                  (value) => (value * 9) / 5 + 32
                );
              }}
            />
            <div className="temperature-converter-column-bottom-row">
              Celsius
            </div>
          </label>

          {/* equal */}
          <div className="temperature-converter-column">
              <div className="temperature-converter-column-top-row">
                =
              </div>
          </div>

          {/* use a label for better ally. */}
          <label className="temperature-converter-column">
             <input 
              className="temperature-converter-column-top-row"
              type="number"
              value={fahrenheit}
              onChange={(event) => {
                const newValue = event.target.value;
                setFahrenheit(newValue);
                convert(
                  newValue,
                  setCelsius,
                  (value) => ((value - 32) * 5) / 9
                )
              }}
             />
             <div className="temperature-converter-column-bottom-row">
              Fahrenheit
             </div>
          </label>
        </div>
      </div>
    </>
  );
}

export default App;
