import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header/Header';
import Showcase from './components/Showcase/Showcase';


const App: React.FC = () => {
  return (
    <Router basename={process.env.PUBLIC_URL + '/'}>
      <div className="App">
        <Header />
        <div className="container">
          <Switch>
            <Route exact path="/" component={Showcase} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
