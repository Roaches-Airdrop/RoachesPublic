import React from 'react';
import useUserProgress from '../../hooks/useUserProgress'; // Adjust the import path as needed
import UserDetails from '../User/User';

// Define an interface for props
interface UserProgressProps {
    balance: string; // balance will be passed as a string
}

const UserProgress: React.FC<UserProgressProps> = ({ balance }) => {
    const { level, progress, formatBalance } = useUserProgress(balance);

    return (
        <>
                   <div className="mx-auto rounded-lg shadow-md">
            <div className='space-y-1'>
                <UserDetails
                    username='bobby mighty'
                    roachimg="https://harlequin-top-puma-655.mypinata.cloud/ipfs/QmTkB92NCATFB1aQHbuiadwigDb9v8rA94tmhXwM9Uj5in"
                    imgStyle='bg-gradient-to-l from-black via-yellow-900 to-black to-100% '
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

        </>
    );
};

export default UserProgress;
