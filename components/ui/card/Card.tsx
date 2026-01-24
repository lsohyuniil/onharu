import Link from "next/link";
import Image from "next/image";
import { Like } from "../StoreLike";

interface CardProps {
  storelink: string;
  storeSrc?: string;
  storename: string;
  storeIntroduce: string;
  category?: React.ReactNode;
  operating?: React.ReactNode;
  storeAddress?: React.ReactNode;
  hashtags?: React.ReactNode;
  reservation?: React.ReactNode;
}

export const Card = ({
  storelink,
  storeSrc,
  storename,
  storeIntroduce,
  category,
  operating,
  storeAddress,
  hashtags,
  reservation,
}: CardProps) => {
  return (
    <Link href={storelink} className="group inline-block h-full">
      <div className="h-full overflow-hidden rounded-md border border-gray-300">
        <div className="img-container h-[183px]">
          <div className="relative h-full w-full duration-300 ease-in-out group-hover:scale-105">
            <Image
              src={storeSrc || "/image/page/no-image.svg"}
              fill
              alt="가게 이미지"
              priority
              style={{ objectFit: "cover" }}
            />
          </div>
          {category}
        </div>
        <div className="relative bg-white p-4">
          <div className="absolute top-2 right-5">
            <Like isLiked={false} />
          </div>
          <p className="md:text-md flex items-center gap-1 pr-6 text-base font-bold">
            <span className="line-clamp-1">{storename}</span>
            {operating}
          </p>
          {storeAddress}
          <p className="text-text mt-2 line-clamp-2 text-sm leading-4.75 md:text-base">
            {storeIntroduce}
          </p>
          {(hashtags || reservation) && (
            <div className="mt-7.5 flex items-center gap-1">
              {hashtags}
              {reservation}
            </div>
          )}
        </div>
      </div>
    </Link>
  );
};
