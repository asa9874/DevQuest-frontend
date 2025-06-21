import React, { type ReactNode } from "react";
import Button from "./Button";

interface SidebarProps {
  children: ReactNode;
  className?: string;
}

const Sidebar: React.FC<SidebarProps> = ({ children, className = "" }) => {
  return (
    <div className={`w-64 h-full bg-slate-800 border-r border-slate-600 flex flex-col gap-4 " ${className}`}>
        {children}
    </div>
  );
};

export default Sidebar;
