import React from 'react'
import './NavButton.css';

interface NavButtonProps {
    text: string;
}

export const NavButton: React.FC<NavButtonProps> = ({ text }) => {
  return (
    <div className="navbutton-wrapper">
      <h2>{text}</h2>
    </div>
  );
};

export default NavButton;
