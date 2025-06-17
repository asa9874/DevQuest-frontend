import React, { type ReactNode } from "react";
import Button from "./Button";

interface SidebarProps {
  children: ReactNode;
  className?: string;
}

const Sidebar: React.FC<SidebarProps> = ({ children, className = "" }) => {
  return (
    <div className="w-full h-screen flex bg-slate-900">
      <div className="w-64 h-full bg-slate-800 border-r border-slate-600 flex flex-col gap-4 p-4">
        <Button
          className="w-full h-16"
          color="bg-slate-600 hover:bg-slate-500"
          label="진행중인 퀘스트"
        />
        <Button
          className="w-full h-16"
          color="bg-slate-600 hover:bg-slate-500"
          label="완료된 퀘스트"
        />
        <Button
          className="w-full h-16"
          color="bg-slate-600 hover:bg-slate-500"
          label="새 퀘스트"
        />
      </div>
      <div
        className={`flex-1 overflow-y-auto p-8 ${className}`}
      >
        {children}
      </div>
    </div>
  );
};

export default Sidebar;
