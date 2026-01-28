import { GroupedReservations } from "@/components/feature/calendar/type/ReservationType";

interface ReservationTimeProps {
  availableGroup: GroupedReservations;
  selectedDate: Date | null;
}

export const ReservationTime = ({ availableGroup, selectedDate }: ReservationTimeProps) => {
  console.log(availableGroup);

  return <>예약시간</>;
};
