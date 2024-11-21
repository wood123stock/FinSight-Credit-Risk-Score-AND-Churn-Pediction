import React from 'react'

const App = () => {
  return (
    <>
  {/* Nav-bar */}
  <nav className="container mx-auto p-6">
    {/* <!--Logo--> */}
    <div className="flex intem-center justify-between bg-slate-300">
      <div className="text-xl">Home</div>
      {/* Menu items */}
      <div className="flex space-x-6">
        <a href="#">Products</a>
        <a href="#">Login</a>
        <a href="#">Contact Us</a>
        <a href="#">About Us</a>

      </div>
    </div>
  </nav>
    </>)
}

export default App
