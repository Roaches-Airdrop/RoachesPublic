import UserDetails from "../User/User";
import {useState} from "react"

import useBalance from "../../hooks/useBalance";
import SlideUpModal from "../SlideUpModal"; 
// import { GiUpgrade } from "react-icons/gi";
import { IoArrowBack } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

const UpgradeTab = () => {
    const [isModalOpen, setModalOpen] = useState<boolean>(false);
    const { level, formattedBalance } = useBalance();
    const navigate = useNavigate();
    const goBack = () => {
        navigate(-1);
    };
    return (
        <>
            <div className="h-screen overflow-auto scrollbar-hide bg-gradient-to-b from-black via-gray-900 to-gray-800 to-100% px-6 pt-6 pb-24">
                <div className="flex items-center justify-between ">
                    <UserDetails
                    />
                    <button className="bg-gradient-to-r from-yellow-400 via-amber-600 to-yellow-400 text-center cursor-pointer font-roachfont1 capitalize text-[11px] text-white font-medium py-3 px-2 rounded-lg">connect wallet</button>
                </div>
                <div className="">
                    <div className="flex justify-center items-center bg-gray-500 bg-opacity-10 backdrop-blur-md space-y-6 my-6 px-4 py-7 rounded-lg">
                        <div>
                            <h3 className="font-roachfont2 text-white text-[20px] font-medium text-center">Balance</h3>
                            <p className="font-roachfont1 text-[18px] text-white font-medium text-center">{formattedBalance}<span className='text-roachgold'>{"ROACH"}</span></p>
                            <h3 className="font-roachfont2 text-white text-[20px] font-medium text-center">Level {level}</h3>
                        </div>

                    </div>
                </div>

                {/* Go pro */}
                <div className="bg-gradient-animation flex items-center justify-around py-3 rounded-md">
                    <img src="https://harlequin-top-puma-655.mypinata.cloud/ipfs/QmczUiz4qjLv7eBDENwBB7pHTUXx4sdkfW36U83Si3uGyN" alt="Roach" className="h-[12vh]" />
                    <div className="flex flex-col justify-center items-center space-y-2">
                        <h3 className="font-roachfont2 text-white font-thin text-[10px]">increase your mining power to earn more.</h3>
                        <span className="flex items-center justify-center space-x-2 bg-black py-2 w-[60%] rounded-lg" onClick={() => setModalOpen(true)}>
                            <p className="text-center cursor-pointer font-roachfont1 capitalize text-[14px] text-white font-bold" >Increase</p>
                            <img width={10} height={10} src="https://harlequin-legal-ox-300.mypinata.cloud/ipfs/QmNz3LhJbRCEuANaLWwCbFFYa7sgV5ESj5m79hPVqQnrBT" alt="" />
                        </span>
                    </div>
                </div>

                {/* Reward section */}
                <div className="my-6 bg-gray-500 bg-opacity-10 backdrop-blur-md space-y-3 p-3 rounded-md">
                    <div className="space-y-2">
                        <h3 className="font-roachfont1 text-[16px] text-white font-bold">Daily reward</h3>
                        <p className="font-roachfont1 text-[12px] text-white font-thin">Claim daily rewards every single day</p>
                    </div>
                    <div className="grid grid-cols-4 gap-4">
                        <div className="space-y-3 border-[2px] border-roachgold w-[100%] rounded-[6px] flex flex-col items-center justify-center py-3 cursor-pointer">
                            <h3 className="text-[10px] font-roachfont1 text-white font-thin">Day 1</h3>
                            <p className="text-[12px] font-roachfont1 text-white font-medium">200<span className="text-roachgold">ROACH</span></p>
                        </div>
                        <div className="space-y-3 border-[2px] border-roachgray w-[100%] rounded-[6px] flex flex-col items-center justify-center py-3 cursor-pointer">
                            <h3 className="text-[10px] font-roachfont1 text-white font-thin">Day 2</h3>
                            <p className="text-[12px] font-roachfont1 text-white font-medium">300<span className="text-roachgold">ROACH</span></p>
                        </div>
                        <div className="space-y-3 border-[2px] border-roachgray w-[100%] rounded-[6px] flex flex-col items-center justify-center py-3 cursor-pointer">
                            <h3 className="text-[10px] font-roachfont1 text-white font-thin">Day 3</h3>
                            <p className="text-[12px] font-roachfont1 text-white font-medium">450<span className="text-roachgold">ROACH</span></p>
                        </div>
                        <div className="space-y-3 border-[2px] border-roachgray w-[100%] rounded-[6px] flex flex-col items-center justify-center py-3 cursor-pointer">
                            <h3 className="text-[10px] font-roachfont1 text-white font-thin">Day 4</h3>
                            <p className="text-[12px] font-roachfont1 text-white font-medium">500<span className="text-roachgold">Roach</span></p>
                        </div>
                        <div className="space-y-3 border-[2px] border-roachgray w-[100%] rounded-[6px] flex flex-col items-center justify-center py-3 cursor-pointer">
                            <h3 className="text-[10px] font-roachfont1 text-white font-thin">Day 5</h3>
                            <p className="text-[12px] font-roachfont1 text-white font-medium">650<span className="text-roachgold">ROACH</span></p>
                        </div>
                        <div className="space-y-3 border-[2px] border-roachgray w-[100%] rounded-[6px] flex flex-col items-center justify-center py-3 cursor-pointer">
                            <h3 className="text-[10px] font-roachfont1 text-white font-thin">Day 6</h3>
                            <p className="text-[12px] font-roachfont1 text-white font-medium">800<span className="text-roachgold">ROACH</span></p>
                        </div>
                        <div className="space-y-3 border-[2px] border-roachgray w-[100%] rounded-[6px] flex flex-col items-center justify-center py-3 cursor-pointer">
                            <h3 className="text-[10px] font-roachfont1 text-white font-thin">Day 7</h3>
                            <p className="text-[12px] font-roachfont1 text-white font-medium">1000<span className="text-roachgold">ROACH</span></p>
                        </div>
                    </div>
                </div>

                {/* Airdrop Section */}
                <div className="mb-4 bg-gray-500 bg-opacity-10 backdrop-blur-md space-y-3 p-3 rounded-md">
                <div className="space-y-2">
                        <h3 className="font-roachfont1 text-[16px] text-white font-bold">Airdrop</h3>
                        <p className="font-roachfont2 text-[18px] text-white font-normal">Coming Soon...</p>
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
            </div>
            <SlideUpModal isOpen={isModalOpen} onClose={() => setModalOpen(false)} />
        </>
    );
}

export default UpgradeTab;