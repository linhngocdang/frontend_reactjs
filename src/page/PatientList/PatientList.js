import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const PatientList = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    fetch('https://project-final-h1c2.onrender.com/employee')
      .then(response => response.json())
      .then(dt => {
        setData(dt);
      });
  };

  console.log('data', data);

  const deleteData = (id) => {
    fetch('https://project-final-h1c2.onrender.com/employee/' + id + '/', {
      method: 'DELETE',
      body: JSON.stringify(data),
    })
      .then(response => response)
      .then((data) => {
        if (data) {
          fetchData();
        }
      });
  }

  return (
    <div className='patient-list bg-gray-50 py-8'>
      <div className='xl:max-w-7xl mx-auto w-[350px] md:w-full'>
        <div className="min-w-0 break-words bg-white shadow-lg rounded min-h-screen ">
          <div className='mx-auto overflow-auto rounded'>
            <table className="w-full min-w-max table md:text-base text-sm ">
              <thead className='bg-gray-400 text-white'>
                <tr>
                  <th className="px-1.5 py-2.5 md:px-3 md:py-5 text-left ">Họ và tên</th>
                  <th className="px-1.5 py-2.5 md:px-3 md:py-5 text-left" >Giới tính</th>
                  <th className="px-1.5 py-2.5 md:px-3 md:py-5 text-left" >Tuổi</th>
                  <th className="px-1.5 py-2.5 md:px-3 md:py-5 text-left" >Địa chỉ</th>
                  <th className="px-1.5 py-2.5 md:px-3 md:py-5 text-left">Hành động</th>
                </tr>
              </thead>
              <tbody >
                {
                  data.map((value) => (
                    <tr className="lg:text-black border-b hover:bg-gray-200 border-solid md:border-b-2 border-gray-200" key={value.id}>
                      <td className='px-1.5 py-2.5 md:px-3 md:py-5 font-medium capitalize whitespace-nowrap'>{value.full_name}</td>
                      <td className=" px-1.5 py-2.5 md:px-3 md:py-5 whitespace-nowrap">{value.gender}</td>
                      <td className=" px-1.5 py-2.5 md:px-3 md:py-5 whitespace-nowrap">{value.age}</td>
                      <td className=" px-1.5 py-2.5 md:px-3 md:py-5 whitespace-nowrap">{value.address}</td>
                      <td className='whitespace-nowrap'>
                        <span className='mr-2 text-xs md:text-base bg-indigo-900 text-white hover:bg-indigo-800 rounded-3xl px-1.5 py-1 md:px-3 md:py-2 cursor-pointer'><Link to={'/detail/' + value.id}>Chi tiết</Link></span>
                        <span className='mr-2 text-xs md:text-base bg-indigo-900 text-white hover:bg-indigo-800 rounded-3xl px-1.5 py-1 md:px-3 md:py-2 cursor-pointer'><Link to={'/edit/' + value.id}>Cập nhật </Link></span>
                        <button onClick={() => deleteData(value.id)} className='mr-2 text-xs md:text-base border-none bg-indigo-900 hover:bg-indigo-800 text-white cursor-pointer rounded-3xl px-1.5 py-1 md:px-3 md:py-2'>Xóa</button>
                      </td>
                    </tr>
                  ))
                }
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PatientList
