import React, { useState } from 'react';
import logoBME from "../../../assets/images/logoNganh.png";
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
const UserLogin = () => {
    const nav = useNavigate();
    const [userLogin, setUserLogin] = useState({
        email: '',
        password: ''
    });

    const handleLogin = (event) => {
        setUserLogin({
            ...userLogin,
            [event.target.name]: event.target.value
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData();
        formData.append('email', userLogin.email);
        formData.append('password', userLogin.password);
        console.log(formData);
        try {
            axios.post('https://project-final-h1c2.onrender.com/doctor-login/', formData)
                .then((res) => {
                    if (res.data.bool === true) {
                        // Login successful, perform desired action
                        console.log('Login successful');
                        localStorage.setItem('userLoginStatus', true)
                        nav('/')
                    } else {
                        // Login failed, display error message
                        console.log('Login failed');
                    }
                })
        } catch (error) {
            console.log('Error: ' + error);
        }
    };
    return (
        <div className='login flex flex-wrap items-center justify-between bg-gray-50'>
            <div className='xl:max-w-7xl mx-auto w-[350px] md:w-1/3'>
                <div className="relative min-w-0 break-words bg-white my-8 shadow-lg rounded min-h-screen ">
                    <div className='flex-auto p-6 space-y-4 md:space-y-6 sm:p-8'>
                        <img className='w-[80px] h-[80px] md:w-[110px] md:h-[110px] m-auto my-2' src={logoBME} alt="logo" />
                        <p className="text-base font-medium md:text-xl md:font-bold text-gray-900 text-center">Vui lòng đăng nhập tài khoản</p>
                        <div className="formSocial">
                            <form className="formLogin">
                                <div className='mb-2'>
                                    <label className="block text-sm font-medium text-gray-900">Email</label>
                                    <input
                                        className='my-2 text-sm md:text-base h-8 md:h-10 rounded-3xl px-3 truncate border-solid border w-full bg-gray-50'
                                        name="email"
                                        type='email'
                                        placeholder="ten@gmail.com"
                                        value={userLogin.email}
                                        onChange={handleLogin}
                                        required

                                    />
                                </div>
                                <div className='mb-2'>
                                    <label className="block text-sm font-medium text-gray-900">Mật khẩu</label>
                                    <input
                                        className='my-2 text-sm md:text-base h-8 md:h-10 rounded-3xl px-3 truncate border-solid border w-full bg-gray-50'
                                        name='password'
                                        type="password" 
                                        placeholder="••••••••"
                                        value={userLogin.password}
                                        onChange={handleLogin}
                                    />
                                </div>
                                <div className='text-center my-4'>
                                    <button type="submit" onClick={handleSubmit} className='w-full bg-indigo-900 text-white text-sm font-medium px-3 py-2 rounded-3xl text-lg hover:opacity-90'>Đăng nhập</button>
                                </div>
                                <div className='md:text-base text-sm font-medium text-gray-900 text-center'>
                                    <span>Bạn chưa có tài khoản?</span>
                                    <Link to='/register' className='text-indigo-900 hover:opacity-90 cursor-pointer'> Đăng kí</Link>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserLogin;
