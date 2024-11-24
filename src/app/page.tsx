export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <h1 className="text-lg text-center font-[family-name:var(--font-geist-mono)] font-semibold">
          Multimodal Project
        </h1>
        <ol className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
          <li className="mb-2">What makes you feel you are a part of CMU-Q?</li>
        </ol>
        <textarea
          className="w-full bg-transparent border border-white border-opacity-20 rounded-sm min-h-11 pt-4 px-4 outline-none"
          placeholder="Your answer here."
        />
        <ol className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
          <li>Save and see your changes instantly.</li>
        </ol>
        <textarea
          className="w-full bg-transparent border border-white border-opacity-20 rounded-sm min-h-11 pt-4 px-4 outline-none"
          placeholder="Your answer here."
        />
        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <a
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            ↵ Submit
          </a>
        </div>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <p>
          <span className="font-semibold">Multimodal Project</span> by Enkhmunkh
          Enkhbayar and Furqan Saeed for F24-76100-Y
        </p>
      </footer>
    </div>
  );
}