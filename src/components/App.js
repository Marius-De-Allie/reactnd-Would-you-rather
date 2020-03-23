import React from 'react';
import { connect } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import '../App.css';
// Import handleReceiveQuestions thunk action creator.
import { handleReceiveQuestions } from '../actions/questions';
// Import handleReceiveUsers thunk action creator.
import { handleReceiveUsers } from '../actions/users';
import Homepage from './Homepage';

class App extends React.Component {
  componentDidMount() {
    this.props.dispatch(handleReceiveUsers());
    this.props.dispatch(handleReceiveQuestions());
  }
  render() {
    return (
      <div className="App">
        App Component
        <Switch>
          <Route path="/" exact />
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
