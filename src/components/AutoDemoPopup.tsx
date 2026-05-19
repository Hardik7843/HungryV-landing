"use client";

import { useEffect, useState } from "react";
import { DemoFormPopup } from "@/components/DemoFormPopup";

export function AutoDemoPopup() {
  const [isOpen, setIsOpen] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 15000);

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsOpen(false);
  };

  return <DemoFormPopup isOpen={isOpen} onClose={handleClose} />;
}
