import Image from "next/image";
import ShinyButton from "./components/sample-component";
import { Avatar } from "@heroui/react";
import ModalComponent from "./components/modal";
export default function Home() {
  return (
    <div className="font-sans justify-center items-center">
            
              <ModalComponent />
import InputAction from "./components/input-action";
import ArmenBox from "./components/progress-component";


export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
              <ShinyButton />
              <h1 className="bg-sky-900 text-green-400 border-red-300 border-10">Hey</h1>
              <InputAction />
              <h1 className="bg-sky-500 text-green-100 border-red-600 border-10">Hey</h1>
              <ArmenBox />
    </div>
  );
}
