import { useState } from "react";

const group = [
  {
    groupID: "",
    groupName: "",
    topic: ""
  }
];

export const StudentGroup = () => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <Model action={{ open, setOpen }} />
    </div>
  );
};