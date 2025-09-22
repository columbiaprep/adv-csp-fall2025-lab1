"use client";
import {Input, Button} from "@heroui/react";

export default function InputAction() {
  return (
    <div className="flex items-end gap-8">
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
        color="primary"
        className="bg-blue-800 text-white font-sans"
      >
        Button
      </Button>
    </div>
  );
}