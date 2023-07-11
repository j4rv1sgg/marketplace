import React  from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import  styles  from './swiper.module.css'
import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper";

const Slider = ({ images }) => {

    return (
        <>
            <Swiper navigation={true} modules={[Navigation]} className={styles.swiper}>
            {images.map(image => (
                <SwiperSlide>
                    <div className={styles.img__container}>
                        <img src={image} className={styles.img} />
                    </div>
                </SwiperSlide>
            ))}
            </Swiper>
        </>
    );
};

export default Slider
