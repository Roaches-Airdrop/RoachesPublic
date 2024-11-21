import { useState } from "react";
import Coin from "../../assets/others/dollar.png";
import { GiMining } from "react-icons/gi";
import { MdOutlineLeaderboard } from "react-icons/md";
import { SiCockroachlabs } from "react-icons/si";
import { GrUpgrade } from "react-icons/gr";
import FrensRoachesTab from "../Home/FrensRoaches";
import UpgradeTab from "../Home/UpgradeTab";
import NewHome from "../Home/NewHome";
import Mine from "../Home/Mine";
import Ranks from "../Home/Ranks";

const TabBar = () => {
    const [selectedTab, setSelectedTab] = useState<string>('Earn')
    
    return ( 
        <>
        <div className="flex items-center justify-center ">
        <div className="fixed bottom-0 w-full z-[1000]">
            <div className="flex items-center justify-between bg-white bg-opacity-10 backdrop-blur-md rounded-tr-[20px]  rounded-tl-[20px] py-4 px-6 shadow-lg">
            <div onClick={() => setSelectedTab("Earn")} className={`flex flex-col  py-[6px] px-6  justify-center items-center cursor-pointer ${
                selectedTab === "Earn" ? "bg-[#ffffff25] py-[6px] px-4 shadow-lg rounded-[10px]" : ""
            }`}>
            <img src={Coin} alt="coin" className="h-4"/>
                <p className={`text-center font-roachfont1 text-white text-[10px]`}>Earn</p>
            </div>
            <div onClick={() => setSelectedTab("Mine")} className={`flex flex-col  py-[6px] px-6  justify-center items-center cursor-pointer ${
                selectedTab === "Mine" ? "bg-[#ffffff25] py-[6px] px-4 shadow-lg rounded-[10px]" : ""
            }`}>
            <GiMining  className="text-white text-[20px]"/>
                <p className={`text-center font-roachfont1 text-white text-[10px]`}>Mine</p>
            </div>
            <div onClick={() => setSelectedTab("FrensRoaches")} className={`flex  py-[6px] px-6  flex-col justify-center items-center cursor-pointer ${
                 selectedTab === "FrensRoaches" ? "bg-[#ffffff25] py-[6px] px-4 shadow-lg rounded-[10px]" : ""
            }`}>
            <SiCockroachlabs  className="text-white text-[20px]"/>
                    <p className={`text-center font-roachfont1 text-white text-[10px]`}>Roaches</p>
            </div>
            <div onClick={() => setSelectedTab("Ranks")} className={`flex  py-[6px] px-6  flex-col justify-center items-center cursor-pointer ${
                 selectedTab === "Ranks" ? "bg-[#ffffff25] py-[6px] px-4 shadow-lg rounded-[10px]" : ""
            }`}>
            <MdOutlineLeaderboard  className="text-white text-[20px]"/>
                    <p className={`text-center font-roachfont1 text-white text-[10px]`}>Ranks</p>
            </div>
            <div onClick={() => setSelectedTab("Upgrade")} className={`flex flex-col  py-[6px] px-6  justify-center items-center cursor-pointer ${
                 selectedTab === "Upgrade" ? "bg-[#ffffff25] py-[6px] px-4 shadow-lg rounded-[10px]" : ""
            }`}>
            <GrUpgrade className="text-white text-[20px]"/>
                    <p className={`text-center font-roachfont1 text-white text-[10px]`}>Upgrade</p>
            </div>
            </div>
        </div>
        </div>

        {selectedTab === "Earn" && <NewHome/>}
        {selectedTab === "Mine" && <Mine/>}
        {selectedTab === "FrensRoaches" && <FrensRoachesTab/>}
        {selectedTab === "Ranks" && <Ranks/>}
        {selectedTab === "Upgrade" && <UpgradeTab/>}
        </>
     );
}
 
export default TabBar;