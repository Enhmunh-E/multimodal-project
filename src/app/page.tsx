"use client";
import { useState } from "react";
import { submitForm } from "./actions";

export default function Home() {
  const [loading, setLoading] = useState<boolean>(false);
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <form
        className="flex flex-col gap-8 row-start-2 items-center sm:items-start"
        action={submitForm}
        onSubmit={async (e) => {
          e.preventDefault();
          setLoading(true);
          const formData = new FormData(e.target as HTMLFormElement);
          await submitForm(formData);
          setLoading(false);
        }}
      >
        <h1 className="text-lg text-center font-[family-name:var(--font-geist-mono)] font-semibold">
          Multimodal Project
        </h1>
        <label className="mb-2  text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
          What makes you feel you are a part of CMU-Q?
        </label>
        <textarea
          className="w-full bg-transparent border border-white border-opacity-20 rounded-sm min-h-11 pt-4 px-4 outline-none"
          placeholder="Your answer here."
          name="firstAnswer"
        />
        <label className="mb-2  text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
          What identity issues are you facing today?
        </label>
        <textarea
          className="w-full bg-transparent border border-white border-opacity-20 rounded-sm min-h-11 pt-4 px-4 outline-none"
          placeholder="Your answer here."
          name="secondAnswer"
        />
        {loading ? (
          <p className="text-sm text-center w-full font-[family-name:var(--font-geist-mono)]">
            Loading...
          </p>
        ) : (
          <button
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
            type="submit"
            rel="noopener noreferrer"
          >
            ↵ Submit
          </button>
        )}
      </form>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <p>
          <span className="font-semibold">Multimodal Project</span> by Enkhmunkh
          Enkhbayar and Furqan Saeed for F24-76100-Y
        </p>
      </footer>
    </div>
  );
}
