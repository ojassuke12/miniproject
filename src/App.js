import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import {
  unstable_createMuiStrictModeTheme as createMuiTheme,
  responsiveFontSizes,
  ThemeProvider,
} from "@material-ui/core/styles";
import Home from "./pages/home/home";
import AboutUs from "./pages/about/about";
import JoinUs from "./pages/joinUs/joinUs";
import OurTeam from "./pages/ourTeam/OurTeam";
import Alumni from "./pages/alumni/Alumni";
import NavBar from "./components/navBar/navBar";
import Footer from "./components/footer/footer";
import Cs from "./pages/chapters/CS/Cs";
import Ras from "./pages/chapters/RAS/Ras";


import Login from "./components/login/login";
import { auth } from "./config/firebaseConfig";
import { useDispatch } from 'react-redux'
import { login } from "./features/userSlice";
import Events from './pages/events/Events';


let theme = createMuiTheme();
theme = responsiveFontSizes(theme);

function App() {
  const dispatch = useDispatch()

  auth.onAuthStateChanged((user) => {
    console.log(user)
    if (user !== null) {
      dispatch(login({
        email: user.email,
        uid: user.uid,
    }))
    }
  })

  return (
    <div className="App">
      <ThemeProvider theme={theme}>


      <Router>
        <NavBar />
*
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/about">
            <AboutUs />
          </Route>
          <Route path="/Events">
            <Events />
          </Route>
          <Route path="/joinus">
            <JoinUs />
          </Route>
          <Route path="/ourteam">
            <OurTeam />
          </Route>
          <Route path="/alumni">
            <Alumni />
          </Route>
          <Route path="/cs">
            <Cs />
          </Route>
          <Route path="/ras">
            <Ras />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
        <Footer />
      </Router>
      </ThemeProvider>

    </div>
  );
}

export default App;
