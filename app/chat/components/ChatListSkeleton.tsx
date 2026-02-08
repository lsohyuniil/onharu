"use client";

import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export default function ChatListSkeleton() {
  return (
    <div className="mt-section-sm-top mb-section-sm-bottom md:mt-section-lg-top md:mb-section-lg-bottom flex min-h-screen justify-start">
      <div className="wrapper flex w-full sm:gap-7.5">
        <div className="md:border-border h-[calc(100vh-120px)] w-full max-w-133.75 overflow-hidden md:rounded-[10px] md:border md:p-7.5">
          <h3 className="mb-4.25 sm:mb-8.75">
            <Skeleton width={160} className="mb-1 block h-4 sm:h-8" />
            <Skeleton width={180} className="block h-4 sm:h-8" />
          </h3>

          {Array.from({ length: 6 }).map((_, i) => (
            <div
              key={i}
              className="border-border mb-2 flex h-25 gap-1.75 rounded-[10px] border p-5 transition-transform sm:mb-5 sm:gap-3.75"
            >
              <Skeleton circle height={30} width={30} className="sm:h-15 sm:w-15" />

              <div className="ml-3 min-w-0 flex-1">
                <Skeleton height={15} width="50%" className="mb-1.25" />
                <Skeleton height={12} width="80%" />
              </div>

              <div className="ml-3 flex flex-col items-end justify-end">
                <Skeleton height={12} width={20} className="mb-1" />
                <Skeleton height={12} width={30} />
              </div>
            </div>
          ))}
        </div>

        <div className="border-border hidden h-[calc(100vh-120px)] w-full flex-1 rounded-[10px] border sm:block" />
      </div>
    </div>
  );
}
