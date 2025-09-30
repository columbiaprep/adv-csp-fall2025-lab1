import {Badge, Avatar} from "@heroui/react";

interface ActionbuttonProps {
  ButtonText: string;
  ButtonClicks?: number; // Optional prop
}

export default function BermanBadge() {
  return (
    <div className="accent-yellow-500 font-sans flex gap-3 items-center">
      <Badge color="primary" content="5" size="sm">
        <Avatar radius="md" src="https://i.pravatar.cc/150?u=a04258a2462d826712d" />
      </Badge>
      <Badge color="primary" content="5" size="md">
        <Avatar radius="md" src="https://i.pravatar.cc/300?u=a042581f4e29026709d" />
      </Badge>
      <Badge color="primary" content="5" size="lg">
        <Avatar radius="md" src="https://i.pravatar.cc/150?u=a04258114e29026302d" />
      </Badge>
      <BermanButton ButtonText="primary" ButtonClicks={5}>
        <Avatar radius="md" src="https://i.pravatar.cc/150?u=a04258114e29026302d" />
      </BermanButton>
    </div>
  );
}

import {Button} from "@heroui/react";

export const BermanButton: React.FC<ActionbuttonProps> = ({ ButtonText, ButtonClicks = 0 }) => {
  return (
    <div className="font-sans flex gap-4 items-center">
      <Button size="sm">Small</Button>
      <Button size="md">Medium</Button>
      <Button size="lg">Large</Button>
    </div>
  );
}

