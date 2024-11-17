
import mapImg from "../assets/map.png"
import { PiBuildingsBold } from "react-icons/pi";
import { HiMapPin } from "react-icons/hi2";
import { MdCall } from "react-icons/md";


const Branches = () => {
    return (
        <div className='w-full pt-20 pb-16 bg-transparent '>
            <div className='max-w-[650px] text-black mx-auto text-center'>
                <h1 className='text-[32px]'>Our Branches</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</p>
            </div>
            <div>
                <div className='flex justify-center items-center w-full mt-10 relative'>
                    <img src={mapImg} alt="" />
                    {/* Dhaka Outlet */}
                    <div className='group top-[42%] left-[49%] absolute'>
                        <div className='h-10 w-10 bg-transparent cursor-pointer'></div>
                        <div className='w-[300px] p-5 bg-[#efefef] rounded-lg  mt-[-8px] hidden group-hover:block ml-[-130px] md:ml-4'>
                            <div>
                                <h1 className='flex gap-3 text-xl font-semibold justify-start items-center'> <span className='text-3xl text-[#EA4715]'> <PiBuildingsBold /> </span> Dhaka Branches</h1>
                                <hr className='my-3 border-gray-300'></hr>
                                <div className='p-5 mt-2 bg-white rounded-md'>
                                    <h3 className='text-lg font-semibold'>Dhanmondi Branch</h3>
                                    <hr className='my-3 border-gray-300'></hr>
                                    <div className='flex justify-start gap-2'>
                                        <div className='p-3 h-10 w-10 flex justify-center items-center border rounded-full text-[#EA4715]'>
                                            <HiMapPin />
                                        </div>
                                        <div>
                                            <p>Green Plaza, 4th Floor Plot-B, Road-8/A Satmasjid Road, Dhanmondi, Dhaka-1209</p>
                                        </div>
                                    </div>
                                    <div className='flex justify-start gap-2 mt-2'>
                                        <div className='p-3 h-10 w-10 flex justify-center items-center border rounded-full text-[#EA4715]'>
                                            <MdCall />
                                        </div>
                                        <div>
                                            <p>+880-4-0937432 <br></br> +8809370272634</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='p-5 mt-3 bg-white rounded-md'>
                                    <h3 className='text-lg font-semibold'>Motijheel Branch</h3>
                                    <hr className='my-3 border-gray-300'></hr>
                                    <div className='flex justify-start gap-2'>
                                        <div className='p-3 h-10 w-10 flex justify-center items-center border rounded-full text-[#EA4715]'>
                                            <HiMapPin />
                                        </div>
                                        <div>
                                            <p>Rokon Bhaban, 2nd Floor Room # 205, 49 Motijheel C/A Dhaka-1000</p>
                                        </div>
                                    </div>
                                    <div className='flex justify-start gap-2 mt-2'>
                                        <div className='p-3 h-10 w-10 flex justify-center items-center border rounded-full text-[#EA4715]'>
                                            <MdCall />
                                        </div>
                                        <div>
                                            <p>+880028397732
                                                <br></br> +880289376378</p>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                    {/* Comilla Outlet */}
                    <div className='group top-[46%] left-[54%] absolute'>
                        <div className='h-10 w-10 bg-transparent cursor-pointer'></div>
                        <div className='w-[300px] p-5 bg-gray-100 rounded-lg mt-[-8px] hidden group-hover:block ml-[-130px] md:ml-4 '>
                            <div>
                                <h1 className='flex gap-3 text-xl font-semibold justify-start items-center'> <span className='text-3xl text-[#EA4715]'> <PiBuildingsBold /> </span> Comilla Branches</h1>
                                <hr className='my-3 border-gray-300'></hr>
                                <div className='p-5 mt-2 bg-white rounded-md'>
                                    <h3 className='text-lg font-semibold'>Comilla Branch</h3>
                                    <hr className='my-3 border-gray-300'></hr>
                                    <div className='flex justify-start gap-2'>
                                        <div className='p-3 h-10 w-10 flex justify-center items-center border rounded-full text-[#EA4715]'>
                                            <HiMapPin />
                                        </div>
                                        <div>
                                            <p>Green Plaza, 4th Floor Plot-B, Road-8/A Satmasjid Road, Comilla.</p>
                                        </div>
                                    </div>
                                    <div className='flex justify-start gap-2 mt-2'>
                                        <div className='p-3 h-10 w-10 flex justify-center items-center border rounded-full text-[#EA4715]'>
                                            <MdCall />
                                        </div>
                                        <div>
                                            <p>+880-4-0937432 <br></br> +8809370272634</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='p-5 mt-2 bg-white rounded-md'>
                                    <h3 className='text-lg font-semibold'>Comilla Branch</h3>
                                    <hr className='my-3 border-gray-300'></hr>
                                    <div className='flex justify-start gap-2'>
                                        <div className='p-3 h-10 w-10 flex justify-center items-center border rounded-full text-[#EA4715]'>
                                            <HiMapPin />
                                        </div>
                                        <div>
                                            <p>Green Plaza, 4th Floor Plot-B, Road-8/A Satmasjid Road, Comilla.</p>
                                        </div>
                                    </div>
                                    <div className='flex justify-start gap-2 mt-2'>
                                        <div className='p-3 h-10 w-10 flex justify-center items-center border rounded-full text-[#EA4715]'>
                                            <MdCall />
                                        </div>
                                        <div>
                                            <p>+880-4-0937432 <br></br> +8809370272634</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Chandpur Outlet */}
                    <div className='group top-[51%] left-[52%] absolute'>
                        <div className='h-10 w-10 bg-transparent cursor-pointer'></div>
                        <div className='w-[300px] p-5 bg-gray-100 rounded-lg mt-[-8px] hidden group-hover:block ml-[-100px] md:ml-4'>
                            <div>
                                <h1 className='flex gap-3 text-xl font-semibold justify-start items-center'> <span className='text-3xl text-[#EA4715]'> <PiBuildingsBold /> </span> Chandpur Branches</h1>
                                <hr className='my-3 border-gray-300'></hr>
                                <div className='p-5 mt-2 bg-white rounded-md'>
                                    <h3 className='text-lg font-semibold'>Chandpur Branch</h3>
                                    <hr className='my-3 border-gray-300'></hr>
                                    <div className='flex justify-start gap-2'>
                                        <div className='p-3 h-10 w-10 flex justify-center items-center border rounded-full text-[#EA4715]'>
                                            <HiMapPin />
                                        </div>
                                        <div>
                                            <p>Green Plaza, 4th Floor Plot-B, Road-8/A Satmasjid Road, Chandpur.</p>
                                        </div>
                                    </div>
                                    <div className='flex justify-start gap-2 mt-2'>
                                        <div className='p-3 h-10 w-10 flex justify-center items-center border rounded-full text-[#EA4715]'>
                                            <MdCall />
                                        </div>
                                        <div>
                                            <p>+880-4-0937432 <br></br> +8809370272634</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='p-5 mt-2 bg-white rounded-md'>
                                    <h3 className='text-lg font-semibold'>Chandpur Branch</h3>
                                    <hr className='my-3 border-gray-300'></hr>
                                    <div className='flex justify-start gap-2'>
                                        <div className='p-3 h-10 w-10 flex justify-center items-center border rounded-full text-[#EA4715]'>
                                            <HiMapPin />
                                        </div>
                                        <div>
                                            <p>Green Plaza, 4th Floor Plot-B, Road-8/A Satmasjid Road, Chandpur.</p>
                                        </div>
                                    </div>
                                    <div className='flex justify-start gap-2 mt-2'>
                                        <div className='p-3 h-10 w-10 flex justify-center items-center border rounded-full text-[#EA4715]'>
                                            <MdCall />
                                        </div>
                                        <div>
                                            <p>+880-4-0937432 <br></br> +8809370272634</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* kishoreganj Outlet */}
                    <div className='group top-[32%] left-[53%] absolute'>
                        <div className='h-10 w-10 bg-transparent cursor-pointer'></div>
                        <div className='w-[300px] p-5 bg-gray-100 rounded-lg mt-[-8px] hidden group-hover:block ml-[-130px] md:ml-4'>
                            <div>
                                <h1 className='flex gap-3 text-xl font-semibold justify-start items-center'> <span className='text-3xl text-[#EA4715]'> <PiBuildingsBold /> </span> Kishoreganj Branches</h1>
                                <hr className='my-3 border-gray-300'></hr>
                                <div className='p-5 mt-2 bg-white rounded-md'>
                                    <h3 className='text-lg font-semibold'>Kishoreganj Branch</h3>
                                    <hr className='my-3 border-gray-300'></hr>
                                    <div className='flex justify-start gap-2'>
                                        <div className='p-3 h-10 w-10 flex justify-center items-center border rounded-full text-[#EA4715]'>
                                            <HiMapPin />
                                        </div>
                                        <div>
                                            <p>Green Plaza, 4th Floor Plot-B, Road-8/A Satmasjid Road, Comilla.</p>
                                        </div>
                                    </div>
                                    <div className='flex justify-start gap-2 mt-2'>
                                        <div className='p-3 h-10 w-10 flex justify-center items-center border rounded-full text-[#EA4715]'>
                                            <MdCall />
                                        </div>
                                        <div>
                                            <p>+880-4-0937432 <br></br> +8809370272634</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='p-5 mt-2 bg-white rounded-md'>
                                    <h3 className='text-lg font-semibold'>Kishoreganj Branch</h3>
                                    <hr className='my-3 border-gray-300'></hr>
                                    <div className='flex justify-start gap-2'>
                                        <div className='p-3 h-10 w-10 flex justify-center items-center border rounded-full text-[#EA4715]'>
                                            <HiMapPin />
                                        </div>
                                        <div>
                                            <p>Green Plaza, 4th Floor Plot-B, Road-8/A Satmasjid Road, Comilla.</p>
                                        </div>
                                    </div>
                                    <div className='flex justify-start gap-2 mt-2'>
                                        <div className='p-3 h-10 w-10 flex justify-center items-center border rounded-full text-[#EA4715]'>
                                            <MdCall />
                                        </div>
                                        <div>
                                            <p>+880-4-0937432 <br></br> +8809370272634</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Jessore Outlet */}
                    <div className='group top-[54%] left-[22%] md:left-[41%] absolute'>
                        <div className='h-10 w-10 bg-transparent cursor-pointer'></div>
                        <div className='w-[300px] p-5 bg-gray-100 rounded-lg ml-4 mt-[-8px] hidden group-hover:block '>
                        <div>
                                <h1 className='flex gap-3 text-xl font-semibold justify-start items-center'> <span className='text-3xl text-[#EA4715]'> <PiBuildingsBold /> </span> Jessore Branches</h1>
                                <hr className='my-3 border-gray-300'></hr>
                                <div className='p-5 mt-2 bg-white rounded-md'>
                                    <h3 className='text-lg font-semibold'>Jessore Branch</h3>
                                    <hr className='my-3 border-gray-300'></hr>
                                    <div className='flex justify-start gap-2'>
                                        <div className='p-3 h-10 w-10 flex justify-center items-center border rounded-full text-[#EA4715]'>
                                            <HiMapPin />
                                        </div>
                                        <div>
                                            <p>Green Plaza, 4th Floor Plot-B, Road-8/A Satmasjid Road, Jessore.</p>
                                        </div>
                                    </div>
                                    <div className='flex justify-start gap-2 mt-2'>
                                        <div className='p-3 h-10 w-10 flex justify-center items-center border rounded-full text-[#EA4715]'>
                                            <MdCall />
                                        </div>
                                        <div>
                                            <p>+880-4-0937432 <br></br> +8809370272634</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='p-5 mt-2 bg-white rounded-md'>
                                    <h3 className='text-lg font-semibold'>Jessore Branch</h3>
                                    <hr className='my-3 border-gray-300'></hr>
                                    <div className='flex justify-start gap-2'>
                                        <div className='p-3 h-10 w-10 flex justify-center items-center border rounded-full text-[#EA4715]'>
                                            <HiMapPin />
                                        </div>
                                        <div>
                                            <p>Green Plaza, 4th Floor Plot-B, Road-8/A Satmasjid Road, Jessore.</p>
                                        </div>
                                    </div>
                                    <div className='flex justify-start gap-2 mt-2'>
                                        <div className='p-3 h-10 w-10 flex justify-center items-center border rounded-full text-[#EA4715]'>
                                            <MdCall />
                                        </div>
                                        <div>
                                            <p>+880-4-0937432 <br></br> +8809370272634</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Sirajganj Outlet */}
                    <div className='group top-[32%] left-[43%] absolute'>
                        <div className='h-10 w-10 bg-transparent cursor-pointer'></div>
                        <div className='w-[300px] p-5 bg-gray-100 rounded-lg mt-[-8px] hidden group-hover:block ml-[-100px] md:ml-4'>
                        <div>
                                <h1 className='flex gap-3 text-xl font-semibold justify-start items-center'> <span className='text-3xl text-[#EA4715]'> <PiBuildingsBold /> </span> Sirajganj Branches</h1>
                                <hr className='my-3 border-gray-300'></hr>
                                <div className='p-5 mt-2 bg-white rounded-md'>
                                    <h3 className='text-lg font-semibold'>Sirajganj Branch</h3>
                                    <hr className='my-3 border-gray-300'></hr>
                                    <div className='flex justify-start gap-2'>
                                        <div className='p-3 h-10 w-10 flex justify-center items-center border rounded-full text-[#EA4715]'>
                                            <HiMapPin />
                                        </div>
                                        <div>
                                            <p>Green Plaza, 4th Floor Plot-B, Road-8/A Satmasjid Road, Sirajganj.</p>
                                        </div>
                                    </div>
                                    <div className='flex justify-start gap-2 mt-2'>
                                        <div className='p-3 h-10 w-10 flex justify-center items-center border rounded-full text-[#EA4715]'>
                                            <MdCall />
                                        </div>
                                        <div>
                                            <p>+880-4-0937432 <br></br> +8809370272634</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='p-5 mt-2 bg-white rounded-md'>
                                    <h3 className='text-lg font-semibold'>Sirajganj Branch</h3>
                                    <hr className='my-3 border-gray-300'></hr>
                                    <div className='flex justify-start gap-2'>
                                        <div className='p-3 h-10 w-10 flex justify-center items-center border rounded-full text-[#EA4715]'>
                                            <HiMapPin />
                                        </div>
                                        <div>
                                            <p>Green Plaza, 4th Floor Plot-B, Road-8/A Satmasjid Road, Sirajganj.</p>
                                        </div>
                                    </div>
                                    <div className='flex justify-start gap-2 mt-2'>
                                        <div className='p-3 h-10 w-10 flex justify-center items-center border rounded-full text-[#EA4715]'>
                                            <MdCall />
                                        </div>
                                        <div>
                                            <p>+880-4-0937432 <br></br> +8809370272634</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Tangail Outlet */}
                    <div className='group top-[34%] left-[46%] absolute'>
                        <div className='h-10 w-10 bg-transparent cursor-pointer'></div>
                        <div className='w-[300px] p-5 bg-gray-100 rounded-lg ml-4 mt-[-8px] hidden group-hover:block '>
                        <div>
                                <h1 className='flex gap-3 text-xl font-semibold justify-start items-center'> <span className='text-3xl text-[#EA4715]'> <PiBuildingsBold /> </span> Tangail Branches</h1>
                                <hr className='my-3 border-gray-300'></hr>
                                <div className='p-5 mt-2 bg-white rounded-md'>
                                    <h3 className='text-lg font-semibold'>Tangail Branch</h3>
                                    <hr className='my-3 border-gray-300'></hr>
                                    <div className='flex justify-start gap-2'>
                                        <div className='p-3 h-10 w-10 flex justify-center items-center border rounded-full text-[#EA4715]'>
                                            <HiMapPin />
                                        </div>
                                        <div>
                                            <p>Green Plaza, 4th Floor Plot-B, Road-8/A Satmasjid Road, Tangail.</p>
                                        </div>
                                    </div>
                                    <div className='flex justify-start gap-2 mt-2'>
                                        <div className='p-3 h-10 w-10 flex justify-center items-center border rounded-full text-[#EA4715]'>
                                            <MdCall />
                                        </div>
                                        <div>
                                            <p>+880-4-0937432 <br></br> +8809370272634</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='p-5 mt-2 bg-white rounded-md'>
                                    <h3 className='text-lg font-semibold'>Tangail Branch</h3>
                                    <hr className='my-3 border-gray-300'></hr>
                                    <div className='flex justify-start gap-2'>
                                        <div className='p-3 h-10 w-10 flex justify-center items-center border rounded-full text-[#EA4715]'>
                                            <HiMapPin />
                                        </div>
                                        <div>
                                            <p>Green Plaza, 4th Floor Plot-B, Road-8/A Satmasjid Road, Tangail.</p>
                                        </div>
                                    </div>
                                    <div className='flex justify-start gap-2 mt-2'>
                                        <div className='p-3 h-10 w-10 flex justify-center items-center border rounded-full text-[#EA4715]'>
                                            <MdCall />
                                        </div>
                                        <div>
                                            <p>+880-4-0937432 <br></br> +8809370272634</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Branches;