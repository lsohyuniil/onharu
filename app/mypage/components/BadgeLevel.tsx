import Image from "next/image";

export default function BadgeLevel({ level }: { level: string }) {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="flex h-20 w-20 items-center justify-center rounded-full border bg-white sm:h-25 sm:w-25">
        <Image
          src="/image/page/badge.svg"
          alt={`${level} 배지`}
          width={80}
          height={80}
          className="h-full w-full"
          loading="eager"
        />
      </div>
      <p>Level</p>
      <p className="text-lg font-bold sm:text-[28px]">{level}</p>
    </div>
  );
}
