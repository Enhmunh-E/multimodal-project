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
  console.log(formData);
  const obj = {
    nationality: formData.get("nationality"),
    nationalityIdentity: formData.get("nationalityIdentity"),
    feed: formData.get("feed"),
    feedDifference: formData.get("feedDifference"),
    feedRepresentation: formData.get("feedRepresentation"),
    identityQuestion: formData.get("identityQuestion"),
    mainQ1: formData.get("mainQ1"),
    mainQ2: formData.get("mainQ2"),
  };
  await supabase.from("responses").insert({ answers: obj });
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

export async function submitIdentity(identity: string) {
  "use server";
  return await supabase.from("identities").insert({
    answer: identity,
  });
}

export async function submitIdentityIssue(identityIssue: string) {
  "use server";
  return await supabase.from("identityIssues").insert({
    answer: identityIssue,
  });
}

export async function getIdentities() {
  "use server";
  return await supabase
    .from("identities")
    .select("*")
    .order("id", { ascending: false });
}

export async function getIdentityIssues() {
  "use server";
  return await supabase
    .from("identityIssues")
    .select("*")
    .order("id", { ascending: false });
}
