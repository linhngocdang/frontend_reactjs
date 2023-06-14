import React from 'react'
import logoBME from '../../assets/images/logoBME.png'
const Footer = () => {
    return (
        <div className='header bg-slate-100 py-6 md:py-10'>
            <div className='xl:max-w-screen-xl flex justify-between items-center py-2 md:py-4 mx-auto pl-6 pr-6 md:pl-60 md:pr-60'>
                <div className='flex'>
                    <img className='w-[60px] h-[60px] md:w-[110px] md:h-[110px] mr-2 md:mr-5' src={logoBME} alt='logo' />
                </div>
                <div className='text-center'>
                    <h2 className='text-sm font-semibold md:text-xl md:font-bold mb-2 md:mb-5'>BỘ MÔN ĐIỆN TỬ CÔNG NGHIỆP Y SINH</h2>
                    <div className='flex'>
                        <h3 className='text-sm md:text-lg font-semibold mr-1 md:mr-10'>Sinh viên thực hiện:</h3>
                        <ul className='text-sm md:text-lg'>
                            <li>Đặng Thị Ngọc Linh</li>
                            <li>Phạm Vũ Tường Vy</li>
                        </ul>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Footer
