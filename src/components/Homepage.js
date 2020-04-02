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
    // Declare function to conditionally render homepage UI content
    renderHomepage = () => {
        const homepage = this.props.authedUser !== null ? 
        (
            <React.Fragment>
                <NavLink className="questions-btn" to="/" onClick={this.onUnansweredClick}>
                    Un-answered Questions
                </NavLink>
                <NavLink className="questions-btn" to="/" onClick={this.onAnsweredClick}>
                    Answered Questions
                </NavLink>
                {this.state.showAnswered ? <AnsweredList /> : <UnansweredList />}
            </React.Fragment> 
        ) : 
            <React.Fragment>
                <h2>Welcome</h2>
                <h3>Please login at the top right to continue</h3>
            </React.Fragment>;
        return homepage;
    };
    render() {
        return (
            <div>
                {this.renderHomepage()}
            </div>
        );
    }
};

// State from the redux store that will be passed to this component as props.
const mapStateToProps = ({authedUser}) => ({
    authedUser
}); 

// Turn Homepage into a container component connecting it to the redux store via connect().
export default connect(mapStateToProps)(Homepage);

