"use client";

import clsx from "clsx";

interface Props extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  maxLength?: number;
  showCount?: boolean;
}

export default function Textarea({
  maxLength,
  showCount = false,
  className,
  value = "",
  ...props
}: Props) {
  const length = String(value).length;

  return (
    <div className="w-full">
      <textarea
        {...props}
        value={value}
        maxLength={maxLength}
        className={clsx(
          "border-border mt-2 min-h-37.5 resize-none rounded-[10px] border bg-white p-4 text-sm transition outline-none sm:text-base",
          "hover:border-main focus:border-main active:border-main focus:border-2",
          className
        )}
      />

      {showCount && maxLength && (
        <div className="text-text-secondary text-right text-xs">
          {length}/{maxLength}
        </div>
      )}
    </div>
  );
}
