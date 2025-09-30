import Image from "next/image";
import ShinyButton from "./components/sample-component";
import { Avatar } from "@heroui/react";
import ModalComponent from "./components/modal";
import BermanBadge from "./components/Actionbutton";
export default function Home() {
  return (
    <div className="font-sans justify-center items-center">
    
              <ModalComponent />
                    <BermanBadge />
                      <Avatar radius="md" src="https://i.pravatar.cc/150?u=a04258114e29026302d" />
    </div>
  );
}
