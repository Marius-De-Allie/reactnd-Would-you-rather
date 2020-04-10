import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import UnansweredList from './UnansweredList';
import AnsweredList from './AnsweredList';
import '../styles/components/homePage.css';

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
                <div id="buttons-container">
                    {this.state.showAnswered ? <button className="ui button" to="/" onClick={this.onUnansweredClick}>
                    Click here to view Un-answered Questions
                    </button> :
                    <button className="ui blue button" to="/" onClick={this.onAnsweredClick}>
                        Answered Questions
                    </button>
                    }
                </div>
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
            <div className="ui container">
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

// div#buttons-container {
//     display: flex;
//     justify-content: flex-end;
// }