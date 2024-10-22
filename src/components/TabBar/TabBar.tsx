import { useState } from "react";
import { BsCashCoin } from "react-icons/bs";
import { SiCockroachlabs } from "react-icons/si";
import { GrUpgrade } from "react-icons/gr";
import FrensRoachesTab from "../Home/FrensRoaches";
import UpgradeTab from "../Home/UpgradeTab";
import HomeTab from "../Home/HomeTab";

const TabBar = () => {
    const [selectedTab, setSelectedTab] = useState<string>('Earn')
    
    return ( 
        <>
        <div className="flex items-center justify-center ">
        <div className="fixed bottom-0 w-full z-[1000]">
            <div className="flex items-center justify-between bg-white bg-opacity-10 backdrop-blur-md rounded-tr-[50px] rounded-tl-[50px] py-4 px-6 shadow-lg">
            <div onClick={() => setSelectedTab("Earn")} className={`flex flex-col justify-center items-center cursor-pointer ${
                selectedTab === "Earn" ? "bg-[#ffffff25] py-[6px] px-6 shadow-lg rounded-[10px]" : ""
            }`}>
            <BsCashCoin  className="text-white text-[22px]"/>
                <p className={`text-center font-roachfont1 text-white text-[12px]`}>Earn</p>
            </div>
            <div onClick={() => setSelectedTab("FrensRoaches")} className={`flex flex-col justify-center items-center cursor-pointer ${
                 selectedTab === "FrensRoaches" ? "bg-[#ffffff25] py-[6px] px-6 shadow-lg rounded-[10px]" : ""
            }`}>
            <SiCockroachlabs  className="text-white text-[22px]"/>
                    <p className={`text-center font-roachfont1 text-white text-[12px]`}>Roaches</p>
            </div>
            <div onClick={() => setSelectedTab("Upgrade")} className={`flex flex-col justify-center items-center cursor-pointer ${
                 selectedTab === "Upgrade" ? "bg-[#ffffff25] py-[6px] px-6 shadow-lg rounded-[10px]" : ""
            }`}>
            <GrUpgrade className="text-white text-[22px]"/>
                    <p className={`text-center font-roachfont1 text-white text-[12px]`}>Upgrade</p>
            </div>
            </div>
        </div>
        </div>

        {selectedTab === "Earn" && <HomeTab/>}
        {selectedTab === "FrensRoaches" && <FrensRoachesTab/>}
        {selectedTab === "Upgrade" && <UpgradeTab/>}
        </>
     );
}
 
export default TabBar;