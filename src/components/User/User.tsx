import WebApp from "@twa-dev/sdk";
import { useEffect, useState } from "react";


interface UserData {
    id: number;
    first_name?: string;
    last_name?: string;
    username?: string;
    language_code: string;
    is_premuim?: boolean
}

interface UserDetailsProps {
    contStyle?: string
}
const UserDetails: React.FC<UserDetailsProps> = ({contStyle}) => {

    const [userData, setUserData] = useState<UserData | null>(null);
    
    useEffect(() =>{
        if (WebApp.initDataUnsafe.user){
           setUserData(WebApp.initDataUnsafe.user as UserData)
        }
    }, [])

    return ( 
        <>
            <div className={`flex items-center space-x-2 bg-white bg-opacity-15 backdrop-blur-md shadow-lg justify-center p-3 rounded-[10px] ${contStyle}`}>
                <p className="font-roachfont1 text-white capitalize font-medium text-center text-[12px] border-x border-gray-500 px-4 ">{`@${userData?.username}`}</p>
            </div>
        </>
     );
}
 
export default UserDetails;