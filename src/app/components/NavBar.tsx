'use client';
import React, { useState } from 'react'
import classNames from 'classnames';
import { motion } from 'framer-motion';
import { ColorI } from '@/config/colorConfig';

const NavBar = () => {
  const [activeIndex, setActiveIndex] = useState(0); 
  const [hoverIndex, setHoverIndex] = useState<number | null>(null); 

  const navItems = [
    {
      title: "Overview",
      url: "",
      active: true
    },
    {
      title: "Notifications",
      url: "notifications",
      active: false
    },
    {
      title: "Reports",
      url: "reports",
      active: false
    },
    {
      title: "Actions",
      url: "actions",
      active: false
    }
  ];

  return (
    <div className="w-[100px] flex gap-5 ">
      {navItems.map((item, index) => (
        <NavBarItem
          key={index}
          title={item.title}
          active={activeIndex === index && hoverIndex === null} 
          isHovered={hoverIndex === index} 
          onHover={() => setHoverIndex(index)} 
          onLeave={() => setHoverIndex(null)} 
          onClick={() => setActiveIndex(index)} 
        />
      ))}
    </div>
  );
};

export default NavBar;

type NavBarItemProps = {
  title: string;
  active: boolean;
  isHovered: boolean;
  onHover: () => void;
  onLeave: () => void;
  onClick: () => void;
};

const NavBarItem: React.FC<NavBarItemProps> = ({ title, active, isHovered, onHover, onLeave, onClick }) => {
  return (
    <div
      className="min-h-[73px] flex flex-col items-center cursor-pointer"
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      onClick={onClick}
    >
      <motion.div
        className={classNames({
          'flex flex-grow items-center text-[0.92rem]': true
        })}
        animate={{ color: isHovered || active ? ColorI.textColor.secondary : ColorI.textColor.white }}
        transition={{ duration: 0.2 }}
      >
        {title}
      </motion.div>

      <motion.div
        className="bg-secondary w-full h-[5px] rounded-t-md"
        initial={{ height: 0 }}
        animate={{ height: isHovered ? '4px' : active ? '2px' : 0 }} 
        transition={{ duration: 0.3 }}
        style={{ backgroundColor: ColorI.colors.secondary.DEFAULT }}
      />
    </div>
  );
};