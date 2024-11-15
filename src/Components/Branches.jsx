import { useState } from 'react';

const Branches = () => {
  const [selectedBranch, setSelectedBranch] = useState(null);
  const [activeBranchIndex, setActiveBranchIndex] = useState(null); 


  const branches = [
    {
      name: "Dhanmondi Branch",
      address: "Green Plaza, 4th Floor Plot-8, Road-5/A Satmasjid Road, Dhanmondi, Dhaka-1209",
      phone: "+880-2-000000",
      mobile: "+8801234567890",
      style: { top: '50%', left: '45%' },
    },
    {
      name: "Motijheel Branch",
      address: "Rokon Bhaban, 2nd Floor Room No 205, 49 Motijheel C/A Dhaka-1000",
      phone: "+880-2-111111",
      mobile: "+8801234567891",
      style: { top: '55%', left: '50%' },
    },
  ];

  const handleMouseEnter = (branch, index) => {
    setSelectedBranch(branch);
    setActiveBranchIndex(index);
  };

  const handleMouseLeave = () => {
    setActiveBranchIndex(null); 
  };

  return (
    <section className="bg-[#F6F6F6] py-10">
      <h1 className="text-center text-3xl">Our Branches</h1>
      <p className="text-center text-[15px] md:w-1/2 mx-auto pt-5">
        Explore our wide range of branches across the country, offering exceptional customer service and convenient locations for all your needs.
      </p>

      <div className="relative flex justify-center pt-10">
        <img
          src="https://i.ibb.co.com/wdTYLys/map-removebg-preview.png"
          alt="Bangladesh Map"
          className="w-full max-w-4xl"
        />

        <div className="absolute grid grid-cols-1 gap-4 top-1/3">
          {branches.map((branch, index) => (
            <div 
              key={index} 
              className="relative"
              onMouseEnter={() => handleMouseEnter(branch, index)}
              onMouseLeave={handleMouseLeave}
            >
              <button
                className="flex bg-[#FF5533] p-2 rounded-lg flex-col items-center"
                style={branch.style}
              >
                <div className="border-2 border-[#78CFFF] rounded-full shadow-lg relative">
                  <div className="p-1 bg-white rounded-full">
                    <img className="h-4" src="https://i.ibb.co.com/HxMkTdf/5468749-booth-callbox-phone-telephone-icon-2.png" alt="" />
                  </div>
                </div>
                <span className="mt-1 text-xs font-semibold text-white px-2 py-1 rounded-full">
                  {branch.name}
                </span>
              </button>

             
              {activeBranchIndex === index && (
                <div
                  className="absolute md:left-32 -left-20 mt-10 md:mt-2 w-60 bg-white z-50 p-4 rounded-lg shadow-lg transition-transform duration-300 ease-in-out transform scale-y-100 origin-top"
                >
                  <h2 className="text-lg font-semibold text-[#333]">{branch.name}</h2>
                  <p className="text-gray-600">{branch.address}</p>
                  <p className="text-gray-600 mt-1">Phone: {branch.phone}</p>
                  <p className="text-gray-600 mt-1">Mobile: {branch.mobile}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Branches;
