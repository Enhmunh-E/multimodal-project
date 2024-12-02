"use client";

import { getIdentityIssues, submitIdentityIssue } from "@/app/actions";
import { LegacyRef, useEffect, useState } from "react";

type IdentityIssueType = {
  answer: string;
  id?: number;
};

export const IdentityIssues = ({ ref }: { ref: LegacyRef<HTMLDivElement> }) => {
  const [identity, setIdentity] = useState("");
  const [loading, setLoading] = useState(false);
  const [identityIssues, setIdentityIssues] = useState<IdentityIssueType[]>([]);
  const submit = async () => {
    setLoading(true);
    await submitIdentityIssue(identity);
    setIdentityIssues([{ answer: identity }, ...identityIssues]);
    setIdentity("");
    setLoading(false);
  };
  useEffect(() => {
    async function fetchIdentityIssues() {
      setLoading(true);
      const data = await getIdentityIssues();
      setIdentityIssues(data.data as IdentityIssueType[]);
      setLoading(false);
    }
    fetchIdentityIssues();
  }, []);
  return (
    <div
      className="container mx-auto p-4 flex flex-col items-center justify-center gap-3"
      ref={ref}
    >
      <div className="border-white border w-full p-5 border-opacity-20 rounded flex flex-col md:flex-row gap-4">
        <div className="flex flex-1 flex-col md:w-1/2">
          <h1 className="text-xl underline text-center sm:text-left font-[family-name:var(--font-geist-mono)] font-bold">
            Identity Issues
          </h1>
          <label className="text-base text-center sm:text-left font-[family-name:var(--font-geist-mono)] font-bold">
            Is there anything at CMU-Q that makes you feel isolated. As if you
            don’t belong here?
          </label>
          <div className="flex flex-1 flex-col gap-4 items-center pt-4">
            <input
              className="w-[100%] bg-transparent border border-white border-opacity-20 rounded-sm min-h-11 py-4 px-4 outline-none"
              placeholder="Your answer here."
              value={identity}
              onChange={(e) => setIdentity(e.target.value)}
            />
            <button
              className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 whitespace-nowrap"
              onClick={submit}
              rel="noopener noreferrer"
            >
              ↵ Submit
            </button>
          </div>
        </div>
        <div className="md:w-1/2 flex flex-1 flex-col gap-3 max-h-[256px] overflow-y-scroll">
          {loading ? (
            <div>Loading...</div>
          ) : (
            <>
              {identityIssues.map((identityIssue, index: number) => (
                <div
                  key={index}
                  className="border border-white p-4 rounded bg-white bg-opacity-5 [family-name:var(--font-geist-mono)] font-bold"
                >
                  {identityIssue.answer}
                </div>
              ))}
            </>
          )}
          {/* {new Array(6).fill(null).map((_, index) => (
            <div
              key={index}
              className="border border-white p-4 rounded bg-white bg-opacity-5 [family-name:var(--font-geist-mono)] font-bold"
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
              earum veritatis autem, eos unde corrupti consequatur, dolores
              vitae repellendus optio repellat totam! Tempore eius, velit
              blanditiis esse nemo asperiores tenetur!
            </div>
          ))} */}
        </div>
      </div>
    </div>
  );
};
