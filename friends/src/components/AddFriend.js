import React, { useState } from 'react';
import {axiosWithAuth} from '../utils/axiosWithAuth';
import FriendsCard from './FriendsCard';


const AddFriend = (props) => {
    console.log('from AddFriend: props', props);
    const [newFriend, setNewFriend] = useState({
        name: '',
        age: '',
        email: '',
        id: '',
    });

    const changeHandler = e => {
        setNewFriend({
            ...newFriend,
            [e.target.name]: e.target.value
        });
    };

    const addFriend = e => {
        // e.preventDefault();
        axiosWithAuth().post('http://localhost:5000/api/friends', newFriend)
            .then(res => {
                console.log('from addFriend: res', res);
                setNewFriend({
                    id: Date.now(),
                    name: newFriend.name,
                    age: newFriend.age,
                    email: newFriend.email,
                    ...props.friends
                })
            })
            .catch(err => {
                console.log('from AddFriend: err', err.message)
            });
        return (
            <FriendsCard friend={newFriend} />)
    }

    return (
        <form onSubmit={addFriend} >
            <input
                type='text'
                name='name'
                value={newFriend.name}
                placeholder='Name'
                onChange={changeHandler} />

            <input
                type='text'
                name='age'
                value={newFriend.age}
                placeholder='Age'
                onChange={changeHandler} />

            <input
                type='text'
                name='email'
                value={newFriend.email}
                placeholder='Email'
                onChange={changeHandler} />
            <button className='btn'>Add a Friend</button>
        </form>
    )
}

export default AddFriend;