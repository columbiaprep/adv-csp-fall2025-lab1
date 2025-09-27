"use client";
import React from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  useDraggable,
} from "@heroui/react";
interface ModalComponentProps {
  ip: string;
}


const zodiacSign = [
  "Aries Sign",
  "Taurus Sign",
  "Gemini Sign",
  "Cancer Sign",
  "Leo Sign",
  "Virgo Sign",
  "Libra Sign",
  "Scorpio Sign",
  "Sagittarius Sign",
  "Capricorn Sign",
  "Aquarius Sign",
  "Pisces Sign",
];


const mapIpToZodiac = (ip: string) => {
  const segments = ip.split(".");
  let total = 0;

  for (let index = 0; index < segments.length; index += 1) {
    total += parseInt(segments[index], 10);
    console.log(total);
  }
  return zodiacSign[Math.abs(total) % zodiacSign.length];
};

const ModalComponent: React.FC<ModalComponentProps> = ({ ip }) => {
  const {isOpen, onOpen, onOpenChange} = useDisclosure();
  const targetRef = React.useRef<HTMLDivElement | null>(null);
  const {moveProps} = useDraggable({targetRef, isDisabled: !isOpen});

  

  return ( 
    <>
      <Button className="border-blue-800 border-10 bg-blue-800 text-white rounded-full" onPress={onOpen}>
        Open Secure Zodaic System
      </Button>
      <Modal ref={targetRef} isOpen={isOpen} onOpenChange={onOpenChange} backdrop="opaque"
        classNames={{
          body: "py-6 px-6 space-y-3",
          backdrop: "bg-[#292f46] flex items-center justify-center",
          base: "border-[#292f46] bg-[#19172c] dark:bg-blue-800 text-white mx-4 w-full max-w-xl text-sm sm:text-base",
          header: "border-b-[1px] border-[#292f46] flex flex-row justify-between items-center px-6 py-4",
          footer: "border-t-[1px] border-[#292f46] px-6 py-4",
        }}
      >
        <ModalContent className="rounded-lg">
          {(onClose) => (
            <>
              <ModalHeader {...moveProps} className="flex flex-col gap-1 text-white">
                <h2 className="text-xl font-semibold">
                  Session Details
                </h2>
              </ModalHeader>
              <ModalBody className="text-center text-slate-100">
                <p className="mb-2">
                  We have opened a secure session for you. Please review the information below before proceeding.
                </p>
                <p className="font-medium">
                  Current connection IP: {ip}
                </p>
              </ModalBody>
              <ModalFooter className="flex flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:justify-end">
                <Button 
                  className="rounded-lg bg-slate-100 text-blue-600 hover:bg-slate-200 font-sans px-4 py-2 text-sm sm:text-base w-full sm:w-auto" 
                  variant="flat" 
                  onPress={onClose}
                >
                  Close
                </Button>
                <Button 
                  className="bg-green-500 text-white rounded-lg font-sans px-4 py-2 text-sm sm:text-base w-full sm:w-auto" 
                  variant="flat" 
                  onPress={() => alert(`Your IP manifests as ${mapIpToZodiac(ip)}`)}
                >
                  Convert IP to Zodiac Sign
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}

export default ModalComponent;
