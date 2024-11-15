import { useState } from "react";

const About = () => {
  const slides = [
    {
      image:
        "https://res.cloudinary.com/dpomtzref/image/upload/v1731549470/about1_egnxwt.png",
      number: 1,
      title: `Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      image:
        "https://res.cloudinary.com/dpomtzref/image/upload/v1731549807/about2_mhm152.png",
      number: 2,
      title: `Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      image:
        "https://res.cloudinary.com/dpomtzref/image/upload/v1731549470/about1_egnxwt.png",
      number: 3,
      title: `Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      image:
        "https://res.cloudinary.com/dpomtzref/image/upload/v1731549807/about2_mhm152.png",
      number: 4,
      title: `Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const handleNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const current = slides[currentSlide];

  return (
    <section className="my-20 h-auto md:h-[637px]">
      <div>
        <h1 className="text-center text-4xl font-medium">About us</h1>
        <p className="text-center text-base mt-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut
          <br className="hidden md:block" /> labore et dolore magna aliqua. Ut
          enim ad minim veniam, quis nostrud exercitation.
        </p>
      </div>

      <div className="md:px-64 px-4 flex flex-col md:flex-row pt-8 items-center md:space-x-6">
        <div className="w-full md:w-2/3 flex justify-center md:justify-start">
          <div className="relative">
            <div className="relative w-full h-[400px] md:h-[488px] flex items-center justify-center">
              <img
                src={current.image}
                alt="About Slide"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="absolute top-0 left-1/2 md:left-[90.5%] transform -translate-x-1/2 md:translate-x-0">
              <div className="relative mx-auto">
                <div
                  className="absolute w-[120px] h-[120px] md:w-[248px] md:h-[248px] border-2 top-[11.4%] rounded-full"
                  style={{
                    borderColor: `conic-gradient(#000000 75%, #ECECEC 0%)`,
                  }}
                ></div>

                <div className="w-[100px] h-[200px] md:w-[156px] md:h-[323px]  md:bg-[#EA4715] bg-transparent ml-4 md:ml-12">
                  <div className="relative">
                    <div className="flex flex-col justify-center items-center text-white pt-10 md:pt-24 w-16 mx-auto">
                      <p className="text-center text-6xl md:text-8xl font-extralight">
                        {current.number}
                      </p>
                      <span className="text-xs">/ Four</span>
                    </div>

                    <button
                      onClick={handleNextSlide}
                      className="absolute md:top-36 top-[70px] left-[34%] md:left-14 transform -translate-y-1/2"
                    >
                      <img
                        className="h-4 w-8 md:w-12"
                        src="https://res.cloudinary.com/dpomtzref/image/upload/v1731570541/arrow-right.png"
                        alt="Next"
                      />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full md:w-1/3 mt-10 md:mt-[224px] space-y-6 text-center md:text-left">
          <h5 className="text-xl">{current.title}</h5>
          <p className="text-sm">{current.description}</p>
          <button className="px-8 py-4 bg-[#000000] uppercase text-white text-xs rounded-sm transition">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;
