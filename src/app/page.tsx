import { redirect } from "next/dist/client/components/redirect";

export default async function page() {
  redirect("/games");
}
