import React, { Component } from 'react';
import './App.css';
// import HomePage from './pages/HomePage/HomePage';
import routes from './routes/routes';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <HomePage />
          <div>    
              <Switch>
              {this.showContent(routes)}
              </Switch>       
          </div>
        </Router>
      </div>

    );
  }
  showContent = (routes) => {
    var result = null;
    if (routes.length > 0) {
      result = routes.map((route, index) => {
        return (
          <Route
            key={index}
            path={route.path}
            exact={route.exact}
            component={route.main}
          />
        );
      });
    }
    return result;
  }
}

export default App;
