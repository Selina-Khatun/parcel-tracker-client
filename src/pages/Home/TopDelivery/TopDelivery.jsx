import React from 'react';
import useReview from '../../../hooks/useReview';
import { Rating } from '@smastrom/react-rating';
// import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import '@smastrom/react-rating/style.css'
// import { Pagination } from 'swiper/modules';

const TopDelivery = () => {
    const [review] = useReview();
    const sortedReview = [...review].sort((a, b) => b.parcelsDelivered - a.parcelsDelivered);
    return (
        <div>
            <div>
                <h2 className='text-3xl font-bold text-center py-5 my-5'>Top Delivery Men</h2>
                <div className="grid lg:grid-cols-5 grid-cols-1 md:grid-cols-3 gap-3 my-5">
                    {sortedReview.map(deliveryMan => (

                        <div key={deliveryMan._id} className="card  bg-base-100  shadow-xl">
                            <figure><img src={deliveryMan.image} alt={`${deliveryMan.name}'s Image`} /></figure>
                            <div className="card-body justify-center">
                                <h2 className="card-title  justify-center">
                                    {deliveryMan.name}

                                </h2>
                                <p className='text-center'>Parcels Delivered: {deliveryMan.parcelsDelivered}</p>
                                <div className="card-actions justify-center">
                                    <Rating
                                        style={{ maxWidth: 180 }}
                                        value={deliveryMan.averageRatings}
                                        readOnly
                                    />
                                </div>
                            </div>
                        </div>
                    ))}
                    {/* <Swiper
                        slidesPerView={3}
                        spaceBetween={30}
                        pagination={{
                            clickable: true,
                        }}
                        modules={[Pagination]}
                        className="mySwiper"
                    >
                        <SwiperSlide>
                        </SwiperSlide>

                    </Swiper> */}

                </div>


            </div>




        </div>
    );
};

export default TopDelivery;