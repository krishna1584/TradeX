import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Register.css'; // Ensure to create this CSS file and import it

const Register = () => {
    const [values, setValues] = useState({
        username: '',
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
            const response = await axios.post('http://localhost:3000/auth/register', values);
            if (response.status === 201) {
                navigate('/login');
            }
        } catch (err) {
            console.log(err.message);
        }
    };

    return (
        
        <div className="container">
            <div className="form-container">
                <h2 className="form-title">Register</h2>
                <form onSubmit={handleSumbit}>
                    <div className="form-group">
                        <label htmlFor="username" className="form-label">Username</label>
                        <input type="text" placeholder="Enter Username" className="form-input" name="username" onChange={handleChanges} />
                    </div>
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
                    <span>Already have account?</span>
                    <Link to='/login' className="link">Login</Link>
                </div>
            </div>
        </div>
    );
};

export default Register;