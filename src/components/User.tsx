import React from 'react'
interface IUser{
    name: string;
    email: string;
  }

interface Props {
    user: IUser
}


const User: React.FC<Props> = ({user}) => {
    return (
        <>
        <strong>Name: {user.name}</strong> 
        <strong>Email: {user.email}</strong> 
        </>
    )
}


export default User;