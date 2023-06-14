import React, { useState } from 'react';
import './Home.scss';
import image_4 from "../../assets/images/HRD.png";

const Home = () => {


  return (
    <div className='home'>
      <div className=' bg-gray-50 py-4 md:py-8'>
        <div className='mx-4 md:mx-8'>
          <img className='object-cover bg-origin-padding w-full mx-auto' src={image_4} />
        </div>
        <div className='min-w-0 break-words bg-white shadow-lg rounded min-h-screen mx-4 px-5 md:mx-8 md:px-10'>
          <div className='py-4'>
            <p className='font-semibold text-sm md:text-lg'>Bệnh võng mạc đái tháo đường</p>
            <p className='text-xs md:text-base'>Trên thế giới có trên 200 triệu người mắc đái tháo đường, còn ở Việt Nam khoảng 4,5 triệu người mắc,
              trong đó có khoảng 20% những người mắc tiểu đường có biến chứng ở mắt với các mức độ khác nhau.
              Nếu không được phát hiện và điều trị sớm, những tổn thương của bệnh ở đáy mắt sẽ rất nặng nề như phù hoàng điểm,
              xuất huyết võng mạc, xuất huyết dịch kính, bong võng mạc...dẫn đến mù lòa.
            </p>
          </div>
          <div className='py-2 md:py-4'>
            <p className='font-semibold text-sm md:text-lg'>Nguyên nhân gây ra bệnh võng mạc đái tháo đường</p>
            <p className='text-xs md:text-base'>Khi đường huyết không được kiểm soát tốt trong bệnh đái tháo đường, nồng độ đường trong máu tăng cao,
              gây tổn thương cho các mạch máu nhỏ, đặc biệt là mạch máu ở võng mạc.
              Tổn thương các mao mạch này có thể làm tăng tính thấm của thành mạch máu và dẫn đến thoát huyết tương vào võng mạc, gây phù nề.
            </p>
          </div>
          <div className='py-2 md:py-4'>
            <p className='font-semibold text-sm md:text-lg'>Các giai đoạn của bệnh võng mạc đái tháo đường</p>
            <div className='py-1 md:py-2'>
              <p className='font-semibold italic text-xs md:text-base'>Bệnh lý võng mạc nền</p>
              <p className='text-xs md:text-base'><span className='font-semibold'>Mô tả: </span> Đây là giai đoạn sớm của bệnh lý võng mạc do đái tháo đường với những tổn thương như phình mao mạch võng mạc, xuất huyết nhẹ, ứ đọng các chất tiết trong võng mạc, phù võng mạc.</p>
              <p className='text-xs md:text-base'><span className='font-semibold'>Điều trị: </span>Cần theo dõi và điều trị khi có tiến triển xấu, ảnh hưởng đến chức năng thị giác. </p>
            </div>
            <div className='py-1 md:py-2'>
              <p className='font-semibold italic text-xs md:text-base'>Bệnh lý hoàng điểm do đái tháo đường</p>
              <p className='text-xs md:text-base'><span className='font-semibold'>Mô tả: </span> Phù hoàng điểm với các xuất tiết cứng quanh hoàng điểm</p>
              <p className='text-xs md:text-base'><span className='font-semibold'>Điều trị: </span>Khi đã xuất hiện bệnh lý hoàng điểm với biểu hiện thị lực giảm sút nhiều, bệnh nhân cần được khám mắt và điều trị laser ngay để hoàng điểm được hồi phục sớm. </p>
            </div>
            <div className='py-1 md:py-2'>
              <p className='font-semibold italic text-xs md:text-base'>Bệnh lý võng mạc đái tháo đường tiền tăng sinh</p>
              <p className='text-xs md:text-base'><span className='font-semibold'>Mô tả: </span> Vi phình mạch, xuất tiết, xuất huyết võng mạc</p>
              <p className='text-xs md:text-base'><span className='font-semibold text-xs md:text-base'>Điều trị: </span>Tổn thương ở giai đoạn này nếu đe dọa chức năng thị giác, hoặc gây thiếu máu cục bộ nặng cần chụp đáy mắt huỳnh quang và laser quang đông các vùng tổn thương để phòng biến chứng.</p>
            </div>
            <div className=' py-1 md:py-2'>
              <p className='font-semibold italic text-xs md:text-base'>Bệnh lý võng mạc đái tháo đường giai đoạn tăng sinh.</p>
              <p className='text-xs md:text-base'><span className='font-semibold'>Mô tả: </span> Xuất huyết tái diễn liên tục, gây tổ chức hóa và co kéo dịch kích võng mạc. Hậu quả là tổn thương nặng võng mạc, rách hoặc bong võng mạc dẫn đến mù lòa. </p>
              <p className='text-xs md:text-base'><span className='font-semibold'>Điều trị: </span>Bệnh nhân ở giai đoạn này cần được laser quang đông toàn bộ võng mạc cấp cứu. Diễn biến của bệnh giai đoạn này rất nhanh và nặng, đặc biệt khi bệnh đái tháo đường không được điều trị triệt để.</p>
            </div>
          </div>

        </div>
      </div>

    </div>
  )
}

export default Home;
