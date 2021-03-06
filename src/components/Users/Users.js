import React from 'react';
import UserItem from './UserItem/UserItem';
import Spinner from '../Spinner/Spinner';
import PropTypes from 'prop-types'
const Users = ({users ,loading}) => {
   
    if(loading){
        return <Spinner></Spinner>
    }
    else{
        return (
            <div style={userStyle}>
              {users.map(user =>(
               <UserItem key = {user.id} user = {user}></UserItem>
              ))}
            </div>
          );
    }
   
  }
const userStyle = {
    display:'grid',
    gridTemplateColumns:'repeat(3, 1fr)',
    gridGap:'1rm',
}
Users.propTypes ={
    users : PropTypes.array.isRequired,
    loading: PropTypes.bool.isRequired
}

export default Users;
