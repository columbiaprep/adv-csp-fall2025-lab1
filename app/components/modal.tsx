"use client";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@heroui/react";

export default function ModalComponent() {
  const {isOpen, onOpen, onOpenChange} = useDisclosure();

  return (
    <>
      <Button className="border-blue-800 border-10 bg-blue-800 rounded-full" onPress={onOpen}>Open Modal</Button>
      <Modal className="mt-6" isOpen={isOpen} onOpenChange={onOpenChange} backdrop="opaque" 
        classNames={{
          body: "py-6",
          backdrop: "bg-[#292f46]",
          base: "border-[#292f46] bg-[#19172c] dark:bg-blue-800 text-[#000000] max-w-4xl",
          header: "border-b-[1px] border-[#292f46] flex flex-row justify-between items-center",
          footer: "border-t-[1px] border-[#292f46]",
        }}
        >
        <ModalContent className="rounded-xl justify-center items-center">
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                <h2 className="text-xl font-semibold">
                    Ts Modal
                </h2>
              </ModalHeader>
              <ModalBody>
                <p>
                  please work 🙏
                </p>
              </ModalBody>
              <ModalFooter className="flex justify-center items-center gap-4 p-6">
                <Button 
                  className="rounded-lg bg-slate-100 text-blue-600 hover:bg-slate-200 font-sans px-2" 
                  variant="flat" 
                  onPress={onClose}
                >
                  Close
                </Button>
                <Button 
                  className="bg-green-500 text-white rounded-lg font-sans px-2" 
                  variant="flat" 
                  onPress={onClose}>
                    Thingy
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
