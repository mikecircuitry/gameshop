"use server";
import { authenticateUser } from "@/services/authService";

export type ResponseResult = {
  success: boolean;
  message?: string;
};

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
