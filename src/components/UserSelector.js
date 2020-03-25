import React from 'react';

const UserSelector = (props) => {
    return (
        <div>
            <select name="users" id="user-select">
                <option>--Select a user to login--</option>
                <option value="sarahedo">Sarah Edo</option>
                <option value="tylermcginnis">Tyler McGinnis</option>
                <option value="johndoe">John Doe</option>
            </select>
        </div>
    );
};