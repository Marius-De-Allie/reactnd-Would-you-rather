import React from 'react';
import { connect } from 'react-redux';
import { handleAddQuestion } from '../actions/shared';
// Import addPoll stylesheet.
import '../styles/components/addPoll.css';

class AddPoll extends React.Component {
    // component based state to hold poll option text values.
    state = {
        optionOne: '',
        optionTwo: ''
    };

    onInputOneChange = (evt) => {
        const optionOne = evt.target.value.trimStart();
        this.setState(() => ({
            optionOne
        }));
    };
    
    onInputTwoChange = (evt) => {
        const optionTwo = evt.target.value.trimStart();
        this.setState(() => ({
            optionTwo
        }));
    };
    
    onFormSubmit = (evt) => {
        evt.preventDefault();
        if(evt.target.elements.one.value === '' || evt.target.elements.two.value === '') {
            alert('Please fill in both fields before submitting.');
        } else {
        // Add question to redux store.
            const optionOneText = this.state.optionOne;
            const optionTwoText = this.state.optionTwo;
            const author = this.props.authedUser;
            // Create question object to pass into action creator.
            const question = {
                author,
                optionOneText,
                optionTwoText
            };
            // Dispatch handleAddQuestion thunk action creator.
            this.props.dispatch(handleAddQuestion(question));
            // Redirect to homepage.
            this.props.history.push('/');
            console.log('New poll submitted.');
        }
    };
    
    renderUI = () => {
        const {optionOne, optionTwo} = this.state;
        const {authedUser} = this.props;
        if(authedUser !== null) {
            return (
                <React.Fragment>
                    <h1 className="header">Add Poll</h1>
                    <div className="ui segment">
                        <h4>Would you Rather</h4>
                        <div>
                            <form className="ui form" onSubmit={this.onFormSubmit}>
                                <div className="field">
                                    <label htmlFor="option-one">Option One</label>
                                    <input 
                                        type="text" 
                                        id="option-one" 
                                        placeholder="Please enter 1st option." 
                                        value={optionOne}
                                        name="one"
                                        onChange={this.onInputOneChange}
                                    />
                                </div>
                                <div className="field">
                                    <label htmlFor="option-two">Option Two</label>
                                    <input 
                                        type="text"
                                        id="option-two"
                                        placeholder="Please enter 2nd option."
                                        value={optionTwo}
                                        name="two"
                                        onChange={this.onInputTwoChange}
                                    />
                                </div>
                                <div style={{display: "flex", justifyContent: "space-between"}} className="addpoll-btn-container">
                                    {optionOne !== '' && optionTwo !== '' ? <p></p> : <p style={{color: 'red'}}>
                                    Please fill in both fields before submitting.
                                    </p>}
                                    <button className="ui blue button" type="submit" disabled={optionOne === '' || optionTwo === ''}>Submit</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </React.Fragment>
            );
        } else {
            return <h3>Please login at the top right to continue to the homepage</h3>
        }
    };

     render() {
         return (
             <div className="ui container">
                {this.renderUI()}
             </div>
         );
     }
};

const mapStateToProps = ({authedUser}) => ({
    authedUser
});

export default connect(mapStateToProps)(AddPoll);