import React from 'react';
import { useContext } from 'react';
import UserContext from '../MiniContext/UserContext';

const Profile = () =>  {
  const {user} = useContext(UserContext)
  
  if (!user) return <div>please login</div>

  return <div>Welcome {user.userName}</div>
}

export default Profile