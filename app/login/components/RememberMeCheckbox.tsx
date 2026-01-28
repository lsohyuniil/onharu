"use client";

import { RiCheckLine } from "@remixicon/react";
import clsx from "clsx";
import { UseFormRegisterReturn } from "react-hook-form";

type Props = {
  registerReturn: UseFormRegisterReturn<"rememberMe">;
};

// 체크박스 따로 컴포넌트로 분리
export default function RememberMeCheckbox({ registerReturn }: Props) {
  return (
    <label className="flex cursor-pointer items-center gap-2">
      <input type="checkbox" {...registerReturn} className="peer hidden" />
      <span
        className={clsx(
          "flex h-4 w-4 items-center justify-center rounded border",
          "peer-checked:bg-main peer-checked:border-main",
          "border-[#E0E0E0] bg-white"
        )}
      >
        <RiCheckLine color="rgba(255,255,255,1)" size={14} />
      </span>
      아이디 기억하기
    </label>
  );
}
