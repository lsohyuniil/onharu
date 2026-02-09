"use client";
import Image from "next/image";
import { DesktopView } from "./DesktopView";
import { MobileView } from "./MobileView";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { cn } from "@/lib/utils";
export const Banner = () => {
  const smallDesktopQuery = useMediaQuery("(max-width:1410px)");
  const TabletQuery = useMediaQuery("(max-width: 1010px");
  const MobileQuery = useMediaQuery("(max-width: 600px");

  return (
    <div
      className={cn(
        "relative h-200 w-full overflow-hidden",
        smallDesktopQuery && "h-160",
        TabletQuery && "h-140",
        MobileQuery && "h-85"
      )}
    >
      <Image
        src={"/image/banner/background.png"}
        alt=""
        fill
        style={{ objectFit: "cover" }}
        loading="eager"
      />
      {TabletQuery === false && <DesktopView></DesktopView>}
      {TabletQuery && <MobileView></MobileView>}
    </div>
  );
};
