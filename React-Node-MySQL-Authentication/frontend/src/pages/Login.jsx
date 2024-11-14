import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Login.css'; // Ensure to create this CSS file and import it

const Login = () => {
    const [values, setValues] = useState({
        email: '',
        password: ''
    });
    const navigate = useNavigate();

    const handleChanges = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
    };

    const handleSumbit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:3000/auth/login', values);
            if (response.status === 201) {
                localStorage.setItem('token', response.data.token);
                navigate('/');
            }
        } catch (err) {
            console.log(err.message);
        }
    };

    return (
        <div className="container">
            <div className="form-container">
                <h2 className="form-title">Login</h2>
                <form onSubmit={handleSumbit}>
                    <div className="form-group">
                        <label htmlFor="email" className="form-label">Email</label>
                        <input type="email" placeholder="Enter Email" className="form-input" name="email" onChange={handleChanges} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password" className="form-label">Password</label>
                        <input type="password" placeholder="Enter Password" className="form-input" name="password" onChange={handleChanges} />
                    </div>
                    <button className="submit-button">Submit</button>
                </form>
                <div className="form-footer">
                    <span>Don't Have Account?</span>
                    <Link to='/register' className="link">Signup</Link>
                </div>
            </div>
        </div>
    );
};

export default Login;
