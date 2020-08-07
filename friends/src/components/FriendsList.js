import React from 'react';

class FriendsList extends React.Component {
    state = {
        Friends: []
    };

    componentDidMount() {
        this.getData();
    }

    getData = () => {
        
    }

    render() {
        return (
            <>
                <h1 style={{ color: 'white' }}>Our Friends</h1>

            </>
        )
    }
};

export default FriendsList;