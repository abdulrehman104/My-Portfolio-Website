import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Image from "next/image";

export const FooterCard = () => {
  return (
    <Card className="w-full overflow-hidden relative bg-gradient-to-br from-[#0a0a1f] to-[#0f0f2d] border-0">
      <div className="absolute lg:left-[350px] bottom-0">
        <Image
          src="/zero.png"
          alt="Decorative background shape"
          width={800}
          height={800}
          className="opacity-80"
        />
      </div>

      <div className="relative z-10 p-8 md:p-12 flex flex-col items-center justify-center">
        <h2 className="text-2xl md:text-5xl font-bold text-white text-center mb-8 leading-tight">
          Do You Want To Start
          <br />a Project Together?
        </h2>

        <Link href="/contact-us">
          <Button className="bg-gradient-to-br from-[#8A7FF8] to-[#FF3BFF] text-white hover:opacity-80 px-8 py-6 text-lg">
            Let&apos;s Talk
          </Button>
        </Link>
      </div>

    </Card>
  );
};
