import React, { useEffect, useState } from 'react';
import useUsers from '../../../hooks/useUsers';
import { FaTrashAlt, FaUsers } from 'react-icons/fa';
import useAxiosPublic from '../../../hooks/useAxiosPublic';
import swal from 'sweetalert';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { useParams } from 'react-router-dom';

const AllUsers = () => {
    const [user] = useUsers();
    const [users, setUsers] = useState();
    const [remaining, setRemaining] = useState([]);

    const axiosPublic = useAxiosPublic();
    const axiosSecure = useAxiosSecure();
    const { _id } = useParams();
    console.log(_id);
    useEffect(() => {
        setUsers(users);
    }, [users]);

    useEffect(() => {
       
        setUsers(remaining);
    }, [remaining]);
    const handleMakeAdmin = item => {
        console.log(item);
        axiosSecure.patch(`/users/admin/${item._id}`)
            .then(res => {
                console.log(res.data)
                if (res.data.modifiedCount > 0) {
                    // reftch();
                    swal(`${item.name} is an admin`)
                }
            })
    }

    const handleDeleteUser = item => {
        const proceed = swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover this imaginary file!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
          })

          if (proceed){
            fetch(`https://parcel-tracker-server.vercel.app/users/${item._id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount > 0) {
                       swal('Deleted successfully');
                        const updatedUsers = user.filter(u => u._id === item?._id);
                        setRemaining(updatedUsers);
                        // setUsers(updatedUsers);
                    }
                })
                .catch(error => console.error('Error deleting user:', error));
            
          }

       
    };

    return (
        <div>
            <div className="flex justify-evenly my-4">
                <h2 className="text-3xl">All Users</h2>
                <h2 className="text-3xl">Total Users: {user?.length}</h2>
            </div>
            <div className="overflow-x-auto">
                <table className="table table-zebra w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            user.map((item, index) => <tr key={item._id}>
                                <th>{index + 1}</th>
                                <td>{item.name}</td>
                                <td>{item.email}</td>
                                <td>
                                    {item.role === 'admin' ? 'Admin' : <button
                                        onClick={() => handleMakeAdmin(item)}
                                        className="btn btn-lg bg-sky-500">
                                        <FaUsers className="text-white 
                                        text-2xl"></FaUsers>
                                    </button>}
                                </td>
                                <td>
                                    <button
                                        onClick={() => handleDeleteUser(item)}
                                        className="btn btn-ghost btn-lg">
                                        <FaTrashAlt className="text-sky-600"></FaTrashAlt>
                                    </button>
                                </td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default AllUsers;
