import axios from 'axios';
import React from 'react';
import { useQuery } from 'react-query';
import './RQFetching.css'

const RQFetching = () => {

    const fetchUsers = () => {return  axios.get('https://jsonplaceholder.typicode.com/users')}
    
    const { isLoading, error, data } = useQuery('users', fetchUsers)
    
    // console.log("data",data?.data);
    return (
        <>
            <h1>USER LIST</h1>
            <div>
                {isLoading && <h1>Loading...</h1>}
                {error && <h1>{error.message}</h1>}
                {<table>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Email</th>
                    </tr>
                   { data?.data.map(user => (
                    <tr>
                        <td>{user.id}</td>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                    </tr>
                    ))}
                </table>
                }
            </div>
        </>
    )

}
export default RQFetching;
