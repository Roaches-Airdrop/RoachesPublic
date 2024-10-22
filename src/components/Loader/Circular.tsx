
const CircleLoader = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen w-full bg-[#0000003d]">
      <div className="animate-spin rounded-full h-24 w-24 border-t-4 border-b-4 border-roachgold"></div>
      <div className="mb-10 text-xl font-semibold text-gray-700"></div>
    </div>
  );
};

export default CircleLoader;
