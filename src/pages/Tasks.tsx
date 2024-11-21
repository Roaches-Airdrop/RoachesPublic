import TaskComponent from "../components/Task/TaskComp";

const TaskPage = () => {
    return ( 
        <>
            <div className="h-screen overflow-auto scrollbar-hide bg-gradient-to-b from-black via-gray-900 to-gray-800 to-100% px-6 pt-6 pb-24">
                <TaskComponent />
            </div>
        </>
     );
}
 
export default TaskPage;