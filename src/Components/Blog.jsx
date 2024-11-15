import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';

import { FiPlus } from 'react-icons/fi';

const Blog = () => {
  const blogContent = [
    {
      title: "Window",
      image: "https://res.cloudinary.com/dpomtzref/image/upload/v1731661620/blog1_ib4snh.png",
      content: "consectetur adipiscing elit .",
    },
    {
      title: "Window",
      image: "https://res.cloudinary.com/dpomtzref/image/upload/v1731661495/blog2_ckq8g1.png",
      content: "Integer quis auctor elit .",
    },
    {
      title: "Window",
      image: "https://res.cloudinary.com/dpomtzref/image/upload/v1731661447/DALL_E_2024-11-15_15.04.20_-_A_cozy_indoor_setting_with_two_people_sitting_together_on_the_stairs_of_a_modern_home._They_are_casually_dressed_smiling_and_using_a_laptop_togethe_zjchmx.webp",
      content: "Sed vulputate mi sit amet mauris.",
    },
    {
        title: "Window",
        image: "https://res.cloudinary.com/dpomtzref/image/upload/v1731661620/blog1_ib4snh.png",
        content: " Pellentesque sit amet porttitor eget.",
      },
  ];

  return (
    <section className="my-20 px-4 md:px-32">
      <h1 className="text-3xl font-medium mx-6 ">BLOG</h1>
      <Swiper
        modules={[Navigation]}
        navigation
        slidesPerView={3}
        spaceBetween={20}
        loop={false}
        className="blog-slider"
        breakpoints={{
          320: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {blogContent.map((post, index) => (
          <SwiperSlide key={index} className="p-4 bg-white ">
            <div className="overflow-hidden relative ">
              <img src={post.image} alt={post.title} className="w-full h-64 object-cover" />
              <button className=' rounded-full absolute bottom-24 right-40 text-white h-14 w-14 text-2xl bg-[#EA4715] ' > <FiPlus className='flex justify-center items-center text-center mx-auto' /></button>
            </div>
            <h2 className="text-sm text-gray-600  mt-4">{post.title}</h2>
            <p className="mt-2 text-lg">{post.content}</p>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Blog;
