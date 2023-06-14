import React, { useState } from 'react'
import logoBME from "../../../assets/images/logoNganh.png";
import { Link, useNavigate} from 'react-router-dom';
import axios from 'axios';

const Register = () => {
    const nav = useNavigate();
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [status, setStatus] = useState('');

    const changeFullName = (event) => {
        setFullName(event.target.value);
    };

    const changeEmail = (event) => {
        setEmail(event.target.value);
    };

    const changePassword = (event) => {
        setPassword(event.target.value);
    };

    const submitForm = () => {
        const formData = new FormData();
        formData.append('full_name', fullName);
        formData.append('email', email);
        formData.append('password', password);

        axios
            .post('http://127.0.0.1:8000/doctor/', formData, {
                headers: {
                    'content-type': 'multipart/form-data',
                },
            })
            .then((response) => {
                console.log(response.data);
                alert('Đăng kí thành công');
                setStatus(true);
                nav('/login')

            })
            .catch((error) => {
                console.error(error);
                alert('Đăng kí thất bại');
                setStatus(false);
            });
    };
    return (
        <div className='login flex flex-wrap items-center justify-between bg-gray-50'>
            <div className='xl:max-w-7xl mx-auto w-[350px] md:w-1/3'>
                <div className="relative min-w-0 break-words bg-white my-8 shadow-lg rounded min-h-screen dark:border">
                    <div className='flex-auto p-6 space-y-4 md:space-y-6'>
                        <img className='w-[80px] h-[80px] md:w-[110px] md:h-[110px] m-auto my-2' src={logoBME} alt="logo" />
                        <h3 className="text-base font-medium md:text-xl md:font-bold text-gray-900 text-center">Vui lòng đăng kí tài khoản</h3>
                        <div className="formSocial">
                            <form className="formLogin">
                                <div className='mb-2'>
                                    <label className="block text-sm font-medium text-gray-900">Họ tên</label>
                                    <input
                                        className='my-2 text-sm md:text-base h-8 md:h-10 rounded-3xl  px-3 truncate border-solid border w-full bg-gray-50'
                                        type='text'
                                        placeholder="Ho ten"
                                        value={fullName}
                                        onChange={changeFullName}/>
                                </div>
                                <div className='mb-2'>
                                    <label className="block text-sm font-medium text-gray-900">Email</label>
                                    <input
                                        className='my-2 text-sm md:text-base h-8 md:h-10 rounded-3xl  px-3 truncate border-solid border w-full bg-gray-50'
                                        type='email'
                                        placeholder="ten@gmail.com"
                                        value={email}
                                        onChange={changeEmail} />
                                </div>
                                <div className='mb-2'>
                                    <label className="block text-sm font-medium text-gray-900">Mật khẩu</label>
                                    <input
                                        className='my-2 text-sm md:text-base h-8 md:h-10 rounded-3xl px-3 truncate border-solid border w-full bg-gray-50'
                                        value={password}
                                        onChange={changePassword}
                                        type="password"
                                        placeholder="••••••••"/>
                                </div>

                                <div className='text-center my-4'>
                                    <button type="button" onClick={submitForm} className='w-full bg-indigo-900 text-white text-sm font-medium px-3 py-2 rounded-3xl text-lg hover:opacity-90'>Đăng kí</button>
                                </div>

                                <div className='md:text-base text-sm font-medium text-gray-900 text-center'>
                                    <span> Bạn đã có tài khoản?</span>
                                    <Link to='/login' className='text-indigo-900 hover:opacity-90 cursor-pointer'> Đăng nhập</Link>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register;
