

// import React, { useEffect, useState } from "react";
// import { FaMapMarkerAlt } from "react-icons/fa";

// const UserLocation = () => {
//   const [city, setCity] = useState("");
//   const [error, setError] = useState("");

//   useEffect(() => {
//     const fetchCity = () => {
//       if (navigator.geolocation) {
//         navigator.geolocation.getCurrentPosition(
//           async (position) => {
//             const lat = position.coords.latitude;
//             const lng = position.coords.longitude;

//             try {
//               const response = await fetch(
//                 `https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lng}&format=json`
//               );
//               const data = await response.json();

//               const cityName =
//                 data.address.city ||
//                 data.address.town ||
//                 data.address.village ||
//                 data.address.state ||
//                 "Location Not Found";

//               setCity(cityName);
//             } catch (err) {
//               setError("🔴 Reverse geocoding failed.");
//             }
//           },
//           (err) => {
//             if (err.code === 1) {
//               setError("❌ Permission denied by user.");
//             } else {
//               setError("⚠️ Failed to get location.");
//             }
//           }
//         );
//       } else {
//         setError("⚠️ Geolocation not supported by this browser.");
//       }
//     };

//     fetchCity();
//   }, []);

//   if (error) {
//     return <span className="text-red-600 text-sm">{error}</span>;
//   }

//   return (
//     <span className="text-sm text-purple-700 font-medium flex items-center gap-1">
//       <FaMapMarkerAlt className="text-lg text-red-500" />
//       {city ? city : "Fetching location..."}
//     </span>
//   );
// };

// export default UserLocation;
