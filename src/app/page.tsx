"use client";
import { Header, Support } from "@/components";
import Hero from "@/components/home/hero";
import { useEffect, useMemo, useState } from "react";
import { getResponses } from "./actions";
import { IdentityIssues } from "@/components/home/identityIssues";
import { Footer } from "@/components/home/footer";

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
      (prev, curr) => prev + (curr.answers.mainQ1 || ""),
      ""
    );
  }, [responses]);
  useEffect(() => {
    async function fetchResponses() {
      setLoading(true);
      const data = await getResponses();
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
      <Header />
      <div className="container mx-auto flex flex-col items-center justify-center">
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
      </div>
      {/* <VideoSlide /> */}
      <div className="container mx-auto p-4 items-center flex justify-center my-12">
        <Support />
      </div>
      <IdentityIssues />
      <Footer />
    </div>
  );
};

export default App;
