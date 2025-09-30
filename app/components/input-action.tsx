"use client";
import {Input, Button, useDisclosure,} from "@heroui/react";
import MyComponent2 from "./lab3-props-example";

export default function InputAction() {
  const {isOpen, onOpen, onOpenChange} = useDisclosure();
  return (
    <div className="flex items-end gap-8">
      <MyComponent2 title="Input Action Button" count={1} />
      <Input
        isReadOnly
        className="max-w-xs font-sans border border-slate-300 focus:border-blue-800"
        defaultValue="jweiner27@cgps.org"
        label="Email"
        type="email"
        variant="bordered"
        placeholder="Enter your email"
      />
      <Button
        onPress={onOpen}
        color="primary"
        className="bg-blue-800 text-white font-sans"
      >
        Button
      </Button>
    </div>
  );
}