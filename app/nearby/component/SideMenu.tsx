import { useEffect, useState } from "react";
import { Card } from "@/components/ui/card/Card";
import { Button } from "@/components/ui/Button";
import { StoreAddress } from "@/components/ui/card/StoreAddress";
import { getAddress } from "@/components/feature/map/getAddress";
import { NearbyStore } from "../type/type";

export const SideMenu = ({
  store,
  mylocation,
}: {
  store: NearbyStore[];
  mylocation: { lat: number; lng: number };
}) => {
  const [myaddress, setMyAddress] = useState("");

  useEffect(() => {
    const loadAddress = async () => {
      const loadAddress = await getAddress({ mylocation });

      setMyAddress(loadAddress);
    };

    loadAddress();
  }, [mylocation]);

  return (
    <article className="h-[100vh] w-full max-w-[435px] overflow-y-scroll bg-white px-7.5 py-12.5">
      <div className="text-md flex items-center justify-between font-bold md:text-xl">
        {myaddress}
        <Button varient="default" fontSize="sm" width="xs" height="xs">
          위치 변경
        </Button>
      </div>

      <div className="grid grid-cols-1 gap-7.5">
        {store.map(store => (
          <Card
            key={store.id}
            storelink="/"
            storeSrc=""
            storename={store.name}
            storeAddress={<StoreAddress address={store.address} />}
            storeIntroduce={store.description}
            reservation={
              <Button varient="default" width="lg" height="md" fontSize="md">
                예약하기
              </Button>
            }
          ></Card>
        ))}
      </div>
    </article>
  );
};
