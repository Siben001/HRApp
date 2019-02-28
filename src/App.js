import React, {Component} from 'react';
import {BrowserRouter} from "react-router-dom";
import {Route, Switch} from "react-router";
import MainPage from "./pages/MainPage";
import HrList from "./pages/HrList"

class App extends Component {
  state = {
    Error: null
  };

  componentDidCatch(error, errorInfo) {
    this.setState({
      Error: () => <div>
        <div>error: {JSON.stringify(error)}</div>
        <div>errorInfo: {JSON.stringify(errorInfo)}</div>
      </div>
    })
  }

  render() {
    let Error = this.state.Error;
    return this.state.Error != null ? <Error/> : (
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={MainPage}/>
          <Route exact path='/hr' component={HrList}/>
      </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
