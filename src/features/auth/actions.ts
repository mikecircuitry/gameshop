"use server";
import { authenticateUser } from "@features/auth/service";
import { ResponseResult } from "@/features/auth/types";

export async function loginAction(formData: FormData): Promise<ResponseResult> {
  const email = formData.get("username") as string;
  const password = formData.get("password") as string;
  const result = await authenticateUser(email, password);

  if (result) {
    return { success: true };
  } else {
    return { success: false, message: "Invalid Email or Password" };
  }
}
