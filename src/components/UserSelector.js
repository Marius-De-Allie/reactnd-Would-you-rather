import React from 'react';

const UserSelector = (props) => {
    
    const onChangeHandler = evt => {
        const value = evt.target.value;
    };
    
    return (
        <React.Fragment>
            <div>
                <Label htmlFor="user-select">Login</Label>
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

export default UserSelector;