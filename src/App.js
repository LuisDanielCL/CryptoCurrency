import React from 'react';
import './App.css';
import Detail from './cryptocurrency/Detail';
import Latest from './cryptocurrency/Latest';

import { BrowserRouter, Route, Switch } from "react-router-dom";


//7a6393c8-d447-42c4-a96c-c878293f246a
function App() {

  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route path="/detail">
            <Detail/>
          </Route>
          <Route path="/latest">
            <Latest/>
          </Route>
        </Switch>
      </div>
    </BrowserRouter>

  );
}

export default App;
