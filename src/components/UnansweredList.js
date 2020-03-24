import React from 'react';

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