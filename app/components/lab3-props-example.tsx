// components/MyComponent.tsx
import React from 'react';

interface MyComponentProps {
  title: string;
  count?: number; // Optional prop
}

const MyComponent2: React.FC<MyComponentProps> = ({ title, count = 0 }) => {
  return (
    <div>
      <h1>{title}</h1>
      <p>Count: {count}</p>
    </div>
  );
};

export default MyComponent2;
