// "use client";
// import { useEffect, useState } from "react";
// import { getResponses } from "../actions";

// type ResponseType = {
//   firstAnswer: string;
//   secondAnswer: string;
// };

export default function ResultPage() {
  // const [responses, setResponses] = useState<ResponseType[]>([]);
  // const [loading, setLoading] = useState<boolean>(true);
  // useEffect(() => {
  //   async function fetchResponses() {
  //     setLoading(true);
  //     const data = await getResponses();
  //     setResponses(data.data as ResponseType[]);
  //     setLoading(false);
  //   }
  //   fetchResponses();
  // }, []);
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-4 pt-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <div className="flex flex-col gap-8 row-start-2 items-center sm:items-start max-w-[512px]">
        <h1 className="text-lg text-center font-[family-name:var(--font-geist-mono)] font-semibold">
          {/* Multimodal Project Responses */}
          Thank You!
        </h1>
        {/* {loading && (
          <p className="text-sm text-center w-full font-[family-name:var(--font-geist-mono)]">
            Loading...
          </p>
        )}
        {responses.map((response, index) => (
          <div
            className="flex flex-col gap-1 border-white border-opacity-10 rounded-md border p-4"
            key={index}
          >
            <label className="mb-2  text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
              1. What makes you feel you are a part of CMU-Q?
            </label>
            <div className="w-full bg-transparent border border-white border-opacity-20 rounded-sm py-2 bg-white bg-opacity-10 px-4 outline-none">
              {response.firstAnswer}
            </div>
            <label className="my-2 text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
              2. What identity issues are you facing today?
            </label>
            <div className="w-full bg-transparent border border-white border-opacity-20 rounded-sm py-2 bg-white bg-opacity-10 px-4 outline-none">
              {response.secondAnswer}
            </div>
          </div>
        ))} */}
      </div>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <p>
          <span className="font-semibold">Multimodal Project</span> by Enkhmunkh
          Enkhbayar and Furqan Saeed for F24-76100-Y
        </p>
      </footer>
    </div>
  );
}
