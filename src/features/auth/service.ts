export const authenticateUser = async (
  email: string,
  password: string,
): Promise<boolean> => {
  await Promise.resolve(); // Simulate async operation
  return email === "test" && password === "111";
};
