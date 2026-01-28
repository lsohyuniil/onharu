import { format } from "date-fns";
import { FormatKoreanDate } from "./utils/FormatKoreanDate";

interface ReservationSelectInfoProps {
  selectedTime: string | null;
  selectedDate?: Date | null;
}

export const ReservationSelectInfo = ({
  selectedTime,
  selectedDate,
}: ReservationSelectInfoProps) => {
  const baseClasses = "rounded-md border border-gray-300 py-3 text-center md:py-5";
  if (selectedDate && selectedTime) {
    const formatDate = format(selectedDate, "yyyy-MM-dd");
    const koDate = FormatKoreanDate(formatDate);

    return (
      <div className={baseClasses}>
        <p className="md:text-md text-sm font-semibold">
          선택된 일정 :{" "}
          <span className="text-main">
            {koDate} {selectedTime}
          </span>
        </p>
      </div>
    );
  }

  if (!selectedDate || !selectedTime) {
    return (
      <div className={baseClasses}>
        <p className="md:text-md text-sm font-semibold">선택된 일정이 없습니다.</p>
      </div>
    );
  }
};
