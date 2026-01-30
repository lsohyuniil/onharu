"use client";

import { Button } from "@/components/ui/Button";
import { useRouter } from "next/navigation";
import BadgeLevel from "./BadgeLevel";

interface Props {
  description: string;
  subDescription: string;
  buttonText: string;
  moveTo: string;
}

export default function OwnerGuideCard({ description, subDescription, buttonText, moveTo }: Props) {
  const router = useRouter();

  return (
    <div className="bg-secondary flex-1 rounded-[10px] p-5 sm:p-7">
      <div className="flex items-center gap-3 sm:gap-6">
        <div className="flex flex-col items-center text-center">
          <BadgeLevel level="비기너" />
        </div>

        <div className="mt-4 flex flex-col gap-4 font-medium break-keep sm:mt-8 sm:gap-16">
          <div>
            <p>{description}</p>
            <p className="text-xs sm:text-base">{subDescription}</p>
          </div>

          <Button
            onClick={() => router.push(moveTo)}
            varient="default"
            width="md"
            height="md"
            fontSize="sm"
          >
            {buttonText}
          </Button>
        </div>
      </div>
    </div>
  );
}
