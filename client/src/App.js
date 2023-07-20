// import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';

import WelcomeBox from './components/WelcomeBox';
import LoginBox from './components/LoginBox';
import SignupBox from './components/SignupBox';
import PageNotFound404Box from './components/PageNotFound404Box';

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
          element={<PageNotFound404Box />}
        />
      </Routes>
    </div >
  );
}

export default App;
