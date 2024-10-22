import TabBar from "../components/TabBar/TabBar";

const Home = () => {
    return ( 
        <>
        <div className="h-[calc(100vh-0px)] overflow-auto scrollbar-hide bg-gradient-to-b from-black via-gray-900 to-gray-800 to-100% px-6 pt-6 pb-24">
            <TabBar />
        </div>
        </>
    );
}
 
export default Home;