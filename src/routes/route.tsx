import { Route, Routes } from "react-router-dom";
import Splash from "../pages/Splash";
import Onboarding from "../pages/Onboarding";
import Home from "../pages/Home";
import TaskPage from "../pages/Tasks";

const FolderRoute = () => {
    return ( 
        <Routes>
            <Route path="/" element={<Splash />} />
            <Route path="/onboarding" element={<Onboarding />} />
            <Route path="/home" element={<Home />} />
            <Route path="/tasks" element={<TaskPage />} />
        </Routes>
     );
}
 
export default FolderRoute;