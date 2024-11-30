"use client";
import { useState } from "react";
import { submitForm } from "../actions";

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
        <p className="mb-2 text-sm text-center font-[family-name:var(--font-geist-mono)]">
          This is a form that aims to find out from the students CMU-Q about
          what makes a CMU-Q student truly a CMU-Q student. The form also aims
          to find out about any issues students at the CMU-Q campus face with
          their identity. This form is totally anonymous (except for the data
          entered), the data entered can be viewed grouped together in a nest of
          different mind maps, highlighting the variety and uniqueness of the
          CMU-Q identity.
        </p>
        <p className="opacity-70 mb-2 text-sm text-center font-[family-name:var(--font-geist-mono)]">
          *Disclaimer: Thought the form and data are anonymous, this website
          published on the internet and can be visited and viewed by anyone.
        </p>
        <div className="w-full flex flex-col gap-2">
          <label className="text-base text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
            What is your nationality?
          </label>
          <input
            className="w-full bg-transparent border border-white border-opacity-20 rounded-sm min-h-11 py-4 px-4 outline-none"
            placeholder="Your answer here."
            name="nationality"
          />
        </div>
        <div className="w-full flex flex-col gap-2">
          <label className="text-base text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
            Would you say that your nationality is a strong representation of
            your own identity?
          </label>
          <select
            className="w-full bg-transparent border border-white border-opacity-20 rounded-sm py-4 px-4 outline-none"
            name="nationalityIdentity"
          >
            <option>YES</option>
            <option>NO</option>
          </select>
        </div>
        <div className="w-full flex flex-col gap-2">
          <label className="text-base text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
            What do your instagram reels, or tiktok feed look like?
          </label>
          <select
            className="w-full bg-transparent border border-white border-opacity-20 rounded-sm py-4 px-4 outline-none"
            name="feed"
          >
            <option value="Completely Random">Completely Random</option>
            <option value="Hyper-specific to one thing">
              Hyper-specific to one thing
            </option>
            <option value="Memes">Memes</option>
            <option value="Interesting things that are related to your interests or hobbies">
              Interesting things that are related to your interests or hobbies
            </option>
            <option
              value="A theme that correlates strongly with your beliefs (i.e.
              religious)"
            >
              A theme that correlates strongly with your beliefs (i.e.
              religious)
            </option>
            <option value="Other">Other</option>
          </select>
        </div>
        <div className="w-full flex flex-col gap-2">
          <label className="text-base text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
            Compared to your peers, is your feed any different?
          </label>
          <select
            className="w-full bg-transparent border border-white border-opacity-20 rounded-sm py-4 px-4 outline-none"
            name="feedDifference"
          >
            <option>YES</option>
            <option>NO</option>
          </select>
        </div>
        <div className="w-full flex flex-col gap-2">
          <label className="text-base text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
            Does this feed represent you as a person and your identity?
          </label>
          <select
            className="w-full bg-transparent border border-white border-opacity-20 rounded-sm py-4 px-4 outline-none"
            name="feedRepresentation"
          >
            <option>YES</option>
            <option>NO</option>
          </select>
        </div>
        <div className="w-full flex flex-col gap-2">
          <label className="text-base text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
            An identity is how we choose to represent ourselves, or how we as
            people can be described.
          </label>
          <textarea
            className="w-full bg-transparent border border-white border-opacity-20 rounded-sm min-h-11 py-4 px-4 outline-none"
            placeholder="Yes or no, and why?"
            name="identityQuestion"
          />
        </div>
        <div className="w-full flex flex-col gap-2">
          <label className="text-base text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
            There are many different smaller identities that make up our main
            identity as a whole, knowing this, what are the identities you think
            that make up the CMU-Q identity as a whole.
          </label>
          <textarea
            className="w-full bg-transparent border border-white border-opacity-20 rounded-sm min-h-11 py-4 px-4 outline-none"
            placeholder="Answer Here."
            name="mainQ1"
          />
        </div>
        <div className="w-full flex flex-col gap-2">
          <label className="text-base text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
            Lastly, is there anything at CMU-Q that makes you feel isolated. As
            if you don’t belong here.
          </label>
          <textarea
            className="w-full bg-transparent border border-white border-opacity-20 rounded-sm min-h-11 py-4 px-4 outline-none"
            placeholder="Answer Here."
            name="mainQ2"
          />
        </div>

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
