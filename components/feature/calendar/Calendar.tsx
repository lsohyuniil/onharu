"use client";

import { useState } from "react";
import styles from "./Calendar.module.css";
import DatePicker from "react-datepicker";
import { ko } from "date-fns/locale";
import "react-datepicker/dist/react-datepicker.css";

export default function Calendar() {
  const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());

  return (
    <div className={styles.wrapper}>
      <DatePicker
        locale={ko}
        selected={selectedDate}
        onChange={setSelectedDate}
        minDate={new Date()}
        inline
        showDisabledMonthNavigation
      />
    </div>
  );
}
