import * as Select from "@radix-ui/react-select";
import { RiArrowDownSLine } from "@remixicon/react";

const baseClasses =
  "hover:bg-main-100 data-state-[state=checked]:bg-main-300 cursor-pointer rounded-sm px-1 py-1 text-sm outline-none";

export const BgrSelect = () => {
  return (
    <Select.Root defaultValue={"recommand"}>
      <Select.Trigger className="group border-main mt-8 ml-auto flex cursor-pointer items-center gap-1.5 rounded-full border px-4 py-1">
        <Select.Value placeholder="추천순" />
        <Select.Icon>
          <RiArrowDownSLine
            size={16}
            className="transitin duration-150 group-data-[state=open]:rotate-180"
          />
        </Select.Icon>
      </Select.Trigger>
      <Select.Portal>
        <Select.Content
          sideOffset={10000}
          className="w-full rounded-md border border-gray-300 bg-white"
        >
          <Select.Viewport className="px-3 py-2">
            <Select.Item value="recommand" className={baseClasses}>
              <Select.ItemText>추천순</Select.ItemText>
            </Select.Item>
            <Select.Item value="wish" className={baseClasses}>
              <Select.ItemText>인기순</Select.ItemText>
            </Select.Item>
            <Select.Item value="distance" className={baseClasses}>
              <Select.ItemText>거리순</Select.ItemText>
            </Select.Item>
          </Select.Viewport>
        </Select.Content>
      </Select.Portal>
    </Select.Root>
  );
};
