import React, { useState, useEffect } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';

import FriendsCard from './FriendsCard';
import AddFriend from './AddFriend';

const FriendsList = () => {
    const [friends, setFriends] = useState([]);

    useEffect(() => {
        axiosWithAuth().get('http://localhost:5000/api/friends')
            .then(res => {
                console.log('get success:res', res.data);
                setFriends(
                    res.data
                )
            })
            .catch(err => {
                console.log('get failed: err', err.message)
            })
    }, []);

    return (
        <div>
            <h1 style={{ color: 'white' }}>Our Friends</h1>
            <AddFriend friends={friends} />
            {friends.map((friend, index) => {
                console.log('from map', friend)
                return (
                    <FriendsCard
                        key={index}
                        friends={friend} />
                )
            })}
                
        </div>
    )
}

export default FriendsList;

