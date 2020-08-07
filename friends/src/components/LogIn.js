import React from 'react';
import axios from 'axios';



class LogIn extends React.Component {
    state = {
        credentials: {
            username: '',
            password: ''
        }
    };

    handleChange = e => {
        this.setState({
            credentials: {
                ...this.state.credentials,
                [e.target.name]: e.target.value
            }
        });
    };

    login = e => {
        e.preventDefault();
    };

    render() {
        return (
            <div>
                <form onSubmit={this.login}>
                    <input
                        type='text'
                        name='username'
                        value={this.state.credentials.username}
                        placeholder='UserName'
                        onChange={this.handleChange}
                    />

                    <input
                        type='text'
                        name='password'
                        value={this.state.credentials.password}
                        placeholder='PassWord'
                        onChange={this.handleChange}
                    />

                    <button className='btn'>Log In</button>
                </form >
            </div>
        )
    }
};

export default LogIn;