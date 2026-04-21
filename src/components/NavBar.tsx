import React from 'react';

const NavBar: React.FC = () => {
  return (
    <header className="nav-bar py-4 px-6 flex items-center justify-between">
      <h1 className="text-xl font-bold text-white">TeachSnap 教随拍</h1>
      <button className="text-white">
        ⚙️
      </button>
    </header>
  );
};

export default NavBar;