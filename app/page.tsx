import Image from "next/image";
import ShinyButton from "./components/sample-component";
import { Avatar } from "@heroui/react";
import ModalComponent from "./components/modal";
import ArmenBox from "./components/progress-component";
export default function Home() {
  return (
    <div className="font-sans justify-center items-center">
    
              <ArmenBox value={42} label="Progress Bar" cardText="Almost There!" />
    </div>
  );
}
