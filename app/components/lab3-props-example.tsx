// components/MyComponent.tsx
"use client";
import React from "react";

interface MyComponent2Props {
  title: string;
  count: number;
}

const MyComponent2: React.FC<MyComponent2Props> = ({ title, count }) => {
  return (
    <div className="p-4 border rounded shadow-sm">
      <h1 className="text-xl font-bold">{title}</h1>
      <p className="text-gray-600">Count: {count}</p>
    </div>
  );
};

export default MyComponent2;