import { IoArrowBack } from "react-icons/io5";
import { FaXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { BiLogoTelegram } from "react-icons/bi";
import { HiMiniUserGroup } from "react-icons/hi2";
import { FaWallet } from "react-icons/fa";

import { useNavigate } from "react-router-dom";
const TaskComponent = () => {
    const navigate = useNavigate();
    const goBack = () => {
        navigate(-1);
    };
    return (
        <>
            {/* Task Intro */}
            <div className="space-y-2">
                <h1 className="text-white font-roachfont2 text-[22px] uppercase">task hub</h1>
                <p className="text-white font-roachfont2 font-[300] text-[20px] uppercase">earn more by <span className="text-roachgold font-[200]">completing tasks</span></p>
            </div>

            {/* Tasks */}
            <div className="bg-gray-500 bg-opacity-10 backdrop-blur-md px-6 py-3 rounded-md my-6">
                <div className="flex items-center justify-between border-b border-gray-300 py-4">
                    <div className="flex items-center space-x-3">
                        <div className="bg-gray-500 p-2 rounded-md">
                            <FaXTwitter className="text-[24px]" />
                        </div>
                        <div>
                            <p className="text-white font-roachfont1 text-[14px]">Follow channel</p>
                            <p className="text-gray-500 font-roachfont1 text-[12px]">+ 1,000 ROACH</p>
                        </div>
                    </div>
                    <button className="font-roachfont1 text-[12px] bg-white rounded-full font-[700] px-4 py-2">Start</button>

                </div>

                <div className="flex items-center justify-between border-b border-gray-300 py-4">
                    <div className="flex items-center space-x-3">
                        <div className="bg-red-600 p-2 rounded-md">
                            <FaYoutube className="text-[24px] text-white" />
                        </div>
                        <div>
                            <p className="text-white font-roachfont1 text-[14px]">Subscribe</p>
                            <p className="text-gray-500 font-roachfont1 text-[12px]">+ 1,000 ROACH</p>
                        </div>
                    </div>
                    <button className="font-roachfont1 text-[12px] bg-roachgold rounded-full font-[700] px-4 py-2">Claim</button>

                </div>

                <div className="flex items-center justify-between border-b border-gray-300 py-4">
                    <div className="flex items-center space-x-3">
                        <div className="bg-blue-600 p-2 rounded-md">
                            <BiLogoTelegram className="text-[24px] text-white" />
                        </div>
                        <div>
                            <p className="text-white font-roachfont1 text-[14px]">Follow channel</p>
                            <p className="text-gray-500 font-roachfont1 text-[12px]">+ 1,000 ROACH</p>
                        </div>
                    </div>
                    <button className="font-roachfont1 text-[12px] bg-white rounded-full font-[700] px-4 py-2">Start</button>

                </div>

                <div className="flex items-center justify-between border-b border-gray-300 py-4">
                    <div className="flex items-center space-x-3">
                        <div className="bg-green-600 p-2 rounded-md">
                            <HiMiniUserGroup className="text-[24px] text-white" />
                        </div>
                        <div>
                            <p className="text-white font-roachfont1 text-[14px]">Invite Friends</p>
                            <p className="text-gray-500 font-roachfont1 text-[12px]">+ 1,000 ROACH</p>
                        </div>
                    </div>
                    <button className="font-roachfont1 text-[12px] bg-roachgold rounded-full font-[700] py-2 px-4 text-center">Claim</button>

                </div>

                <div className="flex items-center justify-between py-4">
                    <div className="flex items-center space-x-3">
                        <div className="bg-black p-2 rounded-md">
                            <FaWallet className="text-[24px] text-white" />
                        </div>
                        <div>
                            <p className="text-white font-roachfont1 text-[14px]">Connect Wallet</p>
                            <p className="text-gray-500 font-roachfont1 text-[12px]">+ 1,000 ROACH</p>
                        </div>
                    </div>
                    <button className="font-roachfont1 text-[12px] bg-white rounded-full font-[700] text-center py-2 px-4">Start</button>

                </div>


                
            </div>

            {/* Back TabBar */}
            <div className="flex items-center justify-center ">
                <div className="fixed bottom-0 w-full z-[1000]">
                    <div className="flex items-center justify-center bg-white bg-opacity-10 backdrop-blur-md rounded-tr-[50px] rounded-tl-[50px] py-4 px-6 shadow-lg">
                        <div className="flex justify-center items-center cursor-pointer bg-[#ffffff25] py-[6px] px-6 shadow-lg rounded-[10px]" onClick={goBack}>
                            <IoArrowBack className="text-white text-[22px]" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default TaskComponent;