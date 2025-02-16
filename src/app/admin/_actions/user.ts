import db from "@/db/db";
import { notFound } from "next/navigation";

export async function deleteUser(id: string) {
  console.log("Delete", id);
  const user = await db.user.delete({
    where: { id },
  });
  if (user == null) return notFound();

  return user;
}
