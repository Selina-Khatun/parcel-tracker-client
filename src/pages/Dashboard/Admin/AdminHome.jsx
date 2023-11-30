import React from 'react';
import useUsers from '../../../hooks/useUsers';

const AdminHome = () => {
    // const [review] = useReview();
    const [user]=useUsers();
    console.log(user)
    return (
        <div>
            admin home
            <h1>all users {user.length}</h1>
        </div>
    );
};

export default AdminHome;