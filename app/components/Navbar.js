// 'use client';

// import React, { useState } from 'react';
// import { useSession, signIn, signOut } from 'next-auth/react';
// import Image from 'next/image';
// import Link from 'next/link';

// const Navbar = () => {
//   const { data: session, status } = useSession(); 
//   const [language, setLanguage] = useState("English");
//   const [showDropdown, setShowDropdown] = useState(false);
//   const [showUserDropdown, setShowUserDropdown] = useState(false); 

//   const handleLanguageChange = (lang) => {
//     setLanguage(lang);
//     setShowDropdown(false);
//   };

//   return (
//     <nav className="max-w-[80vw] mx-auto flex justify-between items-center h-[62px] relative z-10">
//       {/* Logo */}
//       <Link href={"/"}>
//         <Image src="/logo.svg" alt="logo" width={200} height={60} />
//       </Link>

//       <div className="flex gap-4 items-center relative">
//         {/* Language Selector */}
//         <div className="relative">
//           <button
//             onClick={() => setShowDropdown(!showDropdown)}
//             className="px-3 py-1 font-bold text-white border border-white bg-opacity-0.1 rounded transition-all duration-300 ease-in-out hover:bg-opacity-40 hover:shadow-[0_0_15px_rgba(255,255,255,0.6)]"
//           >
//             {language}
//           </button>

//           {showDropdown && (
//             <div className="absolute right-0 mt-1 w-[100px] bg-white bg-opacity-20 border border-white rounded shadow-md backdrop-blur-md z-50">
//               <ul>
//                 <li
//                   onClick={() => handleLanguageChange("English")}

//                   className={`px-3 py-1 cursor-pointer hover:bg-white hover:bg-opacity-30 hover:text-black hover:underline ${
//                     language === 'English' ? "font-bold text-black" : "text-black"
//                   }`}
//                 >
//                   English
//                 </li>
//                 <li
//                   onClick={() => handleLanguageChange("Hindi")}

//                   className={`px-3 py-1 cursor-pointer hover:bg-white hover:bg-opacity-30 hover:text-black hover:underline ${
//                     language === "Hindi" ? "font-bold text-black" : "text-black"
//                   }`}
//                 >
//                   Hindi
//                 </li>
//               </ul>
//             </div>
//           )}
//         </div>

//         {/* Sign In handling */}

//         {session ? (
//           <div className="relative">
//             <button
//               onClick={() => setShowUserDropdown(!showUserDropdown)}
//               className="px-4 py-2 text-white bg-gray-800 rounded hover:bg-gray-700 font-semibold"
//             >
//               {session.user.name?.split(' ')[0] || 'User'} 
//             </button>

//             {showUserDropdown && (
//               <div className="absolute right-0 mt-2 w-32 bg-white rounded shadow-md z-50 hover:bg-gray-800"  >
              
//                <button
//                  onClick={() => signOut()}
//                  className="block w-full text-black text-left px-4 py-2 hover:bg-gray-200 hover:underline cursor-pointer"
//                  >
//                   Sign out
//                 </button>
//               </div>
//             )}
//           </div>
//         ) : (
//           <Link href={"/login"}><button
//           className="px-6 py-2 text-white bg-red-600 rounded text-lg font-semibold border border-transparent transition-all duration-300 ease-in-out hover:bg-red-700 hover:border-red-700 max-sm:text-sm  cursor-pointer"
//         >
//           Sign in
//         </button></Link>
//         )}
//       </div>
//     </nav>
//   );

// };
// export default Navbar;





import React, { useState, useEffect } from 'react';
import { ChevronDown, Play, Star, ArrowRight, Menu, X } from 'lucide-react';


const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeService, setActiveService] = useState(0);
    const [isVisible, setIsVisible] = useState({});
  
    useEffect(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setIsVisible(prev => ({
                ...prev,
                [entry.target.id]: true
              }));
            }
          });
        },
        { threshold: 0.1 }
      );
  
      const elements = document.querySelectorAll('[data-animate]');
      elements.forEach(el => observer.observe(el));
  
      return () => observer.disconnect();
    }, []);
  
  return (
     <nav className="relative z-50 px-6 py-4 bg-black/20 backdrop-blur-xl border-b border-white/10">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Tanvi Studio
          </div>
          <div className="hidden md:flex space-x-8">
            {['Home', 'Services', 'Portfolio', 'About', 'Contact'].map((item) => (
              <a key={item} href="#" className="hover:text-purple-300 transition-colors duration-300 relative group">
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </div>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg bg-purple-600/20 hover:bg-purple-600/30 transition-colors duration-300"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>
  )
}

export default Navbar
