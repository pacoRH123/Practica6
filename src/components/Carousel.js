import {Autoplay, Navigation, Pagination} from "swiper/modules";
import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"

const Carousel = () =>{
    return (
    <Swiper
        modules={[Navigation,Pagination, Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{clickable: true}}
        autoplay={{delay: 3000}}>
        <SwiperSlide>
            <img src="beta.jpg" alt="Slide 1" className="slide" style={{ width: '100%', height: 'auto' }} />
        </SwiperSlide>
        <SwiperSlide>
            <img src="nemo.jpg" alt="Slide 2" className="slide" style={{ width: '100%', height: 'auto' }}/>
        </SwiperSlide>
        <SwiperSlide>
            <img src="ojon.jpg" alt="Slide 3" className="slide" style={{ width: '100%', height: 'auto' }}/>
        </SwiperSlide>
    </Swiper>
    )

}
export default Carousel;