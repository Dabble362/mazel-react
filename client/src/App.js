import { useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';

import WelcomeBox from './components/WelcomeBox';
import LoginBox from './components/LoginBox';
import SignupBox from './components/SignupBox';
import PageNotFound404Box from './components/PageNotFound404Box';
import FeedPage from './components/FeedPage';

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
  // const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userRecipes, setUserRecipes] = useState([
    { name: "Recipe 1" },
    { name: "Recipe 2" },
    { name: "Recipe 3" },
    { name: "Recipe 4" },
  ]);
  const navigate = useNavigate();

  const handleLoginSubmission = (loginData) => {
    if (loginData.email && loginData.password) {
      console.log("Login form submitted with the following:");
      Object.entries(loginData).forEach(([key, value]) => {
        console.log(`${key}: ${value}`);
      });
      // setIsLoggedIn(true);
      navigate('/feed');
    } else {
      console.log("Login form submitted with invalid (missing) data.");
    }
  }

  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={<WelcomeBox />}
        />
        <Route
          path="login"
          element={<LoginBox submitFunction={handleLoginSubmission} />}
        />
        <Route
          path="signup"
          element={<SignupBox />}
        />
        <Route
          path="feed"
          element={<FeedPage
            recipes={userRecipes}
          />}
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
