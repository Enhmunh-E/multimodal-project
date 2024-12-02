import { LegacyRef } from "react";

export const Welcome = ({ ref }: { ref: LegacyRef<HTMLDivElement> }) => {
  return (
    <div
      className="container mx-auto flex flex-col  items-start justify-center text-base md:text-lg font-medium mt-4 md:mt-16 p-4"
      ref={ref}
    >
      <p className="font-bold text-3xl pb-4">Welcome,</p>
      <p>
        A multimodal project by Enkhmunkh Enkhbayar and Furqan Saeed for 76-100.
        This website aims to{" "}
        <span className="text-[#c41e3a]">
          highlight the key aspects of our identity as CMU-Qatar Students
        </span>
        , through an interactive word art that corresponds to the various
        aspects of what makes us connected to CMU-Q. There is also a section to
        voice out various issues we experience at the Campus, particularly
        related to isolation (this is anonymous). We hope this website{" "}
        <span className="text-[#c41e3a]">
          allows you to learn more about the &apos;model&apos; student here at
          CMU-Q{" "}
        </span>
        and{" "}
        <span className="text-[#c41e3a]">
          be aware of the various issues we go through
        </span>
        , hoping to help your peers when you see these issues prevailing.
      </p>
    </div>
  );
};
