import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Experience from './components/Experience';
import CP from './components/CP';
import Project from './components/Project';
import Teaching from './components/Teaching';
import Home from './components/Home';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const App = () => {
  return (
    <div className="app">
      <Router>
        <div>
          <Navigation />
          <div className="app-container">
            <Switch>
              <Route path="/experience">
                <Experience />
              </Route>
              <Route path="/cp">
                <CP />
              </Route>
              <Route path="/projects">
                <Project />
              </Route>
              <Route path="/teaching">
                <Teaching />
              </Route>
              <Route path="/">
                <Home />
              </Route>
            </Switch>
          </div>
        </div>
      </Router>
    </div>
  );
};

export default App;
