import { PrismaClient } from "@prisma/client";
export const prisma = new PrismaClient();
//
export const delay = async () =>
  await new Promise((res) => setTimeout(() => res(""), 1000));
