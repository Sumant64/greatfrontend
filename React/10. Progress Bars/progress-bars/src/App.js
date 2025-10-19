import { useState } from "react";


function App() {
  const [add, setAdd] = useState(0);

  const handleClick = () => {
    setAdd((prev) => prev + 1);
  }

  return (
    <div>
      <button onClick={handleClick}>Add</button>
      {
        Array(add).fill(null).map((_, index) => {
          return (
            <>
              <div className="progress">
                <div className="bar"></div>
              </div>
            </>
          )
        })
      }
    </div>
  );
}

export default App;
