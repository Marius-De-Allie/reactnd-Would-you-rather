import React from 'react';
import { connect } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import '../App.css';
// Import handleReceiveQuestions thunk action creator.
import { handleReceiveQuestions } from '../actions/questions';
// Import handleReceiveUsers thunk action creator.
import { handleReceiveUsers } from '../actions/users';
import { setAuthedUser } from '../actions/authedUser';
import Homepage from './Homepage';
// Import 404 page component.
import NotfoundPage from './NotfoundPage';
import PollDetails from './PollDetails';
import Nav from './Nav';
import Leaderboard from './Leaderboard';
import LeaderboardItem from './LeaderboardItem';

class App extends React.Component {
  componentDidMount() {
    this.props.dispatch(handleReceiveUsers());
    this.props.dispatch(handleReceiveQuestions());
    // this.props.dispatch(setAuthedUser('sarahedo'));
  }
  render() {
    return (
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/" exact  component={Homepage} />
          <Route path="/questions/:question_id" component={PollDetails} />
          <Route path="/add" />
          <Route path="/leaderboard" exact component={LeaderboardItem} />
          <Route component={NotfoundPage} />
        </Switch>
      </div>
    );
  }
};

export default connect()(App);
