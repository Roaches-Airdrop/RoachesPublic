

interface UserDetailsProps {
    username:string
    roachimg?: any
}
const UserDetails: React.FC<UserDetailsProps> = ({username, roachimg}) => {
    return ( 
        <>
            <div className="flex items-center space-x-3">
                <div className="bg-gradient-to-l from-black via-yellow-900 to-black to-100% inline-block p-[2px] rounded-full">
                <img src={roachimg} alt="profile" className="h-[60px] w-[60px]"/>
                </div>
                <p className="font-roachfont1 text-white capitalize font-medium text-[18px]">{username}</p>
            </div>
        </>
     );
}
 
export default UserDetails;