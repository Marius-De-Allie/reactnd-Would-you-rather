import React from 'react';
import { connect } from 'react-redux';
import { setAuthedUser } from '../actions/authedUser';

const UserSelector = (props) => {
    
    const onChangeHandler = evt => {
        const value = evt.target.value;
        // dispatch action creator to set authedUser state in redux store to currently select user.
        props.dispatch(setAuthedUser(value));
    };
    
    return (
        <React.Fragment>
            <div>
                <label htmlFor="user-select">Login</label>
            </div>
            <select 
                defaultValue="" 
                name="users" 
                id="user-select"
                onChange={onChangeHandler}
            >
                <option disabled value="">--Select a user to login--</option>
                <option value="sarahedo">Sarah Edo</option>
                <option value="tylermcginnis">Tyler McGinnis</option>
                <option value="johndoe">John Doe</option>
            </select>
        </React.Fragment>
    );
};

export default connect()(UserSelector);