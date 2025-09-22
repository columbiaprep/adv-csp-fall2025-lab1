"use client";
import {Progress} from "@heroui/react";
import {Card} from "@heroui/card";


export default function ArmenBox() {
    return (
      <>
      <Progress className="max-w-md" label="Clicks" value={55} />

      <Card>

          <p>Make beautiful websites regardless of your design experience.</p>
        
      </Card>
      </>
    );
  }


