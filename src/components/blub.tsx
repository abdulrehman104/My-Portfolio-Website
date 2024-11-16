import Image from "next/image";

export const Blub = () => {
  return (
    <div className="absolute -left-36 -bottom-12 rotate-12 mix-blend-color-dodge animate-pulse  z-10 w-[200px] xl:w-[260px]">
      <Image
        src="/bulb.png"
        alt="Blub Image"
        width={260}
        height={200}
        className="w-full h-full"
      />
    </div>
  );
};
