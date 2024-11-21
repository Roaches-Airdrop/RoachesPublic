import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import TopLoader from "../components/Loader/Linear";

const Onboarding = () => {
    const navigate = useNavigate();

useEffect(() => {
    const timer = setTimeout(() => {
        navigate("/home")
    }, 5000)

    return () => clearTimeout(timer)
}, [navigate])
    return ( 
        <>
       <div className="bg-[url('https://harlequin-top-puma-655.mypinata.cloud/ipfs/QmbKrMoRajBsDG8CkRjxmtXtwSRieLazWDpVjfpwQ4f1Rh')] h-[100vh] bg-center bg-cover">
        <TopLoader />
        <div className="fixed bottom-0 w-full">
            <div className="h-[30vh] bg-gradient-to-l from-[#0000003d] via-[#78360f3d]  to-[#0000003d] to-100%">

            </div>

        </div>
       </div>
        </>
     );
}
 
export default Onboarding;