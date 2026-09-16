"use server";

import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function createProduct(formData: FormData) {
  const name = formData.get("name") as string;
  const slug = name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)+/g, "");
  const description = formData.get("description") as string;
  const price = parseFloat(formData.get("price") as string);
  const oldPriceRaw = formData.get("oldPrice") as string;
  const oldPrice = oldPriceRaw ? parseFloat(oldPriceRaw) : null;
  const stock = parseInt(formData.get("stock") as string, 10);
  const category = formData.get("category") as string;
  
  // Imagens simuladas/mockadas
  const images = ["https://via.placeholder.com/600x600"];

  await prisma.product.create({
    data: {
      name,
      slug,
      description,
      price,
      oldPrice,
      stock,
      category,
      images,
    },
  });

  revalidatePath("/admin/produtos");
  revalidatePath("/");
  redirect("/admin/produtos");
}

export async function deleteProduct(id: string) {
  await prisma.product.delete({
    where: { id },
  });
  
  revalidatePath("/admin/produtos");
  revalidatePath("/");
}
