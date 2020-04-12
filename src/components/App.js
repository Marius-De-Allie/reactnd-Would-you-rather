import React from 'react';
import { connect } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import '../styles/base/App.css';
import getInitialData from  '../actions/shared';
import Homepage from './Homepage';
// Import 404 page component.
import NotfoundPage from './NotfoundPage';
import PollDetails from './PollDetails';
import Nav from './Nav';
import Leaderboard from './Leaderboard';
import AddPoll from './AddPoll';

class App extends React.Component {
  componentDidMount() {
    // Load intial data into redux store.
    this.props.dispatch(getInitialData());
  }
  render() {
    return (
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/" exact  component={Homepage} />
          <Route path="/questions/:question_id" component={PollDetails} />
          <Route path="/add" exact component={AddPoll} />
          <Route path="/leaderboard" exact component={Leaderboard} />
          <Route component={NotfoundPage} />
        </Switch>
      </div>
    );
  }
};

export default connect()(App);
