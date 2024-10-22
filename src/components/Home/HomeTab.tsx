import UserProgress from "../Progress/Progress";
import { GiTwoCoins } from "react-icons/gi";
import { useState } from "react";
const HomeTab = () => {
    const [balance, setBalance] = useState<string>('1500');
    return ( 
        <>
            <div>
            <UserProgress balance={balance} />
            {/* Daily task */}
            <div className="">
                <h2 className="uppercase font-roachfont2 text-white text-[20px] font-medium">daily task</h2>
                <div className="shadow-[0px_-3px_6px_3px_#ecc94b] space-y-7 p-4 my-2 bg-white bg-opacity-20 backdrop-blur-md rounded-lg max-w-md">
                <div className="flex items-center justify-between">
                    <div>
                        <h3 className="capitalize font-roachfont1 text-[18px] font-medium text-white">youtube</h3>
                    </div>
                    <div className="flex items-center bg-white bg-opacity-20 backdrop-blur-md rounded-lg max-w-md shadow-lg p-1">
                        <h3 className="font-roachfont2 text-[16px] font-medium text-white">90 </h3>
                        <GiTwoCoins className="text-roachgold text-[26px]" />
                    </div>
                </div>
                <div className="flex items-center justify-between">
                    <div>
                        <h3 className="capitalize font-roachfont1 text-[18px] font-medium text-white">telegram</h3>
                    </div>
                    <div className="flex items-center bg-white bg-opacity-20 backdrop-blur-md rounded-lg max-w-md shadow-lg p-1">
                        <h3 className="font-roachfont2 text-[16px] font-medium text-white">60 </h3>
                        <GiTwoCoins className="text-roachgold text-[26px]" />
                    </div>
                </div>
                <div className="flex items-center justify-between">
                    <div>
                        <h3 className="capitalize font-roachfont1 text-[18px] font-medium text-white">Twitter</h3>
                    </div>
                    <div className="flex items-center bg-white bg-opacity-20 backdrop-blur-md rounded-lg max-w-md shadow-lg p-1">
                        <h3 className="font-roachfont2 text-[16px] font-medium text-white">70 </h3>
                        <GiTwoCoins className="text-roachgold text-[26px]" />
                    </div>
                </div>
                <div className="flex items-center justify-between">
                    <div>
                        <h3 className="capitalize font-roachfont1 text-[18px] font-medium text-white">Twitter</h3>
                    </div>
                    <div className="flex items-center bg-white bg-opacity-20 backdrop-blur-md rounded-lg max-w-md shadow-lg p-1">
                        <h3 className="font-roachfont2 text-[16px] font-medium text-white">70 </h3>
                        <GiTwoCoins className="text-roachgold text-[26px]" />
                    </div>
                </div>
                <div className="flex items-center justify-between">
                    <div>
                        <h3 className="capitalize font-roachfont1 text-[18px] font-medium text-white">Twitter</h3>
                    </div>
                    <div className="flex items-center bg-white bg-opacity-20 backdrop-blur-md rounded-lg max-w-md shadow-lg p-1">
                        <h3 className="font-roachfont2 text-[16px] font-medium text-white">70 </h3>
                        <GiTwoCoins className="text-roachgold text-[26px]" />
                    </div>
                </div>
                <div className="flex items-center justify-between">
                    <div>
                        <h3 className="capitalize font-roachfont1 text-[18px] font-medium text-white">Twitter</h3>
                    </div>
                    <div className="flex items-center bg-white bg-opacity-20 backdrop-blur-md rounded-lg max-w-md shadow-lg p-1">
                        <h3 className="font-roachfont2 text-[16px] font-medium text-white">70 </h3>
                        <GiTwoCoins className="text-roachgold text-[26px]" />
                    </div>
                </div>
                <div className="flex items-center justify-between">
                    <div>
                        <h3 className="capitalize font-roachfont1 text-[18px] font-medium text-white">Twitter</h3>
                    </div>
                    <div className="flex items-center bg-white bg-opacity-20 backdrop-blur-md rounded-lg max-w-md shadow-lg p-1">
                        <h3 className="font-roachfont2 text-[16px] font-medium text-white">70 </h3>
                        <GiTwoCoins className="text-roachgold text-[26px]" />
                    </div>
                </div>
                </div>
            </div>
             {/* Buttons to increase or decrease balance (for demonstration)
      <div className="absolute bottom-10 space-x-4">
        <button
          className="bg-green-500 text-white px-4 py-2 rounded-lg"
          onClick={() => setBalance((parseFloat(balance) + 500).toString())}
        >
          Add $500
        </button>
        <button
          className="bg-red-500 text-white px-4 py-2 rounded-lg"
          onClick={() => setBalance((parseFloat(balance) - 500).toString())}
        >
          Subtract $500
        </button>
      </div> */}
    </div>  
        </>
     );
}
 
export default HomeTab;