
import React from 'react';
import ProduceList from './components/ProduceList';
import MarketScheduleList from './components/MarketScheduleList';
import { Switch, Route } from 'react-router-dom';
import Header from './components/Header'
import './App.css';

function App() {
  return (
    <div>
    <Header/>
    <Switch>
      <Route exact path='/marketschedulelist' component={MarketScheduleList} />
      <Route exact path='/producelist' component={ProduceList} />
    </Switch>
    </div>
  );
}

export default App;
