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
    roachimg?: any
    imgStyle?: string
}
const UserDetails: React.FC<UserDetailsProps> = ({contStyle, roachimg, imgStyle}) => {

    const [userData, setUserData] = useState<UserData | null>(null);
    
    useEffect(() =>{
        if (WebApp.initDataUnsafe.user){
           setUserData(WebApp.initDataUnsafe.user as UserData)
        }
    }, [])

    return ( 
        <>
            <div className={`flex items-center space-x-2 ${contStyle}`}>
                <div className={`inline-block p-[2px] rounded-full ${imgStyle}`}>
                <img src={roachimg} className={`h-[32px] w-[32px]`}/>
                </div>
                <p className="font-roachfont1 text-white capitalize font-medium text-[12px]">{userData?.username}</p>
            </div>
        </>
     );
}
 
export default UserDetails;