import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-4 sm:top-6 left-1/2 -translate-x-1/2 w-[92%] max-w-7xl z-50 bg-black/70 backdrop-blur-md px-5 sm:px-8 md:px-12 py-3 sm:py-4 rounded-xl sm:rounded-2xl border border-[#1f1f1f] shadow-[0_10px_40px_rgba(0,0,0,0.6)]">

      <div className="flex justify-between items-center">

        {/* Logo */}
        <h1 className="text-lg sm:text-xl md:text-2xl font-semibold text-white">
          Anuj<span className="text-[#FF4D4D]">.</span>
        </h1>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-6 text-sm text-gray-300 items-center">
          <a
            href="https://leetcode.com/u/anuj_307/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#FACC15] transition"
          >
            LeetCode
          </a>

          <a
            href="https://www.geeksforgeeks.org/profile/anuj307?tab=activity"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#34D399] transition"
          >
            GFG
          </a>

          <a
            href="https://github.com/anuj808/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#22D3EE] transition"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/anuj-kumar-b02586257/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#FF4D4D] transition"
          >
            LinkedIn
          </a>
        </div>

        {/* Hamburger Button (Mobile Only) */}
        <button
          className="md:hidden text-white text-2xl"
          onClick={() => setOpen(!open)}
        >
          {open ? "✕" : "☰"}
        </button>

      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden mt-6 flex flex-col gap-5 text-gray-300 text-sm border-t border-[#1f1f1f] pt-6">

          <a
            href="https://leetcode.com/u/anuj_307/"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className="hover:text-[#FACC15] transition"
          >
            LeetCode
          </a>

          <a
            href="https://www.geeksforgeeks.org/profile/anuj307?tab=activity"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className="hover:text-[#34D399] transition"
          >
            GFG
          </a>

          <a
            href="https://github.com/anuj808/"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className="hover:text-[#22D3EE] transition"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/anuj-kumar-b02586257/"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className="hover:text-[#FF4D4D] transition"
          >
            LinkedIn
          </a>

        </div>
      )}

    </nav>
  );
};

export default Navbar;