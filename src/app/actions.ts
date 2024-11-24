"use server";
import { createClient } from "@supabase/supabase-js";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

const supabase = createClient(
  "https://aiszfseoiirlotrcopre.supabase.co",
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ""
);

export async function submitForm(formData: FormData) {
  "use server";
  const firstAnswer = formData.get("firstAnswer");
  const secondAnswer = formData.get("secondAnswer");
  await supabase.from("responses").insert({ firstAnswer, secondAnswer });
  revalidatePath("/");
  redirect("/result");
}

export async function getResponses() {
  "use server";
  return await supabase
    .from("responses")
    .select("*")
    .order("id", { ascending: false });
}
