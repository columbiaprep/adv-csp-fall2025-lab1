"use client";
import {Progress} from "@heroui/react";
import {Card} from "@heroui/card";
import React from 'react';

interface ArmenBoxProps {
  value: number;
  label?: string;
  cardText?: string;
  className?: string;
}

const ArmenBox: React.FC<ArmenBoxProps> = ({
  value,
  label = "Clicks",
  cardText = "Make beautiful websites regardless of your design experience.",
  className = "max-w-md",
}) => {
  return (
    <div>
      <Progress className={className} label={label} value={value} size='lg' />
      <Card>
        <p>{cardText}</p>
      </Card>
  </div>
  );
};

export default ArmenBox;