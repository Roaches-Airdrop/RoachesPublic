

interface UserDetailsProps {
    username:string
    roachimg?: any
    imgStyle?: string
}
const UserDetails: React.FC<UserDetailsProps> = ({username, roachimg, imgStyle}) => {
    return ( 
        <>
            <div className="flex items-center space-x-3">
                <div className={`inline-block p-[2px] rounded-full ${imgStyle}`}>
                <img src={roachimg} className={`h-[60px] w-[60px]`}/>
                </div>
                <p className="font-roachfont1 text-white capitalize font-medium text-[18px]">{username}</p>
            </div>
        </>
     );
}
 
export default UserDetails;