'use strict';
import React, { Component } from 'react';
import { connect } from 'react-redux';

class Homepage extends Component {
    render() {
        return (
            <div>
                Home Page
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

// Turn Homepage into a container component connecting it to the redux store via connect().
export default connect()(Homepage);