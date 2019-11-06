import React,{Fragment} from 'react';
import {BrowserRouter as Router, Route, Switch} from  'react-router-dom';
import Header from './components/Header';
import TopCharts from './components/TopCharts';
import Artists from './components/Artists';

function App () {
    return (
      <Fragment>
        <Router>
          <Header/>
            <Switch>
              <Route exact path="/" component={TopCharts}/>
              <Route exact path="/topCharts" component={TopCharts}/>
              <Route exact path="/artists" component={Artists}/>
            </Switch>
        </Router>
      </Fragment>
    );
}

export default App;
