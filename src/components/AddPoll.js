import React from 'react';
import { connect } from 'react-redux';

class AddPoll extends React.Component {
    // component based state to hold poll option text values.
    state = {
        optionOne: '',
        optionTwo: ''
    };
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