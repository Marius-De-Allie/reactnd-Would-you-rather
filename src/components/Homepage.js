'use strict';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import UnansweredList from './UnansweredList';

class Homepage extends Component {
    state = {
        showAnswered: false
    };
    render() {
        return (
            <div>
                {this.state.showAnswered ? <AnsweredList /> : <UnansweredList />}
            </div>
        );
    }
};

// Which state from the redux store will be passed to this component as props.
const mapStateToProps = (state) => ({
    questionIds: Object.keys(state.questions),
    users: state.users,
    authedUser: state.authedUser
}); 

// Turn Homepage into a container component connecting it to the redux store via connect().
export default connect(mapStateToProps)(Homepage);