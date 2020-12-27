import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";
import Navbar from "./Navbar";
import Experience from "./Experience";
import CP from "./CP";
import Project from "./Project";
import Teaching from "./Teaching";
import Home from "./Home";

const App = () => {
    return (
        <div>          
          <Router>            
            <div>
              <Navbar />              
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
          </Router>            
        </div>
    )
}

export default App;
