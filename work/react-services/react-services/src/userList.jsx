import React from 'react';
import User from './user';
import './chat.css';

const UserList=({users})=>(

        <ul className="users">
            {
            Object.values(users).map(user=>{
                return <User user={user}/>
            })
      }
      </ul>


);

export default UserList;