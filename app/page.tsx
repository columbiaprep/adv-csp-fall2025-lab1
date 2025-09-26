'use client';
import { useEffect, useState } from "react";
import Image from "next/image";
import ShinyButton from "./components/sample-component";
import { Avatar } from "@heroui/react";
import ModalComponent from "./components/modal";
// IP grabber function is a mix of code gotten from chatGPT and from https://www.geeksforgeeks.org/how-to-get-users-ip-address-in-reactjs/
// Everything else is my own code including prop sutff
export default function Home() {
  const [ip, setIp] = useState("");

  useEffect(() => {
    fetch("https://api.ipify.org?format=json")
      .then(res => res.json())
      .then(data => setIp(data.ip));
  }, []);

  return (
    <div className="font-sans justify-center items-center">
      <ModalComponent ip={ip} />
    </div>
  );
}