import Image from "next/image";

export const Avatar = () => {
  return (
    <div className="hidden xl:flex xl:max-w-none">
      <Image
        src="/avatar.png"
        alt="Avatar"
        width={737}
        height={678}
        className="translate-z-0 w-full h-full object-cover"
      />
    </div>
  );
};
