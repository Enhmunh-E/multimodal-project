import { RefObject } from "react";

export const Header = ({
  welcomeRef,
  ourIdentityRef,
  identityIssueRef,
}: {
  welcomeRef: RefObject<HTMLDivElement>;
  ourIdentityRef: RefObject<HTMLDivElement>;
  identityIssueRef: RefObject<HTMLDivElement>;
}) => {
  return (
    <div className="p-8 text-lg text-center font-[family-name:var(--font-geist-mono)] font-semibold flex flex-row gap-4">
      <button
        className="text-[#c41e3a]"
        onClick={() =>
          welcomeRef?.current?.scrollIntoView({
            behavior: "smooth",
          })
        }
      >
        CMU-Qatar Identity
      </button>
      <span className="w-[2px] bg-white opacity-50 rounded-full" />
      <button
        onClick={() =>
          ourIdentityRef?.current?.scrollIntoView({
            behavior: "smooth",
          })
        }
      >
        Our Identity
      </button>
      <span className="w-[2px] bg-white opacity-50 rounded-full" />
      <button
        onClick={() =>
          identityIssueRef?.current?.scrollIntoView({
            behavior: "smooth",
          })
        }
      >
        Identity Issues
      </button>
    </div>
  );
};
