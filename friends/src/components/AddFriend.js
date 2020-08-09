import React, { useState } from 'react';
import axios from 'axios';
import FriendsCard from './FriendsCard';


const AddFriend = (props) => {
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
        e.preventDefault();
        axios.post('http://localhost:5000/api/friends', newFriend)
            .then(res => {
                console.log('from addFriend: res', res);
                setNewFriend({
                    ...props.friends,
                    name: res.data.name,
                    age: res.data.age,
                    email: res.data.email
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