import React from 'react';
import { connect } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import '../App.css';
// Import handleReceiveQuestions thunk action creator.
import { handleReceiveQuestions } from '../actions/questions';
// Import handleReceiveUsers thunk action creator.
import { handleReceiveUsers } from '../actions/users';
import Homepage from './Homepage';
// Import 404 page component.
import NotfoundPage from './NotfoundPage';

class App extends React.Component {
  componentDidMount() {
    this.props.dispatch(handleReceiveUsers());
    this.props.dispatch(handleReceiveQuestions());
  }
  render() {
    return (
      <div className="App">
        <Switch>
          <Route path="/" exact  component={Homepage} />
          <Route path="/questions/:question_id" />
          <Route path="/add" />
          <Route path="/leaderboard" />
          <Route component={NotfoundPage} />
        </Switch>
      </div>
    );
  }
};

// Which state from the redux store will be passed to his component as props.
const mapStateToProps = (state) => ({
  questions: state.questions,
  users: state.users,
  authedUser: state.authedUser
});

export default connect(mapStateToProps)(App);
