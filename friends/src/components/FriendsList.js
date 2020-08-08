import React from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';

class FriendsList extends React.Component {
    constructor() {
        super();
        this.state = {
            Friends: []
        };

    }


    componentDidMount() {
        this.getData();
    }

    getData = () => {
        axiosWithAuth().get('http://localhost:5000/api/friends')
            .then(res => console.log('getData success: res', res))
        // this.setState({
        //     Friends: [{
        //         id: this.state.data.id,
        //         name: this.state.data.name,
        //         age: this.state.data.age,
        //         email: this.state.data.email
        //     }]
        // })
            .catch(err => console.log('getData fail: err', err.message));
    };

    render() {
        return (
            <>
                <h1 style={{ color: 'white' }}>Our Friends</h1>
                <button className='btn'>Add Friend</button>
                {this.state.Friends.map(friend => (
                    <div style={{ color: 'white', textAlign: 'center' }}>
                        <h2>{friend.data.name}</h2>
                        <h3>{friend.data.age}</h3>
                        <h2>{friend.data.email}</h2>
                        <button className='btn'>Delete Friend</button>
                    </div>
                )
                )}

            </>
        )
    }
};

export default FriendsList;