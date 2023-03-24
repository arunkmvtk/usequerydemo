import axios from 'axios';
import React from 'react';
import { useQuery } from 'react-query';

const RQFetching = () => {

    const { isLoading, error, data } = useQuery('users', () =>
        axios.get('https://jsonplaceholder.typicode.com/users')
    )
    // console.log("data",data?.data);
    return (
        <>
            <h1>USER LIST</h1>
            <div>
                {isLoading && <h1>Loading...</h1>}
                {error && <h1>{error.message}</h1>}
                {
                    data?.data.map(user => (
                        <div key={user.id}>
                            {user.name}
                        </div>
                    ))
                }
            </div>
        </>
    )

}
export default RQFetching;
