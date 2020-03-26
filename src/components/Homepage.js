'use strict';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import UnansweredList from './UnansweredList';
import AnsweredList from './AnsweredList';

class Homepage extends Component {
    state = {
        showAnswered: false
    };
    onUnansweredClick = () => {
        this.setState(() => ({
            showAnswered: false
        }));
    };
    onAnsweredClick = () => {
        this.setState(() => ({
            showAnswered: true
        }));
    };
    render() {
        return (
            <div>
            <NavLink className="questions-btn" to="/" onClick={this.onUnansweredClick}>
                Un-answered Questions
            </NavLink>
            <NavLink className="questions-btn" to="/" onClick={this.onAnsweredClick}>
                Answered Questions
            </NavLink>
                {this.state.showAnswered ? <AnsweredList /> : <UnansweredList />}
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

