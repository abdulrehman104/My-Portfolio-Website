import Link from "next/link";

export const RightSide = () => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-end gap-6 text-[#8A7FF8]">
      <Link href="mailto:abdulreehman104@gmail.com">
        <p
          className="text-sm tracking-widest hover:text-white"
          style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
        >
          abdulreehman104@gmail.com
        </p>
      </Link>
      {/* Vertical line */}
      <div className="w-[2px] h-32 bg-gradient-to-b from-[#8A7FF8] to-transparent" />
    </div>
  );
};
