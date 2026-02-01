import { useState } from "react";

export const useActiveCard = () => {
  const [activeId, setActiveId] = useState("");

  const handleActiveCard = (id: string) => {
    setActiveId(id);
  };

  return { activeId, setActiveId, handleActiveCard };
};
