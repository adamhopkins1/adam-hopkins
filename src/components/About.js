import React from "react";

const About = () => {
    return (
        <div className="2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4">
            <div className="flex flex-col lg:flex-row justify-between gap-8">
                <div className="w-full lg:w-5/12 flex flex-col justify-center">
                    <h1 className="text-3xl lg:text-4xl font-bold leading-9 text-gray-800 pb-4">About Us</h1>
                    <p className="font-normal text-base leading-6 text-gray-600 ">We are a band of Verteran Journalists former GameSpot,IGN and VGC editors and writers who along with other editors and writers from around the game industry who want to write and create original thoguhtful content and features for readers to walk away and think about for days.</p>
                </div>
                <div className="w-full lg:w-8/12 ">
                    <img className="w-full h-full" src="https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/bfe0ccc984e0c32b095f50ce7eda6ae0.jpg" alt="A group of People" />
                </div>
            </div>

            <div className="flex lg:flex-row flex-col justify-between gap-8 pt-12">
                <div className="w-full lg:w-5/12 flex flex-col justify-center">
                    <h1 className="text-3xl lg:text-4xl font-bold leading-9 text-gray-800 pb-4">Our Story</h1>
                    <p className="font-normal text-base leading-6 text-gray-600 ">After our tenure with Gamespot ended we decided to form a new collective one that would start small and grow overtime into something meaningful and worthwhile we are only at year 0 but we intend to provide content for a long time beyond our original founding.We hope you enjoy our content and let us know how and what content to improve we are open to ideas. Thanks- TNB</p>
                </div>
                <div className="w-full lg:w-8/12 lg:pt-8">
                    <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 lg:gap-4 shadow-lg rounded-md">
                        <div className="p-4 pb-6 flex justify-center flex-col items-center">
                            <img className="md:block hidden" src="https://www.gamespot.com/a/uploads/square_small/1554/15543289/2869408-imag0684_1.jpg" alt="Richard featured Img" />
                            <img className="md:hidden block" src="https://www.gamespot.com/a/uploads/square_small/1554/15543289/2869408-imag0684_1.jpg" alt="Richard featured Img" />
                            <p className="font-medium text-xl leading-5 text-gray-800 mt-4">Richard</p>
                        </div>
                        <div className="p-4 pb-6 flex justify-center flex-col items-center">
                            <img className="md:block hidden" src="https://www.gamespot.com/a/uploads/square_small/43/434805/3829383-nti1mbr9_400x400.jpg" alt="Tamoor featured Img" />
                            <img className="md:hidden block" src="https://www.gamespot.com/a/uploads/square_small/43/434805/3829383-nti1mbr9_400x400.jpg" alt="Tamoor featured Img" />
                            <p className="font-medium text-xl leading-5 text-gray-800 mt-4">Tamoor</p>
                        </div>
                        <div className="p-4 pb-6 flex justify-center flex-col items-center">
                            <img className="md:block hidden" src="https://www.gamespot.com/a/uploads/square_small/1639/16394322/4022144-87ee8cb3-5a20-427b-a099-5e9403112e83.jpeg" alt="Jessica featued Img" />
                            <img className="md:hidden block" src="https://www.gamespot.com/a/uploads/square_small/1639/16394322/4022144-87ee8cb3-5a20-427b-a099-5e9403112e83.jpeg" alt="Jessica featued Img" />
                            <p className="font-medium text-xl leading-5 text-gray-800 mt-4">Jessica</p>
                        </div>
                        <div className="p-4 pb-6 flex justify-center flex-col items-center">
                            <img className="md:block hidden" src="https://www.gamespot.com/a/uploads/square_small/1632/16320660/3808497-0aa4b17b-dfe8-488c-aeda-e5de1b6bdfb8.jpeg" alt="Mark featured img" />
                            <img className="md:hidden block" src="https://www.gamespot.com/a/uploads/square_small/1632/16320660/3808497-0aa4b17b-dfe8-488c-aeda-e5de1b6bdfb8.jpeg" alt="Mark featured img" />
                            <p className="font-medium text-xl leading-5 text-gray-800 mt-4">Mark</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;