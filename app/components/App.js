import React, {Component} from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import Popular from './Popular';
import Header from './Header';
import Battle from './Battle';
import Home from './Home';
import Result from './Result';

class App extends Component{
  constructor() {
    super();
  }
  render(){
    return(
      <BrowserRouter>
        <div>
          <Header />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/battle" component={Battle} />
            <Route path="/result" component={Result} />
            <Route exact path="/popular" component={Popular} />
            <Route render={function(){ return <p> URL not found.. </p>}} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;