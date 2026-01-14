"use client";

import { Button } from "@/components/ui/button";
import { useEffect } from "react";

const AboutError = ({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) => {
  useEffect(() => {
    // pass this error
    console.log(error);
  }, []);

  return (
    <div>
      <h1>something went wrong: please try again and again</h1>
      <Button onClick={reset}>Retry</Button>
    </div>
  );
};

export default AboutError;
