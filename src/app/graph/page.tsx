"use client";
import { Flow } from "@/components/Flow";
import React, { useState, useEffect } from "react";
import { getResponses } from "../actions";

type ResponseType = {
  firstAnswer: string;
  secondAnswer: string;
};

export default function GraphPage() {
  const [size, setSize] = useState<number[] | null>(null);
  const [responses, setResponses] = useState<ResponseType[]>([]);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [loading, setLoading] = useState<boolean>(true);
  useEffect(() => {
    const onResize = () => {
      setSize([window.innerWidth, window.innerHeight]);
    };
    async function fetchResponses() {
      setLoading(true);
      const data = await getResponses();
      console.log(data);
      setResponses(data.data as ResponseType[]);
      setLoading(false);
    }
    fetchResponses();
    onResize();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);
  return (
    <div
      style={{
        width: size?.[0] || 0,
        height: size?.[1] || 0,
      }}
    >
      <Flow />
    </div>
  );
  // return (
  //   <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-4 pt-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
  //     <div className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
  //       <h1 className="text-lg text-center font-[family-name:var(--font-geist-mono)] font-semibold">
  //         Graph!
  //       </h1>
  //       <div
  //         style={{
  //           width: size?.[0] || 0,
  //           height: size?.[1] || 0,
  //         }}
  //       >
  //         <Flow />
  //       </div>
  //     </div>
  //     <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
  //       <p>
  //         <span className="font-semibold">Multimodal Project</span> by Enkhmunkh
  //         Enkhbayar and Furqan Saeed for F24-76100-Y
  //       </p>
  //     </footer>
  //   </div>
  // );
}
