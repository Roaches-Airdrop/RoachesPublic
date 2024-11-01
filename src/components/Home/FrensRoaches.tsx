import UserDetails from "../User/User";
import { GiTwoCoins } from "react-icons/gi";
const FrensRoachesTab = () => {


    return (
        <>
            <div>
                <UserDetails
                />
                <div className="bg-gray-500 bg-opacity-10 backdrop-blur-md space-y-6 my-6 px-4 py-7 rounded-lg">
                    {/* invite section */}
                    <div className="flex flex-col justify-center items-center space-y-6">
                        <div className="flex justify-center items-center">
                            <img src="https://harlequin-top-puma-655.mypinata.cloud/ipfs/QmUdqPbBKGbjWa9Tvp64C9vHgR9ussVu1vPhCvdV2GpnuA" alt="Roach" className="h-[35vh]" />
                        </div>
                        <div className="space-y-6">
                            <h3 className="font-roachfont1 text-[18px] text-white font-medium text-center">Invite friends and earn 500<span className="text-roachgold uppercase">roach</span></h3>
                            <div className="flex justify-center items-center space-x-5">
                                <button className="bg-gradient-to-r from-yellow-400 via-amber-600 to-yellow-400 text-center cursor-pointer font-roachfont1 capitalize text-[16px] text-white font-medium py-3 w-[40%] rounded-lg">copy</button>
                                <button className="bg-gradient-to-r from-yellow-400 via-amber-600 to-yellow-400 text-center cursor-pointer font-roachfont1 capitalize text-[16px] text-white font-medium py-3 w-[40%] rounded-lg">share</button>
                            </div>
                        </div>
                    </div>

                    {/* Friends section */}
                    <div className="space-y-4 px-4">
                        <h2 className="capitalize font-roachfont2 text-white text-[18px] font-medium">friends</h2>
                        <div className="space-y-6">
                            <div className="flex items-center justify-between border-b border-gray-400 pb-4">
                                <div>
                                    <h3 className="capitalize font-roachfont1 text-[16px] font-medium text-white">Perry cyber</h3>
                                </div>
                                <div className="flex items-center bg-white bg-opacity-20 backdrop-blur-md rounded-lg max-w-md shadow-lg p-1">
                                    <h3 className="font-roachfont2 text-[14px] font-medium text-white">90 </h3>
                                    <GiTwoCoins className="text-roachgold text-[22px]" />
                                </div>
                            </div>
                            <div className="flex items-center justify-between border-b border-gray-400 pb-4">
                                <div>
                                    <h3 className="capitalize font-roachfont1 text-[16px] font-medium text-white">P tech</h3>
                                </div>
                                <div className="flex items-center bg-white bg-opacity-20 backdrop-blur-md rounded-lg max-w-md shadow-lg p-1">
                                    <h3 className="font-roachfont2 text-[14px] font-medium text-white">60 </h3>
                                    <GiTwoCoins className="text-roachgold text-[22px]" />
                                </div>
                            </div>
                            <div className="flex items-center justify-between border-b border-gray-400 pb-4">
                                <div>
                                    <h3 className="capitalize font-roachfont1 text-[16px] font-medium text-white">I concepts</h3>
                                </div>
                                <div className="flex items-center bg-white bg-opacity-20 backdrop-blur-md rounded-lg max-w-md shadow-lg p-1">
                                    <h3 className="font-roachfont2 text-[14px] font-medium text-white">70 </h3>
                                    <GiTwoCoins className="text-roachgold text-[22px]" />
                                </div>
                            </div>
                        </div>
                        <h3 className="font-roachfont1 text-white text-[13px] font-medium text-center pt-6">You are already a referral, invited by <span className="capitalize text-roachgold">B Dev</span></h3>
                    </div>
                </div>
            </div>
        </>
    );
}

export default FrensRoachesTab;