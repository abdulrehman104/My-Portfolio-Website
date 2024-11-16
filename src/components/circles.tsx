import Image from "next/image";

export const Circles = () => {
  return (
    <div className="w-[200px] xl:w-[300px] absolute -right-16 -bottom-2 mix-blend-color-dodge animate-pulse  z-10">
      <Image
        src="/circles.png"
        width={260}
        height={200}
        alt="Circle"
        className="w-full h-full"
      />
    </div>
  );
};
