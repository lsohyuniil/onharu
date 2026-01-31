import { Dispatch, SetStateAction, useState } from "react";
import { searchStores } from "@/components/feature/map/searchStore";
import { RiSearch2Line } from "@remixicon/react";
import { NearbyStore } from "../type/type";

export const LocationSearch = ({
  stores,
  setStores,
}: {
  stores: NearbyStore[];
  setStores: Dispatch<SetStateAction<NearbyStore[]>>;
}) => {
  const [value, setValue] = useState<string>("");
  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    //valRef.current = e.currentTarget.value
    setValue(e.currentTarget.value);
  };

  const handleSearch = () => {
    const test = searchStores({ stores, keyword: value });
    setStores(test);
  };

  return (
    <div className="my-7.5">
      <form
        action=""
        className="flex h-12.5 w-full items-center rounded-sm border border-gray-300 bg-white px-4 focus-within:outline-2"
      >
        <input
          type="text"
          value={value || ""}
          onChange={handleInput}
          className="flex-1 focus:outline-none"
        />
        <button onClick={handleSearch} type="button">
          <RiSearch2Line size={24} />
        </button>
      </form>
    </div>
  );
};
