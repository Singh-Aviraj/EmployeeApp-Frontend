import React from "react";

function Footer() {
  return (
    <footer className="bg-gray-800 text-white text-center p-4 mt-4">
      <p>&copy; {new Date().getFullYear()} Employee Management System</p>
      <p>Developed by Aviraj Singh</p>
    </footer>
  );
}
export default Footer;