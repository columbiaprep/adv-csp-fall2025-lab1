"use client";
import {Input, Button} from "@heroui/react";

export default function InputAction() {
  return (
    <>
    <Input
      isReadOnly
      className="max-w-xs"
      defaultValue="junior@heroui.com"
      label="Email"
      type="email"
      variant="bordered"
    />
    <Button color="primary">Button</Button>
    </>
  );
}