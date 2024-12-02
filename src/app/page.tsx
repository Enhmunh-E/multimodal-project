"use client";
import { Header, Support } from "@/components";
import Hero from "@/components/home/hero";
import { useEffect, useMemo, useRef, useState } from "react";
import { getIdentities } from "./actions";
import { IdentityIssues } from "@/components/home/identityIssues";
import { Footer } from "@/components/home/footer";
import { Welcome } from "@/components/home/welcome";

function capitalizeFirstLetter(val: string) {
  return String(val).charAt(0).toUpperCase() + String(val).slice(1);
}

const App = () => {
  const [size, setSize] = useState<{
    width: number;
    height: number;
  } | null>(null);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [responses, setResponses] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const texts = useMemo(() => {
    return responses.reduce(
      (prev, curr) =>
        prev + (curr.answer ? capitalizeFirstLetter(curr.answer) + " " : " "),
      ""
    );
  }, [responses]);
  const welcomeRef = useRef<HTMLDivElement | null>(null);
  const ourIdentityRef = useRef<HTMLDivElement | null>(null);
  const identityIssueRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    async function fetchResponses() {
      setLoading(true);
      const data = await getIdentities();
      setResponses(data.data as ResponseType[]);
      setLoading(false);
    }
    fetchResponses();
    const onResize = () => {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    onResize();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);
  return (
    <div className="flex flex-col min-h-screen">
      <Header
        welcomeRef={welcomeRef}
        ourIdentityRef={ourIdentityRef}
        identityIssueRef={identityIssueRef}
      />
      <Welcome ref={welcomeRef} />
      <div className="w-full h-1 bg-white my-16 opacity-20" />
      <div
        className="container mx-auto flex flex-col items-center justify-center"
        ref={ourIdentityRef}
      >
        <p className="font-bold text-3xl text-[#c41e3a] mb-4">OUR IDENTITY</p>
        {size && (
          <>
            <span
              className="w-100vw h-100vh absolute font-black opacity-35 -z-10"
              style={{
                fontSize: size?.width / 8,
                color: "#c41e3a",
                textShadow: "0 0 10px #fff",
              }}
            >
              CMU IDENTITY
            </span>
            {loading ? (
              <div>Loading...</div>
            ) : (
              <div className="relative z-10">
                <Hero
                  // width={size.width > size.height ? size.width : size.height}
                  // height={size.height > size.width ? size.width : size.height}
                  width={Math.min(size.width, 1280)}
                  height={Math.min(size.width, 1280) / 2}
                  showControls={false}
                  data={texts}
                />
              </div>
            )}
          </>
        )}
        <div className="mt-12 p-4">
          <Support />
        </div>
      </div>

      <div className="w-full h-1 bg-white opacity-20 my-16" />
      <IdentityIssues ref={identityIssueRef} />
      <Footer />
    </div>
  );
};

export default App;
