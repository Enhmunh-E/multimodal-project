// "use client";
// import React, { useState } from "react";
// import { Text } from "@visx/text";
// import { scaleLog } from "@visx/scale";
// import Wordcloud from "@visx/wordcloud/lib/Wordcloud";
// import { answersStr } from "./index";

// interface ExampleProps {
//   width: number;
//   height: number;
//   showControls?: boolean;
//   data: string;
// }

// export interface WordData {
//   text: string;
//   value: number;
// }

// // const colors = ["#143059", "#2F6B9A", "#82a6c2"];

// function wordFreq(text: string): WordData[] {
//   const words: string[] = text.replace(/\./g, "").split(/\s/);
//   const freqMap: Record<string, number> = {};

//   for (const w of words) {
//     if (!freqMap[w]) freqMap[w] = 0;
//     freqMap[w] += 1;
//   }
//   return Object.keys(freqMap).map((word) => ({
//     text: word,
//     value: freqMap[word],
//   }));
// }

// function getRotationDegree() {
//   const rand = Math.random();
//   const degree = rand > 0.5 ? 60 : -60;
//   return rand * degree;
// }

// const words = wordFreq(answersStr);

// const fontScale = scaleLog({
//   domain: [
//     Math.min(...words.map((w) => w.value)),
//     Math.max(...words.map((w) => w.value)),
//   ],
//   range: [10, 100],
// });
// const fontSizeSetter = (datum: WordData) => fontScale(datum.value);

// const fixedValueGenerator = () => 0.5;

// type SpiralType = "archimedean" | "rectangular";

// export default function Hero({
//   width,
//   height,
//   showControls,
//   data,
// }: ExampleProps) {
//   const [spiralType, setSpiralType] = useState<SpiralType>("archimedean");
//   const [withRotation, setWithRotation] = useState(false);
//   const randomHSLA = () => {
//     return `hsla(${~~(360 * Math.random())}, 70%,  72%, 0.8)`;
//   };

//   return (
//     <div className="wordcloud">
//       <Wordcloud
//         words={words}
//         width={width}
//         height={height}
//         fontSize={fontSizeSetter}
//         font={"Impact"}
//         padding={2}
//         spiral={spiralType}
//         rotate={withRotation ? getRotationDegree : 0}
//         random={fixedValueGenerator}
//       >
//         {(cloudWords) =>
//           cloudWords.map((w) => {
//             const c = randomHSLA();
//             return (
//               <Text
//                 key={w.text}
//                 // fill={colors[i % colors.length]}
//                 fill={c}
//                 textAnchor={"middle"}
//                 transform={`translate(${w.x}, ${w.y}) rotate(${w.rotate})`}
//                 fontSize={w.size}
//                 fontFamily={w.font}
//               >
//                 {w.text}
//               </Text>
//             );
//           })
//         }
//       </Wordcloud>
//       {showControls && (
//         <div>
//           <label>
//             Spiral type &nbsp;
//             <select
//               onChange={(e) => setSpiralType(e.target.value as SpiralType)}
//               value={spiralType}
//             >
//               <option key={"archimedean"} value={"archimedean"}>
//                 archimedean
//               </option>
//               <option key={"rectangular"} value={"rectangular"}>
//                 rectangular
//               </option>
//             </select>
//           </label>
//           <label>
//             With rotation &nbsp;
//             <input
//               type="checkbox"
//               checked={withRotation}
//               onChange={() => setWithRotation(!withRotation)}
//             />
//           </label>
//           <br />
//         </div>
//       )}
//       <style jsx>{`
//         .wordcloud {
//           display: flex;
//           flex-direction: column;
//           user-select: none;
//         }
//         .wordcloud svg {
//           margin: 1rem 0;
//           cursor: pointer;
//         }

//         .wordcloud label {
//           display: inline-flex;
//           align-items: center;
//           font-size: 14px;
//           margin-right: 8px;
//         }
//         .wordcloud textarea {
//           min-height: 100px;
//         }
//       `}</style>
//     </div>
//   );
// }

"use client";
import React, { useState } from "react";
import { Text } from "@visx/text";
import { scaleLog } from "@visx/scale";
import Wordcloud from "@visx/wordcloud/lib/Wordcloud";

interface ExampleProps {
  width: number;
  height: number;
  showControls?: boolean;
  data: string; // Use this prop for word data
}

export interface WordData {
  text: string;
  value: number;
}

// const colors = ["#143059", "#2F6B9A", "#82a6c2"];

function wordFreq(text: string): WordData[] {
  const words: string[] = text.replace(/\./g, "").split(/\s/);
  const freqMap: Record<string, number> = {};

  for (const w of words) {
    if (!freqMap[w]) freqMap[w] = 0;
    freqMap[w] += 1;
  }
  return Object.keys(freqMap).map((word) => ({
    text: word,
    value: freqMap[word],
  }));
}

function getRotationDegree() {
  const rand = Math.random();
  const degree = rand > 0.5 ? 60 : -60;
  return rand * degree;
}

const fontScale = scaleLog({
  domain: [1, 100], // Placeholder domain; will be updated dynamically
  range: [10, 100],
});
const fontSizeSetter = (datum: WordData) => fontScale(datum.value);

const fixedValueGenerator = () => 0.5;

type SpiralType = "archimedean" | "rectangular";

export default function Hero({
  width,
  height,
  showControls,
  data,
}: ExampleProps) {
  const [spiralType, setSpiralType] = useState<SpiralType>("archimedean");
  const [withRotation, setWithRotation] = useState(false);
  // Generate words from data prop
  const words = wordFreq(data);

  // Update font scale domain based on new words
  fontScale.domain([
    Math.min(...words.map((w) => w.value)),
    Math.max(...words.map((w) => w.value)),
  ]);

  const randomHSLA = () => {
    return `hsla(${~~(360 * Math.random())}, 70%, 72%, 0.8)`;
  };

  return (
    <div className="wordcloud">
      <Wordcloud
        words={words}
        width={width}
        height={height}
        fontSize={fontSizeSetter}
        font={"Impact"}
        padding={2}
        spiral={spiralType}
        rotate={withRotation ? getRotationDegree : () => 0}
        random={fixedValueGenerator}
      >
        {(cloudWords) =>
          cloudWords.map((w) => {
            const c = randomHSLA();
            return (
              <Text
                key={w.text}
                fill={c}
                textAnchor={"middle"}
                transform={`translate(${w.x}, ${w.y}) rotate(${w.rotate})`}
                fontSize={w.size}
                fontFamily={w.font}
              >
                {w.text}
              </Text>
            );
          })
        }
      </Wordcloud>
      {showControls && (
        <div>
          <label>
            Spiral type &nbsp;
            <select
              onChange={(e) => setSpiralType(e.target.value as SpiralType)}
              value={spiralType}
            >
              <option key={"archimedean"} value={"archimedean"}>
                archimedean
              </option>
              <option key={"rectangular"} value={"rectangular"}>
                rectangular
              </option>
            </select>
          </label>
          <label>
            With rotation &nbsp;
            <input
              type="checkbox"
              checked={withRotation}
              onChange={() => setWithRotation(!withRotation)}
            />
          </label>
          <br />
        </div>
      )}
      <style jsx>{`
        .wordcloud {
          display: flex;
          flex-direction: column;
          user-select: none;
        }
        .wordcloud svg {
          margin: 1rem 0;
          cursor: pointer;
        }

        .wordcloud label {
          display: inline-flex;
          align-items: center;
          font-size: 14px;
          margin-right: 8px;
        }
        .wordcloud textarea {
          min-height: 100px;
        }
      `}</style>
    </div>
  );
}
