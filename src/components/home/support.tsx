"use client";

import { submitIdentity } from "@/app/actions";
import { useState } from "react";

export const Support = ({
  fetchResponses,
}: {
  fetchResponses: () => unknown;
}) => {
  const [identity, setIdentity] = useState("");
  const [loading, setLoading] = useState(false);
  const submit = async () => {
    setLoading(true);
    await submitIdentity(identity);
    await fetchResponses();
    setIdentity("");
    setLoading(false);
  };
  return (
    <div className="flex flex-col gap-2">
      <label className="text-base text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
        What is the one word when you think of your CMU Identity?
      </label>
      <div className="flex flex-col md:flex-row items-end md:items-center gap-4">
        <div>
          <input
            className="w-full bg-transparent border border-white border-opacity-20 rounded-sm min-h-11 py-4 px-4 outline-none max-w-[400px] min-w-80"
            placeholder="You can use the same word."
            value={identity}
            onChange={(e) => setIdentity(e.target.value)}
          />
        </div>
        {loading ? (
          <div>Loading...</div>
        ) : (
          <button
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 whitespace-nowrap"
            rel="noopener noreferrer"
            onClick={submit}
            disabled={loading}
          >
            ↵ Submit
          </button>
        )}
      </div>
    </div>
  );
};
