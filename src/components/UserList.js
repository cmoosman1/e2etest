import React from 'react';

const UserList = ({ data }) => (
    <ul data-testid="userList">
        {data &&
            <li>You submitted: ${data}</li>
        }
    </ul>
);

export default UserList;