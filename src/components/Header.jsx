// // components/Header.jsx
// import { useState, useEffect, useRef, useContext } from "react";
// import { Link, useLocation } from "react-router-dom";
// import { FaUser, FaBars, FaTimes, FaSignOutAlt } from "react-icons/fa";
// import Login from "./Auth/Login";
// import { AuthContext } from "./Auth/AuthContext";

// const Header = () => {
//   const { isLoggedIn, userName, handleLoginSuccess, handleLogout } = useContext(AuthContext);
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [isLoginOpen, setIsLoginOpen] = useState(false);
//   const [dropdownOpen, setDropdownOpen] = useState(false);
//   const [isScrolled, setIsScrolled] = useState(false);
//   const location = useLocation();
//   const dropdownRef = useRef(null);

//   useEffect(() => {
//     const handleScroll = () => setIsScrolled(window.scrollY > 50);
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   useEffect(() => {
//     const handleClickOutside = (e) => {
//       if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
//         setDropdownOpen(false);
//       }
//     };
//     document.addEventListener("mousedown", handleClickOutside);
//     return () => document.removeEventListener("mousedown", handleClickOutside);
//   }, []);

//   const toggleMenu = () => setMenuOpen(!menuOpen);
//   const toggleDropdown = () => setDropdownOpen(!dropdownOpen);
//   const handleLoginClick = () => {
//     setIsLoginOpen(true);
//     setMenuOpen(false);
//   };

//   const isHome = location.pathname === "/";
//   const currentPath = location.pathname;

//   const navItems = [
//     { name: "Home", path: "/" },
//     { name: "Menu", path: "/menu" },
//     { name: "Services", path: "/services" },
//     { name: "About", path: "/about" },
//     { name: "Contact", path: "/contact" },
//   ];

//   return (
//     <>
//       <nav
//         className={`fixed w-full top-0 z-50 transition-all duration-500 ${
//           isHome && !isScrolled
//             ? "bg-transparent text-white"
//             : "bg-white/90 backdrop-blur-md text-gray-700 shadow-md"
//         } py-6 lg:py-8 border-b border-gray-200`}
//       >
//         <div className="container mx-auto px-4 flex justify-between items-center">
//           <Link to="/" className="text-3xl font-extrabold flex items-center font-poppins">
//             <span className="mr-2 text-maroon-600">Epic</span>
//             <span className="text-maroon-900 animate-pulse">Foods</span>
//           </Link>

//           <button
//             className={`lg:hidden text-2xl transition-transform duration-300 transform hover:scale-110 ${
//               isHome && !isScrolled ? "text-white" : "text-maroon-800"
//             }`}
//             onClick={toggleMenu}
//           >
//             {menuOpen ? <FaTimes /> : <FaBars />}
//           </button>

//           <ul
//             className={`lg:flex lg:space-x-8 lg:items-center absolute lg:static top-20 left-0 w-full lg:w-auto z-50 ${
//               isHome && !isScrolled ? "bg-black/60" : "bg-white"
//             } lg:bg-transparent p-4 lg:p-0 transition-all duration-300 ${
//               menuOpen ? "block shadow-lg" : "hidden lg:flex"
//             }`}
//           >
//             {navItems.map((item, idx) => (
//               <li key={idx}>
//                 <Link
//                   to={item.path}
//                   onClick={() => setMenuOpen(false)}
//                   className={`block py-2 font-medium relative group font-poppins ${
//                     currentPath === item.path
//                       ? "text-maroon-700 font-semibold"
//                       : isHome && !isScrolled
//                       ? "text-white"
//                       : "text-maroon-800 hover:text-maroon-600"
//                   }`}
//                 >
//                   {item.name}
//                   <span
//                     className={`absolute left-0 bottom-0 w-0 h-0.5 bg-maroon-700 transition-all duration-300 group-hover:w-full ${
//                       currentPath === item.path ? "w-full" : ""
//                     }`}
//                   ></span>
//                 </Link>
//               </li>
//             ))}

//             <li className="lg:hidden">
//               {isLoggedIn ? (
//                 <div className="relative" ref={dropdownRef}>
//                   <button
//                     onClick={toggleDropdown}
//                     className="block w-full text-left py-2 font-medium flex items-center text-maroon-700"
//                   >
//                     <FaUser className="mr-2" /> {userName || "Profile"}
//                   </button>
//                   {dropdownOpen && (
//                     <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-lg z-50">
//                       <button
//                         onClick={handleLogout}
//                         className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-rose-100 flex items-center"
//                       >
//                         <FaSignOutAlt className="mr-2" /> Logout
//                       </button>
//                     </div>
//                   )}
//                 </div>
//               ) : (
//                 <button
//                   onClick={handleLoginClick}
//                   className="block w-full text-left py-2 font-medium text-maroon-800"
//                 >
//                   <FaUser className="mr-2" /> Login
//                 </button>
//               )}
//             </li>
//           </ul>

//           <div className="hidden lg:block relative" ref={dropdownRef}>
//             {!isLoggedIn ? (
//               <button
//                 onClick={handleLoginClick}
//                 className="flex items-center px-4 py-2 bg-gradient-to-br from-maroon-700 to-maroon-900 text-white rounded-full hover:from-maroon-800 hover:to-maroon-900 transition duration-300 shadow-md hover:shadow-lg transform hover:scale-105"
//               >
//                 <FaUser className="mr-2" /> Login
//               </button>
//             ) : (
//               <>
//                 <button
//                   onClick={toggleDropdown}
//                   className="flex items-center px-4 py-2 bg-gradient-to-br from-maroon-700 to-maroon-900 text-white rounded-full hover:from-maroon-800 hover:to-maroon-900 transition duration-300 shadow-md hover:shadow-lg transform hover:scale-105"
//                 >
//                   <FaUser className="mr-2" /> {userName || "Profile"}
//                 </button>
//                 {dropdownOpen && (
//                   <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-lg z-50">
//                     <button
//                       onClick={handleLogout}
//                       className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-rose-100 flex items-center"
//                     >
//                       <FaSignOutAlt className="mr-2" /> Logout
//                     </button>
//                   </div>
//                 )}
//               </>
//             )}
//           </div>
//         </div>
//       </nav>

//       {isLoginOpen && (
//         <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 overflow-y-auto">
//           <Login setIsLoginOpen={setIsLoginOpen} onLoginSuccess={handleLoginSuccess} />
//         </div>
//       )}
//     </>
//   );
// };

// export default Header;
