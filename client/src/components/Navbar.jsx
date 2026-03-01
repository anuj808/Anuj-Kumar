const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full z-50 bg-black px-10 py-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold">
          Anuj<span className="text-[#FF4D4D]">.</span>
        </h1>

        <p className="text-gray-400 hidden md:block">
          anuj766894@gmail.com
        </p>

        <div className="text-white text-2xl cursor-pointer">
          ☰
        </div>
      </div>
    </nav>
  );
};

export default Navbar;