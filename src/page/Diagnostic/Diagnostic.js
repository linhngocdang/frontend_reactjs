import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const Diagnostic = () => {
  const nav = useNavigate()
  const [state, setState] = useState({
    full_name: '',
    age: '',
    gender: '',
    email: '',
    contact: '',
    address: '',
    birthday: '',
    featured_img: null,
  });

  const handleInput = (event) => {
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

    axios.post('https://project-final-h1c2.onrender.com/employee/', _formData, {
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
    <div className='diagnostic flex flex-wrap items-center justify-between bg-gray-50'>
      <div className='xl:max-w-7xl mx-auto w-full'>
        <div className="relative min-w-0 break-words bg-white my-8 shadow-lg rounded min-h-screen mx-4 md:mx-0 ">
          <div className='flex-auto p-8 md:p-6 space-y-4 md:space-y-6 sm:p-8'>
            <form>
              <div class="grid gap-4 md:gap-6 mb-4 md:mb-6 md:grid-cols-3">
                <div >
                  <label class="block mb-2 font-medium md:text-base text-sm">Họ và tên</label>
                  <input
                    type="text"
                    class="bg-gray-50 border border-gray-300 rounded-lg block w-full md:text-base text-sm p-1.5 md:p-2.5 "
                    placeholder="Nhập họ và tên"
                    value={state.full_name}
                    name='full_name'
                    onChange={handleInput} />
                </div>
                <div >
                  <label class="block mb-2 font-medium md:text-base text-sm">Tuổi</label>
                  <input
                    type="number"
                    value={state.age}
                    placeholder='Nhập tuổi'
                    onChange={handleInput}
                    name='age'
                    class="bg-gray-50 border border-gray-300 rounded-lg  block w-full md:text-base text-sm p-1.5 md:p-2.5 " />
                </div>
                <div>
                  <label class="block mb-2 font-medium md:text-base text-sm ">Giới tính</label>
                  <input
                    type="type"
                    placeholder='Nhập giới tính'
                    value={state.gender}
                    onChange={handleInput}
                    name='gender'
                    class="bg-gray-50 border border-gray-300 rounded-lg block w-full md:text-base text-sm p-1.5 md:p-2.5" />
                </div>
              </div>
              <div class="grid gap-4 md:gap-6 mb-4 md:mb-6 md:grid-cols-2">
                <div >
                  <label class="block mb-2 text-sm font-medium md:text-base text-sm ">Số điện thoại</label>
                  <input
                    type="tel"
                    class="bg-gray-50 border border-gray-300  rounded-lg block w-full md:text-base text-sm p-1.5 md:p-2.5"
                    placeholder="123-45-678"
                    value={state.contact}
                    onChange={handleInput}
                    name='contact'
                    pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" />
                </div>
                <div >
                  <label class="block mb-2 text-sm font-medium md:text-base text-sm">Ngày sinh</label>
                  <input
                    value={state.birthday}
                    name='birthday'
                    onChange={handleInput}
                    type="date"
                    class="bg-gray-50 border border-gray-300 rounded-lg block w-full md:text-base text-sm p-1.5 md:p-2.5" />
                </div>
                <div >
                  <label class="block mb-2 text-sm font-medium md:text-base text-sm">Email</label>
                  <input
                    type="mail"
                    value={state.email}
                    onChange={handleInput}
                    name='email'
                    class="bg-gray-50 border border-gray-300  rounded-lg  block w-full md:text-base text-sm p-1.5 md:p-2.5"
                    placeholder="ten@gmail.com" />
                </div>
                <div >
                  <label class="block mb-2 text-sm font-medium md:text-base text-sm">Địa chỉ</label>
                  <input
                    type="text"
                    value={state.address}
                    onChange={handleInput}
                    name='address'
                    placeholder='Nhập địa chỉ'
                    class="bg-gray-50 border border-gray-300 rounded-lg  block w-full md:text-base text-sm p-1.5 md:p-2.5" />
                </div>
              </div>
              <div >
                <label class="block mb-2 text-sm font-medium md:text-base text-sm md:text-base text-sm p-1.5 md:p-2.5">Hình ảnh chuẩn đoán</label>
                <input
                  name="featured_img"
                  onChange={handleFileChange}
                  type="file"
                  class="bg-gray-50 border border-gray-300 rounded-lg block w-full md:text-base text-sm p-1.5 md:p-2.5" />
              </div>
              <div className='py-6 md:py-8'>
                <button
                  type="button"
                  onClick={submitForm}
                  className="text-white bg-indigo-900 hover:bg-indigo-800 focus:ring-4 focus:ring-indigo-700 md:text-base text-sm font-medium rounded-lg w-full sm:w-auto px-2 py-1.5 md:px-5 md:py-2.5 text-center">
                  Lưu lại
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Diagnostic
