import { useState, useEffect } from 'react';
import './App.css';

function App() {

  const [serverResponse, setServerResponse] = useState(null);

  useEffect(() => {
    fetch('http://localhost:2500/test')
      .then(res => res.json())
      .then(data => {
        console.log(data.message);
        setServerResponse(`${data.message} at ${data.currentTime}`);
      })

  }, [])

  return (
    <div className="App">
      <p>{serverResponse}</p>
    </div>
  );
}

export default App;
