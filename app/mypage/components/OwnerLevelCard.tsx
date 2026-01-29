"use client";

import { Button } from "@/components/ui/Button";
import { getOwnerLevel } from "../utils/getOwnerLevel";
import { useRouter } from "next/navigation";
import BadgeLevel from "./BadgeLevel";

export default function OwnerLevelCard({ shareCount }: { shareCount: number }) {
  const router = useRouter();

  const levelInfo = getOwnerLevel(shareCount);

  return (
    <div className="bg-secondary flex-1 rounded-[10px] p-7">
      <div className="flex items-center gap-6">
        <div className="flex flex-col items-center text-center">
          <BadgeLevel level={levelInfo.level} />
        </div>

        <div className="mt-8 flex flex-col gap-16 font-medium">
          <div>
            <p className="text-md">
              지금까지 <span className="font-bold">{shareCount}회</span> 나눔했어요.
            </p>
            {levelInfo.nextLevel && (
              <p>
                <span className="text-main">{levelInfo.nextLevel.remainingCount}회</span> 더
                나눔하면 {levelInfo.nextLevel.name} 등급이에요!
              </p>
            )}
          </div>

          <Button
            onClick={() => router.push("/mypage/sharing/create")}
            varient="default"
            width="md"
            height="md"
            fontSize="sm"
          >
            나눔 하러 가기
          </Button>
        </div>
      </div>
    </div>
  );
}
