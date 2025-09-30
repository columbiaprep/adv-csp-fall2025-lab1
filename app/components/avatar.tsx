"use client";
import React from "react";
import { Button } from "@heroui/react";
import {Avatar, AvatarGroup, AvatarIcon} from "@heroui/avatar";

export default function RyderAvatar() {
    return (
      <div className="flex items-center gap-4 p-4 bg-slate-100 rounded-2xl shadow">
      {}
      <div className="relative">
        <Avatar
          name="Ryder"
          className="w-16 h-16 font-sans bg-blue-800 text-white"
        />
        {}
        <span className="absolute bottom-1 right-1 block w-4 h-4 rounded-full bg-emerald-500 border-2 border-white" />
      </div>

      {}
      <div>
        <p className="font-sans text-slate-800 text-lg font-semibold">
          Ryder Lawrence
        </p>
        <p className="font-sans text-slate-800 text-sm">
          Online
        </p>
      </div>
    </div>
  );
};
  interface RyderAvatarProps{
    name: string;
    status?: string;
    bgColor?: string;
  }
  export const RyderAvatarWithProps: React.FC<RyderAvatarProps> = ({
  name,
  status = "Online",
  bgColor = "bg-blue-800",
}) => {
  return (
    <div className="flex items-center gap-4 p-4 bg-slate-100 rounded-2xl shadow">
      <div className="relative">
        <Avatar
          name={name}
          className={`w-16 h-16 font-sans ${bgColor} text-white`}
          />
          <span className ="absolute bottom-1 right-1 block w-4 h-4 rounded-full bg-emerald-500 border-2 border-white" />
      </div> 

      <div>
         <p className="font-sans text-slate-800 text-lg font-semibold">{name}</p>
        <p className="font-sans text-slate-800 text-sm">{status}</p>
      </div>

      </div>
  );
};