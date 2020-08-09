import React from 'react';


const FriendsCard = props => {
    console.log('from Fcard', props)

    return (
        <div>
            <h2 style={{color:'white'}}>Name: {props.name}</h2>
            <h3 style={{color:'white'}}>Age: {props.age}</h3>
            <h3 style={{color:'white'}}>Email: {props.email}</h3>
            <button className='btn'>Delete Friend</button>
        </div>
    )
}

export default FriendsCard;