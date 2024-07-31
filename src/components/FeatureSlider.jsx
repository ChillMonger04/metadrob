import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";

function App() {
  return (
    <div className="container">
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        pagination={{ el: ".swiper-pagination", clickable: true }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
          clickable: true,
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="swiper_container"
      >
        <SwiperSlide className="flex flex-col justify-start bg-[#DDDDDD] rounded-lg shadow-lg">
          <div className="cardTop text-gray-500 font-[FoundersGrotesk] text-[7vw] px-6 py-5 opacity-65">
            <span>01</span>
          </div>
          <div className="cardBody flex flex-col">
            <h1 className="text-[3.6vw] px-5 leading-none font-[FoundersGrotesk] text-[#4A249D] text-center uppercase">
              Powerful Virtual Showroom Editor
            </h1>
            <p className="mt-8 px-6 leading-tight text-black">
              Choose from over 100 dazzling virtual store templates and craft
              your stunning e-retail showroom in under 60 minutes—experience the
              future of shopping today!
            </p>
          </div>
        </SwiperSlide>

        <SwiperSlide className="flex flex-col justify-start bg-[#F6F5F5] rounded-lg shadow-lg">
          <div className="cardTop text-gray-500 font-[FoundersGrotesk] text-[7vw] px-6 py-5 opacity-65">
            <span>02</span>
          </div>
          <div className="cardBody flex flex-col">
            <h1 className="text-[3.6vw] px-5 leading-none font-[FoundersGrotesk] text-[#4A249D] text-center uppercase">
              Rich 3D Library
            </h1>
            <p className="mt-8 px-6 leading-tight text-black">
              Access an extensive 3D media library to craft and enhance your
              virtual showroom with precision. Elevate your brand with stunning,
              realistic visuals and create a distinct, professional identity.
            </p>
          </div>
        </SwiperSlide>

        <SwiperSlide className="flex flex-col justify-start bg-[#DDDDDD] rounded-lg shadow-lg">
          <div className="cardTop text-gray-500 font-[FoundersGrotesk] text-[7vw] px-6 py-5 opacity-65">
            <span>03</span>
          </div>
          <div className="cardBody flex flex-col">
            <h1 className="text-[3.6vw] px-5 leading-none font-[FoundersGrotesk] text-[#4A249D] text-center uppercase">
              Intelligent Analytics
            </h1>
            <p className="mt-8 px-6 leading-tight text-black">
              Gain comprehensive insights into customer behavior to effectively
              monitor performance. Leverage advanced analytics for data-driven
              decision-making and optimize retail strategies with precision.
            </p>
          </div>
        </SwiperSlide>

        <SwiperSlide className="flex flex-col justify-start bg-[#F6F5F5] rounded-lg shadow-lg">
          <div className="cardTop text-gray-500 font-[FoundersGrotesk] text-[7vw] px-6 py-5 opacity-65">
            <span>04</span>
          </div>
          <div className="cardBody flex flex-col">
            <h1 className="text-[3.6vw] px-5 leading-none font-[FoundersGrotesk] text-[#4A249D] text-center uppercase">
              Multiplayer
            </h1>
            <p className="mt-8 px-6 leading-tight text-black">
              Enhance the shopping experience by allowing customers to shop with
              family and friends. Our multiplayer feature connects users for
              group shopping, accessible from any device, anywhere.
            </p>
          </div>
        </SwiperSlide>

        <SwiperSlide className="flex flex-col justify-start bg-[#DDDDDD] rounded-lg shadow-lg">
          <div className="cardTop text-gray-500 font-[FoundersGrotesk] text-[7vw] px-6 py-5 opacity-65">
            <span>05</span>
          </div>
          <div className="cardBody flex flex-col">
            <h1 className="text-[3.6vw] px-5 leading-none font-[FoundersGrotesk] text-[#4A249D] text-center uppercase">
              Gamification
            </h1>
            <p className="mt-8 px-6 leading-tight text-black">
              Boost customer engagement and drive sales with gamification. Our
              platform turns shopping into an interactive experience, letting
              customers participate in in-store activities, earn points, and
              unlock rewards or discounts.
            </p>
          </div>
        </SwiperSlide>

        <SwiperSlide className="flex flex-col justify-start bg-[#F6F5F5] rounded-lg shadow-lg">
          <div className="cardTop text-gray-500 font-[FoundersGrotesk] text-[7vw] px-6 py-5 opacity-65">
            <span>06</span>
          </div>
          <div className="cardBody flex flex-col">
            <h1 className="text-[3.6vw] px-5 leading-none font-[FoundersGrotesk] text-[#4A249D] text-center uppercase">
              Seamless Integration
            </h1>
            <p className="mt-8 px-6 leading-tight text-black">
              Seamlessly integrate a virtual store with your existing e-commerce
              platform and offer customers a revolutionary shopping experience
              they’ve never encountered before.
            </p>
          </div>
        </SwiperSlide>

        <div className="slider-controler">
          <div className="swiper-button-prev slider-arrow">
            <ion-icon name="arrow-back-outline"></ion-icon>
          </div>
          <div className="swiper-button-next slider-arrow">
            <ion-icon name="arrow-forward-outline"></ion-icon>
          </div>
          <div className="swiper-pagination"></div>
        </div>
      </Swiper>
    </div>
  );
}

export default App;
