"use client";

import { useDraftModeEnvironment } from "next-sanity/hooks";
import { useRouter } from "next/navigation";
import { Button } from "./ui/button";

export const DisableDraftMode = () => {
  const router = useRouter();
  const environemnt = useDraftModeEnvironment();

  if (environemnt !== "live" && environemnt !== "unknown") return null;

  const handleClick = async () => {
    await fetch("/api/draft-mode/disable");
    router.refresh();
  };
  return (
    <Button
      onClick={handleClick}
      className="fixed bottom-4 right-4 bg-gray-50 px-4 py-2 z-50"
    >
      Disable Draft Mode
    </Button>
  );
};
