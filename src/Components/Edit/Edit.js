import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
const Edit = () => {
    const nav = useNavigate()
    const { id } = useParams();
    const [state, setState] = useState({
        full_name: '',
        age: '',
        gender: '',
        email: '',
        contact: '',
        address: '',
        birthday: '',
        featured_img: null,
    })

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = () => {
        fetch(`http://127.0.0.1:8000/employee/${id}/`)
            .then(response => response.json())
            .then(data => {
                setState({
                    full_name: data.full_name,
                    age: data.age,
                    gender: data.gender,
                    email: data.email,
                    contact: data.contact,
                    address: data.address,
                    birthday: data.birthday,
                    featured_img: data.featured_img
                });
            });
    };

    const changeHandler = event => {
        setState({
            ...state,
            [event.target.name]: event.target.value
        });
    };
    const handleFileChange = (event) => {
        setState({
            ...state,
            featured_img: event.target.files[0],
        });
    };

    const submitForm = () => {
        const _formData = new FormData();
        _formData.append('full_name', state.full_name);
        _formData.append('age', state.age);
        _formData.append('gender', state.gender);
        _formData.append('email', state.email);
        _formData.append('contact', state.contact);
        _formData.append('address', state.address);
        _formData.append('birthday', state.birthday);
        _formData.append('featured_img', state.featured_img, state.featured_img.name);

        axios.put(`http://127.0.0.1:8000/employee/${id}/`, _formData, {
            headers: {
                'content-type': 'multipart/form-data'
            }
        })
            .then(response => {
                console.log(response.data);
                nav('/diagnostic-list')
            })
            .catch(error => {
                console.error(error);
            });
    };
    return (
        <div className='edit-info flex flex-wrap items-center justify-between bg-gray-50'>
            <div className='xl:max-w-7xl mx-auto w-full'>
                <div className="relative min-w-0 break-words bg-white my-8 shadow-lg rounded min-h-screen mx-4 md:mx-0 ">
                    <div className='flex-auto p-6 space-y-4 md:space-y-6 sm:p-8'>
                        <form>
                            <div className="grid gap-4 md:gap-6 mb-4 md:mb-6 md:grid-cols-3">
                                <div >
                                    <label className="block mb-2 font-medium md:text-base text-sm">Họ và tên</label>
                                    <input
                                        value={state.full_name}
                                        name='full_name'
                                        onChange={changeHandler}
                                        type="text"
                                        className="bg-gray-50 border border-gray-300 rounded-lg block w-full md:text-base text-sm p-1.5 md:p-2.5 "
                                        placeholder="Nhập họ và tên" />
                                </div>
                                <div >
                                    <label className="block mb-2 font-medium md:text-base text-sm">Tuổi</label>
                                    <input
                                        value={state.age}
                                        name='age'
                                        onChange={changeHandler}
                                        type="number"
                                        placeholder='Nhập tuổi'
                                        className="bg-gray-50 border border-gray-300 rounded-lg block w-full md:text-base text-sm p-1.5 md:p-2.5 " />
                                </div>
                                <div>
                                    <label className="block mb-2 font-medium md:text-base text-sm">Giới tính</label>
                                    <input
                                        value={state.gender}
                                        name='gender'
                                        onChange={changeHandler}
                                        type="text"
                                        placeholder='Nhập giới tính'
                                        className="bg-gray-50 border border-gray-300 rounded-lg block w-full md:text-base text-sm p-1.5 md:p-2.5 " />
                                </div>
                            </div>
                            <div className="grid gap-4 md:gap-6 mb-4 md:mb-6 md:grid-cols-2">
                                <div >
                                    <label className="block mb-2 text-sm font-medium md:text-base text-sm ">Số điện thoại</label>
                                    <input
                                        name='contact'
                                        value={state.contact}
                                        onChange={changeHandler}
                                        type="tel"
                                        className="bg-gray-50 border border-gray-300 rounded-lg block w-full md:text-base text-sm p-1.5 md:p-2.5 "
                                        placeholder="123-45-678"
                                        pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" />
                                </div>
                                <div >
                                    <label className="block mb-2 text-sm font-medium md:text-base text-sm ">Ngày sinh</label>
                                    <input
                                        name='birthday'
                                        value={state.birthday}
                                        onChange={changeHandler}
                                        type="date"
                                        className="bg-gray-50 border border-gray-300 rounded-lg block w-full md:text-base text-sm p-1.5 md:p-2.5 " />
                                </div>
                                <div >
                                    <label className="block mb-2 text-sm font-medium md:text-base text-sm">Email</label>
                                    <input
                                        name='email'
                                        value={state.email}
                                        onChange={changeHandler}
                                        type="mail"
                                        className="bg-gray-50 border border-gray-300 rounded-lg block w-full md:text-base text-sm p-1.5 md:p-2.5 "
                                        placeholder="ten@gmail.com" />
                                </div>
                                <div >
                                    <label className="block mb-2 text-sm font-medium md:text-base text-sm">Địa chỉ</label>
                                    <input
                                        name='address'
                                        value={state.address}
                                        onChange={changeHandler}
                                        type="text"
                                        placeholder='Nhập địa chỉ'
                                        className="bg-gray-50 border border-gray-300 rounded-lg block w-full md:text-base text-sm p-1.5 md:p-2.5 " />
                                </div>
                            </div>
                            <div >
                                <label className="block mb-2 text-sm font-medium md:text-base text-sm">Hình ảnh chuẩn đoán</label>
                                <input
                                    name='featured_img'
                                    onChange={handleFileChange}
                                    type="file"
                                    className="cursor-pointer bg-gray-50 border border-gray-300 rounded-lg block w-full md:text-base text-sm p-1.5 md:p-2.5" />
                            </div>
                            <div className='py-6 md:py-8'>
                                <button
                                    type="button"
                                    onClick={submitForm}
                                    className="text-white bg-indigo-900 hover:bg-indigo-800 focus:ring-4 focus:ring-indigo-700 md:text-base text-sm font-medium rounded-lg w-full sm:w-auto px-2 py-1.5 md:px-5 md:py-2.5 text-center">
                                    Cập nhật
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Edit
