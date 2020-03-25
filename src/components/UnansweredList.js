import React from 'react';
import { connect } from 'react-redux';

const UnansweredList = () => (
    <div>
        <button><h2>Unanswered Questions</h2></button>
        <ul>
            Question Items
        </ul>
    </div>
);

const mapStateToProps = (state) => ({
    questions: state.questions,
    users: state.users,
    authedUser: state.authedUser
});

export default connect(mapStateToProps)(UnansweredList);