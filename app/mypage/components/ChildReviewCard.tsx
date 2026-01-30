"use client";

import { ReviewTarget } from "../types";
import { RiArrowRightSLine } from "@remixicon/react";
import { Button } from "@/components/ui/Button";
import { useRouter } from "next/navigation";

export default function ChildReviewCard({ reviewTargets }: { reviewTargets?: ReviewTarget[] }) {
  const router = useRouter();

  const hasReviewTarget = reviewTargets && reviewTargets.length > 0;

  return (
    <div className="bg-secondary flex-1 rounded-[10px] p-5 lg:p-7">
      <div className="mb-4 text-base font-bold sm:mb-8 sm:text-lg">
        사장님께 감사리뷰를 작성해보세요!
      </div>

      {hasReviewTarget ? (
        reviewTargets.map((item, idx) => (
          <div
            key={idx}
            onClick={() => router.push("/review")}
            className="mb-3 flex cursor-pointer items-center justify-between rounded-[10px] border bg-white p-3 sm:mb-5 sm:p-5"
          >
            <div className="flex flex-col gap-2.5 font-medium">
              <p className="sm:text-md text-sm">{item.storeName}</p>
              <p className="text-xs sm:text-base">{item.date} 이용</p>
            </div>

            <RiArrowRightSLine className="text-text-secondary h-5 w-5 sm:h-7.5 sm:w-7.5" />
          </div>
        ))
      ) : (
        <div className="flex flex-col items-center gap-4 rounded-[10px] border bg-white py-10 text-center">
          <p className="sm:text-md text-sm font-medium">작성 가능한 리뷰가 없어요.</p>
          <p className="text-text-secondary text-xs sm:text-sm">
            나눔 가게를 이용하면 감사 리뷰를 남길 수 있어요!
          </p>

          <Button
            onClick={() => router.push("/charitystore")}
            varient="default"
            width="md"
            height="md"
            fontSize="sm"
          >
            나눔가게 찾기
          </Button>
        </div>
      )}
    </div>
  );
}
