import UserDetails from "../User/User";
import RoachProfile from "../../assets/roaches/roachprofile.png";
import RoachCoin from "../../assets/roaches/roachsplash2.png"
import useBalance from "../../hooks/useBalance";
import ProgressBar from "../ProgressBar/ProgressBar";
import { GoChecklist } from "react-icons/go";
import { FaWallet } from "react-icons/fa";
import { Link } from "react-router-dom";
const NewHome = () => {
    const { level, progress, formattedBalance } = useBalance();
    return ( 
        <>
        <div>
            {/* Username and Level/Progress */}
            <div className="flex justify-between items-center">
                <div className="flex-1">
                <UserDetails
            roachimg={RoachProfile}
            imgStyle="bg-gradient-to-l from-black via-yellow-900 to-black to-100%"
            />
                </div>
                <div className="flex-1 space-y-1">
                <ProgressBar progress={progress} />
                <div className="flex justify-between items-center">
                    <p className="text-white font-roachfont2 text-[10px]">Level</p>
                    <p className="text-white font-roachfont1 text-[10px]">{level}</p>
                </div>
                </div>

            </div>
            
            {/* Balance */}
            <div className="flex flex-col justify-center items-center bg-gray-500 bg-opacity-10 backdrop-blur-md px-4 py-7 space-y-2 rounded-lg my-6">
                <h2 className="text-white font-roachfont2 text-[18px] uppercase">balance</h2>
                <img src={RoachCoin} alt="Roach Coin" className="h-[80px] w-[80px]"/>
                <p className="text-white font-roachfont1 text-[16px]">{formattedBalance}</p>
                <p className="text-white font-roachfont1 text-[16px]">$<span className="text-roachgold">ROACH</span></p>
            </div>

            {/* Task Prompt */}
            <div className="bg-gradient-animation py-4 rounded-md mb-6">
                <div className="flex flex-col justify-center items-center">
                <span className="flex items-center justify-center space-x-2 bg-white py-2 w-[60%] rounded-lg">
                            <Link to="/tasks" className="text-center cursor-pointer font-roachfont1 capitalize text-[14px] text-black font-bold">Task Hub</Link>
                            <GoChecklist />
                        </span>
                </div>
            </div>
            {/* Connect Wallet */}
            <div className="bg-gray-500 bg-opacity-10 backdrop-blur-md py-4 mb-6 rounded-lg">
            <div className="flex flex-col justify-center items-center">
            <span className="bg-white text-center cursor-pointer flex items-center justify-center space-x-2 py-3 w-[80%] rounded-lg">
                <p className="font-roachfont1 capitalize text-[16px] text-black font-[600]">connect wallet</p>
                <FaWallet />
            </span>
            </div>
            </div>
        </div>
        
        </>
     );
}
 
export default NewHome;