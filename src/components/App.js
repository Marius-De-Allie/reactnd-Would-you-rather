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
import QuestionForm from './QuestionForm';
import PollDetails from './PollDetails';

class App extends React.Component {
  componentDidMount() {
    this.props.dispatch(handleReceiveUsers());
    this.props.dispatch(handleReceiveQuestions());
    this.props.dispatch(setAuthedUser('sarahedo'));
  }
  render() {
    return (
      <div className="App">
        <Switch>
          <Route path="/" exact  component={!this.props.loading && Homepage} />
          <Route path="/questions/:question_id" component={QuestionForm} />
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
  authedUser: state.authedUser,
  loading: state.authedUser === null
});

export default connect(mapStateToProps)(App);
