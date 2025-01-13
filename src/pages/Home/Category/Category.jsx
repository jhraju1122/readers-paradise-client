import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

 
import horror2 from '../../../assets/img/horror3.webp'
import horror3 from '../../../assets/img/horror3.webp'
import horror4 from '../../../assets/img/horror4.jpg'
import horror5 from '../../../assets/img/horror5.webp'
import { Link } from 'react-router-dom';
const Category = () => {
    return (
      
        <Swiper
        
        slidesPerView={4}
        spaceBetween={30}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
      
        <SwiperSlide><img src={horror2} alt="" /><h3 className='text-4xl uppercase text-center'>Jongol Barir dakura</h3>
        <Link className="btn relative top-[-60px]">Book Details</Link>
        </SwiperSlide>
        <SwiperSlide><img src={horror2} alt="" /><h3 className='text-4xl uppercase text-center'>Jongol Barir dakura</h3>
        <Link className="btn relative top-[-60px]">Book Details</Link>
        </SwiperSlide>
        <SwiperSlide><img src={horror3} alt="" /><h3 className='text-4xl uppercase text-center'>Jongol Barir dakura</h3>
        <Link className="btn relative top-[-60px]">Book Details</Link>
        </SwiperSlide>
        <SwiperSlide><img src={horror4} alt="" /><h3 className='text-4xl uppercase text-center'>Jongol Barir dakura</h3>
        <Link className="btn relative top-[-60px]">Book Details</Link>
        </SwiperSlide>
        <SwiperSlide><img src={horror5} alt="" /><h3 className='text-4xl uppercase text-center'>Jongol Barir dakura</h3>
        <Link className="btn relative top-[-60px]">Book Details</Link>
        </SwiperSlide>
       
      </Swiper>
    );
};

export default Category;