import React from 'react';
import { connect } from 'react-redux';
import { handleAddQuestion } from '../actions/shared';

class AddPoll extends React.Component {
    // component based state to hold poll option text values.
    state = {
        optionOne: '',
        optionTwo: ''
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
        }
        
    }
    
    renderUI = () => {
        const {optionOne, optionTwo} = this.state;
        const {authedUser} = this.props;
        if(authedUser !== null) {
            return (
                <React.Fragment>
                    <h3>Would you Rather</h3>
                    <h4>Add Poll</h4>
                    <div>
                        <form>
                            <div>
                                <input 
                                    type="text" 
                                    id="option-one" 
                                    placeholder="Enter 1st option." 
                                    value={optionOne}
                                    name="one"
                                />
                                <label htmlFor="option-one">Option One</label>
                            </div>
                            <div>
                                <input 
                                    type="text"
                                    id="option-two"
                                    placeholder="Enter 2nd option."
                                    value={optionTwo}
                                    name="two"
                                />
                                <label htmlFor="option-two">Option Two</label>
                            </div>
                            <input type="submit" disabled={optionOne === '' || optionTwo === ''} />
                            {optionOne !== '' && optionTwo !== '' ? undefined : <p style={{color: 'red'}}>
                            Please fill in both fields before submitting.
                            </p>}
                        </form>
                    </div>
                </React.Fragment>
            );
        }
    }
     render() {
         return (
             <div>
                
             </div>
         );
     }
    

};

const mapStateToProps = ({authedUser}) => ({
    authedUser
});

export default connect(mapStateToProps)(AddPoll);