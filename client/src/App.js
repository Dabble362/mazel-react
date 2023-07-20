// import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';

import WelcomeBox from './components/WelcomeBox';
import LoginBox from './components/LoginBox';
import SignupBox from './components/SignupBox';

function App() {
  // Keeping this here for now as an example of how to talk to the server

  // const [serverResponse, setServerResponse] = useState(null);

  // useEffect(() => {
  //   fetch('http://localhost:2500/test')
  //     .then(res => res.json())
  //     .then(data => {
  //       console.log(data.message);
  //       setServerResponse(`${data.message} at ${data.currentTime}`);
  //     })

  // }, [])

  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={<WelcomeBox />}
        />
        <Route
          path="login"
          element={<LoginBox />}
        />
        <Route
          path="signup"
          element={<SignupBox />}
        />
        <Route
          path="*"
          element={<h1>404</h1>} // TODO: replace with actual 404 page
        />
      </Routes>
    </div >
  );
}

export default App;
