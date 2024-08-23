'use server'; 

import { createContact } from "@/lib/microcms";
import { z } from "zod";

export type ContactFormState =
  | { status: 'success' }
  | { status: 'error'; fieldErrors: Record<string, string[] | undefined> }
  | { status: 'idle' };

const contactFormSchema = z.object({
  name: z.string().min(1, "名前を入力して下さい"),
  email: z.string().email("正しいメールアドレスを入力して下さい"),
  message: z.string().min(1, "メッセージを入力して下さい"),
})

export const submitContactForm = async (prevState: ContactFormState, formData: FormData): Promise<ContactFormState> => {
  try {
    const data = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      message: formData.get("message") as string,
    }

    const validatedData = contactFormSchema.safeParse(data);
    
    if (!validatedData.success) {
      // エラー時にエラーステータス＆エラーメッセージを返却
      return {
        status: 'error',
        fieldErrors: validatedData.error.flatten().fieldErrors,
      };
    }

    await createContact(validatedData.data);
    
    return { status: 'success'};
  } catch (error) {
    console.error('Failed to submit contact form:', error);
    return { status: 'error', fieldErrors: {} };
  }
};


