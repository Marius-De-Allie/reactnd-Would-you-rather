import React from 'react';
import { connect } from 'react-redux';
import { setAuthedUser } from '../actions/authedUser';

const UserSelector = ({setAuthedUser}) => {
    const onChangeHandler = evt => {
        const value = evt.target.value;
        // dispatch action creator to set authedUser state in redux store to currently selected user.
        setAuthedUser(value);
    };
    
    return (
        <React.Fragment>
            <div className="ui item">
                <label htmlFor="user-select">Login</label>
            </div>
            <select
                className="ui selection dropdown" 
                defaultValue="" 
                name="users" 
                id="user-select"
                onChange={onChangeHandler}
            >
                <option disabled value="">--Select a user to login--</option>
                <option value="janedoe">Jane Doe</option>
                <option value="tylermcginnis">Tyler McGinnis</option>
                <option value="johndoe">John Doe</option>
            </select>
        </React.Fragment>
    );
};

// Declare MapDispatchToProps object for setAuthedUser action creator.
const mapDispatchToProps = {
    setAuthedUser
};

export default connect(null, mapDispatchToProps)(UserSelector);

