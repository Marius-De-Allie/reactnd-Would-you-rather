import React from 'react';
import { connect } from 'react-redux';

const UserSelector = (props) => {
    
    const onChangeHandler = evt => {
        const value = evt.target.value;
    };
    
    return (
        <React.Fragment>
            <div>
                <label htmlFor="user-select">Login</label>
            </div>
            <select defaultValue="" name="users" id="user-select">
                <option disabled value="">--Select a user to login--</option>
                <option value="sarahedo">Sarah Edo</option>
                <option value="tylermcginnis">Tyler McGinnis</option>
                <option value="johndoe">John Doe</option>
            </select>
        </React.Fragment>
    );
};

export default connect()(UserSelector);