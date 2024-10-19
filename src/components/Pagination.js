import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';
import SwiperCore, { Pagination } from 'swiper';

SwiperCore.use([Pagination]);

const PaginationComponent = ({ products }) => {
  return (
    <Swiper pagination={{ clickable: true }} slidesPerView={1} spaceBetween={10}>
      {products.map(product => (
        <SwiperSlide key={product.id}>
          <div className="product-card">
            <img src={product.image} alt={product.name} />
            <h3 className="text-lg font-semibold">{product.name}</h3>
            <p>{product.price} VND</p>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default PaginationComponent;
