import { useState, useEffect } from 'react';
import './App.css';

import LoginBox from './components/LoginBox';

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
      <LoginBox />
    </div>
  );
}

export default App;
