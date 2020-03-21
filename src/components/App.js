import React from 'react';
import { connect } from 'react-redux';
import '../App.css';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        App Component
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

export default connect(mapStateToProps, mapDispatchToProps)(App);
