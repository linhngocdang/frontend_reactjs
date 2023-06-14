import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
const Detail = () => {
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
        classified: ''
    });
    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = () => {
        fetch(`http://127.0.0.1:8000/employee/${id}`)
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
                    featured_img: data.featured_img,
                    classified: data.classified
                })
            })

    }

    return (
        <div className='patient-detail bg-gray-50'>
            <div className='xl:max-w-7xl mx-auto w-full'>
                <div className='p-6 space-y-4 md:space-y-6 sm:p-8'>
                    <div className=" mb-0 list-none pt-3 pb-4 grid grid-cols-12 md:gap-x-4 mx-auto ">
                        <div className=" col-span-12 md:col-span-4">
                            <div className="px-4 py-2 md:px-5 md:py-4 bg-white shadow-lg rounded block leading-normal md:min-h-screen ">
                                <div className='text-base font-medium md:text-lg md:font-bold text-center py-2 md:py-4'>THÔNG TIN BỆNH NHÂN</div>
                                <div className='py-1 md:py-2 text-sm md:text-base'>
                                    <span className='font-medium'>Họ và tên: </span>
                                    <span className='italic uppercase'>{state.full_name}</span>
                                </div>
                                <div className='py-1 md:py-2 text-sm md:text-base'>
                                    <span className='font-medium'>Giới tính: </span>
                                    <span className='italic '>{state.gender}</span>
                                </div>
                                <div className='py-1 md:py-2 text-sm md:text-base'>
                                    <span className='font-medium'>Tuổi: </span>
                                    <span className='italic '>{state.age}</span>
                                </div>
                                <div className='py-1 md:py-2 text-sm md:text-base'>
                                    <span className='font-medium'>Ngày sinh: </span>
                                    <span className='italic '>{state.birthday}</span>
                                </div>
                                <div className='py-1 md:py-2 text-sm md:text-base'>
                                    <span className='font-medium'>Số điện thoại: </span>
                                    <span className='italic '>{state.contact}</span>
                                </div>
                                <div className='py-1 md:py-2 text-sm md:text-base'>
                                    <span className='font-medium'>Địa chỉ: </span>
                                    <span className='italic'>{state.address}</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-span-12 md:col-span-4">
                            <div className="px-4 py-2 md:px-5 md:py-4 bg-white shadow-lg rounded block leading-normal md:min-h-screen">
                                <div className='text-base font-medium md:text-lg md:font-bold text-center py-2 md:py-4'>ẢNH CHUẨN ĐOÁN</div>
                                <div>
                                    <img className='mx-auto w-[200px] h-[200px] md:w-[300px] md:h-[300px]' src={state.featured_img} alt="state.full_name" />
                                </div>
                            </div>
                        </div>
                        <div className="col-span-12 md:col-span-4">
                            <div className="px-4 py-2 md:px-5 md:py-4 bg-white shadow-lg rounded block leading-normal md:min-h-screen" >
                                <div className='text-base font-medium md:text-lg md:font-bold text-center py-2 md:py-4'>KẾT QUẢ CHUẨN ĐOÁN</div>
                                <div className='py-1 md:py-2 text-sm md:text-base'>
                                    <span className='font-medium'>Chuẩn đoán: </span>
                                    <span className='italic'>{state.classified}</span>
                                </div>
                                <div className='pb-5 md:pb-0 text-sm md:text-base'>
                                    {
                                        state.classified === 'PROLIFERATIVE DR'
                                            ? <div>
                                                <p className='py-2 '><span className='font-medium'>Mô tả: </span>Bệnh lý võng mạc đái tháo đường giai đoạn tăng sinh.</p>
                                                <p className='py-2'><span className='font-medium'>Chi tiết: </span>Tổn thương nặng võng mạc, rách hoặc bong võng mạc dẫn đến mù lòa. </p>
                                                <p className='py-2'><span className='font-medium'>Điều trị: </span>Bệnh nhân ở giai đoạn này cần được laser quang đông toàn bộ võng mạc cấp cứu. Diễn biến của bệnh giai đoạn này rất nhanh và nặng, đặc biệt khi bệnh đái tháo đường không được điều trị triệt để.</p>
                                            </div>
                                            : state.classified === 'SEVERE'
                                                ? <div>
                                                    <p className='py-2'><span className='font-medium'>Mô tả: </span>Bệnh lý võng mạc đái tháo đường tiền tăng sinh</p>
                                                    <p className='py-2'><span className='font-medium'>Chi tiết: </span>Vi phình mạch, xuất tiết, xuất huyết võng mạc</p>
                                                    <p className='py-2'><span className='font-medium'>Điều trị: </span>Tổn thương ở giai đoạn này nếu đe dọa chức năng thị giác, hoặc gây thiếu máu cục bộ nặng cần chụp đáy mắt huỳnh quang và laser quang đông các vùng tổn thương để phòng biến chứng.</p>
                                                </div>
                                                : state.classified === 'MODERATE'
                                                    ? <div>
                                                        <p className='py-2'><span className='font-medium'>Mô tả: </span>Bệnh lý hoàng điểm do đái tháo đường</p>
                                                        <p className='py-2'><span className='font-medium'>Chi tiết: </span> Phù hoàng điểm với các xuất tiết cứng quanh hoàng điểm</p>
                                                        <p className='py-2'><span className='font-medium'>Điều trị: </span> Khi đã xuất hiện bệnh lý hoàng điểm với biểu hiện thị lực giảm sút nhiều, bệnh nhân cần được khám mắt và điều trị laser ngay để hoàng điểm được hồi phục sớm.</p>
                                                    </div>
                                                    : state.classified === 'MILD'
                                                        ? <div>
                                                            <p className='py-2'><span className='font-medium'>Mô tả: </span> Bệnh lý võng mạc nền</p>
                                                            <p className='py-2'><span className='font-medium'>Chi tiết: </span>Phình mao mạch võng mạc, xuất huyết nhẹ, ứ đọng các chất tiết trong võng mạc, phù võng mạc.</p>
                                                            <p className='py-2'><span className='font-medium'>Điều trị: </span> Cần theo dõi và điều trị khi có tiến triển xấu, ảnh hưởng đến chức năng thị giác.</p>
                                                        </div>
                                                        : <div> <span className='font-medium'>Mô tả: </span>Bình thường</div>
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Detail;
