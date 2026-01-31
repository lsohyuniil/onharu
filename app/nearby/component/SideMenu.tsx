import { Card } from "@/components/ui/card/Card";
import { Button } from "@/components/ui/Button";
import { StoreAddress } from "@/components/ui/card/StoreAddress";
import { MyAddress } from "./MyAddress";
import { NearbyStore } from "../type/type";
import { LocationSearch } from "./LocationSearch";

export const SideMenu = ({ children }: { children: React.ReactNode }) => {
  return (
    <article className="h-[100vh] w-full max-w-[435px] overflow-y-scroll bg-white px-7.5 py-12.5">
      {children}
    </article>
  );
};
