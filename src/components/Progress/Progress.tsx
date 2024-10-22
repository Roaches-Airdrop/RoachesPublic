import React, { useState, useEffect } from 'react';
import UserDetails from '../User/User';
// Define an interface for props
interface UserProgressProps {
    balance: string; // balance will be passed as a string
}

const UserProgress: React.FC<UserProgressProps> = ({ balance }) => {
    const [level, setLevel] = useState<number>(0); // Default level is 0
    const [progress, setProgress] = useState<number>(0); // Initial progress is 0%

    const maxLevel = 10;
    const levelThreshold = 10000; // $10,000 per level

    // Convert balance to a number for calculations
    const numericBalance = parseFloat(balance) || 0;


    // Calculate user's level and progress based on balance
    useEffect(() => {
        // Calculate level based on balance
        const calculatedLevel = Math.min(Math.floor(numericBalance / levelThreshold) + 1, maxLevel);
        setLevel(calculatedLevel);

        // Calculate progress for current level
        const currentLevelBalance = numericBalance % levelThreshold;
        const calculatedProgress = Math.min((currentLevelBalance / levelThreshold) * 100, 100);
        setProgress(calculatedProgress);
    }, [numericBalance]);

      const formatBalance = new Intl.NumberFormat('en-US', {
    style: 'decimal',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(parseFloat(balance));

    return (
        <div className="mx-auto rounded-lg shadow-md">
            <div className='space-y-1'>
                <UserDetails
                    username='bobby mighty'
                    roachimg="https://harlequin-top-puma-655.mypinata.cloud/ipfs/QmTkB92NCATFB1aQHbuiadwigDb9v8rA94tmhXwM9Uj5in"
                />
                <div className='flex items-center space-x-3'>
                <div className="w-[65%] bg-gray-300 rounded-full h-4">
                    <div
                        className="bg-roachgold h-4 rounded-[10px] transition-all duration-500"
                        style={{ width: `${progress}%` }}
                    ></div>
                   
                </div>
                <p className='text-white font-roachfont1 font-medium'>{level}</p>
                </div>
                <p className='text-white font-roachfont2 text-[16px]'>Level</p>

            </div>

            {/* Latest Update */}

            <div className='flex items-center justify-center space-x-6 my-6'>
                <div className="bg-white bg-opacity-20 backdrop-blur-md rounded-lg shadow-lg max-w-md p-4">
                   <h2 className="uppercase font-roachfont2 text-[20px] text-white font-medium">balance</h2>
                   <p className="font-roachfont1 text-[18px] text-white font-medium">{formatBalance}<span className='text-roachgold'>{"ROACH"}</span></p> 
                </div>
                <div className="bg-white bg-opacity-20 backdrop-blur-md rounded-lg shadow-lg max-w-md p-4">
                   <h2 className="uppercase font-roachfont2 text-[20px] text-white font-medium">rank</h2> 
                   <p className="font-roachfont1 text-[18px] text-white font-medium">#5.9</p>
                </div>
            </div>

        </div>
    );
};

export default UserProgress;

