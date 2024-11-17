import { useState } from "react";
import { LuPlus } from "react-icons/lu";

const Projects = () => {

  const [isHovered, setIsHovered] = useState(false);


  const data = [
    {
      head: 'Residential',
      img: 'https://i.postimg.cc/VvqBjBt4/Rectangle-46.png',
      title: "Commercial",
      des: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod dolor sit amet, consectetur adipiscing elit',
      num: '928 367 3789'
    },
    {
      gap: true
    },
    {
      head: "Commercial",
      img: 'https://i.postimg.cc/TYjCmGqG/Rectangle-44.png',
      title: "Commercial",
      des: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod dolor sit amet, consectetur adipiscing elit',
      num: '928 367 3789'
    },
    {
      gap: true
    },
    {
      head: "Duplex",
      img: 'https://i.postimg.cc/KYWNFYF7/Rectangle-45.png',
      title: "Commercial",
      des: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod Lorem  adipiscing elit, sed do eiusmod',
      num: '928 367 3789'
    }
  ]


  return (
    <div>
      <div className="bg-[#5C5C5C] min-h-[576px] w-full px-20 xl:block hidden">
        <div className="max-w-[1366px] xl:flex justify-evenly items-center gap-20 mx-auto h-full">
          {data.map((item, index) => (
            <div key={index} className="relative xl:h-[576px] group">
              {
                item.gap ? <div className={`border-x border-[#747474] transition-all duration-500 h-[350px] xl:mt-[145px] xl:block hidden ${isHovered && "xl:opacity-0 hidden"}`}>
                </div> :
                  <div onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                    className="xl:block flex"
                  >
                    {/* Image */}
                    
                    <div className="relative xl:mb-0 mb-5">
                      {
                        index === 0 &&
                        <h4 className="uppercase text-white absolute transition-all duration-700 top-[-50px] group-hover:top-[90px] left-0 group-hover:left-[120%] text-nowrap">Projects We have done</h4>
                      }
                      <h2 className="text-[32px] transition-all duration-700 group-hover:text-[24px] font-thin text-white absolute bottom-16 group-hover:bottom-[-65px] group-hover:left-[38px] -left-10 z-10">{item.head}</h2>
                      <img
                        src={item.img}
                        alt="Sample"
                        className="xl:w-[280px] w-screen h-[350px] object-cover transition-all duration-700 group-hover:w-[416px] group-hover:h-[300px] xl:mt-[146px] group-hover:mt-0"
                      />
                      <div className="bg-[#EA4715] cursor-pointer p-7 rounded-full transition-all duration-500 absolute right-8 bottom-[30px] group-hover:opacity-100 opacity-0">
                        <LuPlus className="text-[24px] text-white" />
                      </div>
                    </div>

                    {/* Details Overlay */}
                    
                    <div className="xl:absolute bottom-0 left-0 w-full h-0 overflow-hidden bg-[#393939] bg-opacity-60 text-white flex items-center justify-center opacity-0 xl:group-hover:h-[276px] group-hover:h-[300px] group-hover:opacity-100 transition-all duration-700">

                      <div className="mt-[-25px]">
                        <h3 className="text-[24px] px-10 pb-8 opacity-0">{item.head}</h3>
                        <p className="text-[12px] pl-10 pb-10 pr-20 text-[#C4C4C4] text-left">{item.des}</p>
                        <hr className="border border-white border-opacity-10" />
                        <p className="text-[15px] px-10 pt-8 text-[#C4C4C4] text-left">{item.num}</p>
                      </div>
                    </div>
                  </div>
              }
            </div>
          ))}
        </div>
      </div>


      <div className="bg-[#5C5C5C] min-h-[576px] w-full py-10 px-5 xl:hidden">
        <h4 className="uppercase text-white text-center py-10 pb-20">Projects We have done</h4>
        <div className="max-w-full lg:max-w-[1366px] md:grid md:grid-cols-2 gap-5 mx-auto h-full">
          {data.filter(item => !item.gap).map((item, index) => (
            <div key={index} className={`relative group w-full md:mb-0 mb-5 ${index == 2 && "col-span-2"}`}>
              {
                item.gap ? (
                  <div className={`hidden opacity-0 border-none`}>
                  </div>
                ) : (
                  <div>
                    <div className="relative">
                      <h2 className="text-[32px] transition-all z-[100] group-hover:hidden duration-700 font-thin text-white absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
                        {item.head}
                      </h2>
                      <div className="relative">
                        <img
                          src={item.img}
                          alt="Sample"
                          className="w-screen h-[300px] object-cover"
                        />
                        <div className="bg-black absolute w-full h-full top-0 opacity-40"></div>
                      </div>

                      <div className="absolute top-0 left-0 w-full h-0 overflow-hidden bg-[#393939] bg-opacity-80 text-white flex items-center justify-center opacity-0  group-hover:h-[300px] group-hover:opacity-100 transition-all duration-700">
                        <div className="bg-[#EA4715] cursor-pointer p-7 rounded-full transition-all duration-500 absolute right-8 bottom-8 group-hover:opacity-100 opacity-0">
                          <LuPlus className="text-[24px] text-white" />
                        </div>
                        <div className="mt-[-25px]">
                          <h3 className="text-[24px] px-10 pb-8">{item.head}</h3>
                          <p className="text-[15px] px-10 pb-10 text-[#C4C4C4]">{item.des}</p>
                          <hr className="border border-white border-opacity-10" />
                          <p className="text-[15px] px-10 pt-8 text-[#C4C4C4]">{item.num}</p>
                        </div>
                      </div>
                    </div>
                  </div>
              )
              }
            </div>
          ))}
        </div>


      </div>
    </div>

  );
};

export default Projects;