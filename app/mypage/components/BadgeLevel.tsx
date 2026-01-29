import Image from "next/image";

export default function BadgeLevel({ level }: { level: string }) {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="flex h-25 w-25 items-center justify-center rounded-full border bg-white">
        <Image src="/image/page/badge.svg" alt={`${level} 배지`} width={80} height={80} />
      </div>
      <p>Level</p>
      <p className="text-[28px] font-bold">{level}</p>
    </div>
  );
}
