import { useState } from "react";
import Coin from "../../assets/others/dollar.png";
import { GiMining } from "react-icons/gi";
import { MdOutlineLeaderboard } from "react-icons/md";
import { SiCockroachlabs } from "react-icons/si";
import FrensRoachesTab from "../Home/FrensRoaches";
import NewHome from "../Home/NewHome";
import Mine from "../Home/Mine";
import Ranks from "../Home/Ranks";

const TabBar = () => {
    const [selectedTab, setSelectedTab] = useState<string>('Earn');
    
    return ( 
        <>
        <div className="flex items-center justify-center">
            <div className="fixed bottom-0 w-full z-[1000]">
                <div className="flex flex-wrap items-center justify-between bg-white bg-opacity-10 backdrop-blur-md rounded-tr-[40px] rounded-tl-[40px] py-4 xsm:px-6 px-4 shadow-lg">
                    {[
                        { label: "Earn", icon: <img src={Coin} alt="coin" className="h-4" /> },
                        { label: "Mine", icon: <GiMining className="text-white text-[20px]" /> },
                        { label: "Roaches", icon: <SiCockroachlabs className="text-white text-[20px]" /> },
                        { label: "Ranks", icon: <MdOutlineLeaderboard className="text-white text-[20px]" /> },
                    ].map(({ label, icon }) => (
                        <div 
                            key={label}
                            onClick={() => setSelectedTab(label)} 
                            className={`flex flex-col items-center cursor-pointer py-[6px] px-5 transition-all duration-100 ${
                                selectedTab === label ? "bg-[#ffffff25] shadow-lg rounded-[10px]" : ""
                            }`}>
                            {icon}
                            <p className="text-center font-roachfont1 text-white text-[10px]">{label}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>

        {selectedTab === "Earn" && <NewHome />}
        {selectedTab === "Mine" && <Mine />}
        {selectedTab === "Roaches" && <FrensRoachesTab />}
        {selectedTab === "Ranks" && <Ranks />}
        </>
    );
};

export default TabBar;
