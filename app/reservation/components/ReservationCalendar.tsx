"use client";

import { parseISO, isSameDay } from "date-fns";
import Calendar from "@/components/feature/calendar/Calendar";
import { Dispatch, SetStateAction } from "react";

interface ReservationCalendar {
  availableDate: Date[];
  selectedDate: Date | null;
  setSelectedDate: Dispatch<SetStateAction<Date | null>>;
}

export const ReservationCalendar = ({
  availableDate,
  selectedDate,
  setSelectedDate,
}: ReservationCalendar) => {
  const filterDate = (d: Date) => availableDate.some(ad => isSameDay(d, ad));

  return (
    <Calendar
      filterDate={filterDate}
      selectedDate={selectedDate}
      setSelectedDate={setSelectedDate}
    />
  );
};
