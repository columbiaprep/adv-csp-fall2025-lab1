import Image from "next/image";
import ShinyButton from "./components/sample-component";
import { Avatar } from "@heroui/react";
import ModalComponent from "./components/modal";
import InputAction from "./components/input-action";
export default function Home() {
  return (
    <div className="font-sans justify-center items-center">
    
              <ModalComponent />
              <InputAction />
              
    </div>
  );
}
