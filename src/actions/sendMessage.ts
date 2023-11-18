"use server";

import { sendMail } from "@dev/libs/email";
import { z } from "zod";

const MessageSchema = z.object({
  name: z.string().min(4),
  email: z.string().email(),
  message: z.string().min(10),
});

export async function sendMessage(_: any, formData: FormData) {
  const { name, email, message } = MessageSchema.parse({
    name: formData.get("name"),
    email: formData.get("email"),
    message: formData.get("message"),
  });

  const result = await sendMail({
    from: email,
    subject: `Message from ${name}`,
    text: message,
    name,
  });

  console.log(result);
}
