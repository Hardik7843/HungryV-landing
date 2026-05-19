"use client";

import { useEffect, useState } from "react";
import { DemoFormPopup } from "@/components/DemoFormPopup";

export function AutoDemoPopup() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const dismissed = sessionStorage.getItem("demo-popup-dismissed");
    if (dismissed) return;

    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 15000);

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    sessionStorage.setItem("demo-popup-dismissed", "true");
  };

  return <DemoFormPopup isOpen={isOpen} onClose={handleClose} />;
}