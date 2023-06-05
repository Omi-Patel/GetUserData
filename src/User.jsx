import React, { useState } from 'react';
import UserAPI from './UserAPI';

// import React from 'react'

const User = () => {
    const [user, setUser] = useState(UserAPI);

    return (
        <>
            <div className='userGrid'>
                {user.map((val) => {
                    const { id, email, first_name, last_name, avatar } = val;

                    return (
                        <>

                            <div key={id} className='allData'>
                                <div className='avtar'><img src={avatar} /></div>
                                <div className='details'>
                                    <h1>{first_name + " " + last_name}</h1>
                                    <h3>{email}</h3>
                                </div>

                            </div>

                        </>
                    )
                })}
            </div>
        </>
    );
}

export default User
