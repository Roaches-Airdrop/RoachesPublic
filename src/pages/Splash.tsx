import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Splash = () => {
const navigate = useNavigate();

useEffect(() => {
    const timer = setTimeout(() => {
        navigate("/onboarding")
    }, 4000)

    return () => clearTimeout(timer)
}, [navigate])

    return ( 
        <>
            <div className="bg-gradient-to-l from-black via-yellow-900 to-black to-100% flex justify-center flex-col items-center h-screen space-y-4">
               <img src="https://harlequin-top-puma-655.mypinata.cloud/ipfs/QmSA4t9dGeqwrF4C4Y69byrironksZBy5mB2tggw26wjgc" alt="Roaches Coin" className="h-[20vh]"/>
               <h2 className="font-roachfont2 text-roachpeach text-[25px] text-center tracking-[8px]">ROACHES</h2>
            </div>
        </>
     );
}
 
export default Splash;