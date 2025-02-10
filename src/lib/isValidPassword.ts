export async function isValidPassword(
  password: string,
  hashedPassword: string
) {
  console.log(await hashPassword(password));
  return (await hashPassword(password)) === hashedPassword;
}

async function hashPassword(pasword: string) {
  const arrayBuffer = await crypto.subtle.digest(
    "SHA-512",
    new TextEncoder().encode(pasword)
  );
  return Buffer.from(arrayBuffer).toString("base64");
}
