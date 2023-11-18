"use client";

import Button from "@dev/components/Buttons";
import { useFormStatus } from "react-dom";

function Submit() {
  const status = useFormStatus();

  return (
    <Button.Default
      loading={status.pending}
      label="submit-message"
      className="!mt-4"
    />
  );
}

export default Submit;
