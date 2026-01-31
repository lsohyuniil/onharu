import { RiNotification3Line } from "@remixicon/react";
import { NotificationType } from "../types";

interface NotificationItemProps {
  storeName: string;
  type: NotificationType;
  reason?: string;
}

export default function NotificationItem({ storeName, type, reason }: NotificationItemProps) {
  const messageMap = {
    REJECTED: `${storeName} 예약이 거절되었어요!`,
    APPROVED: `${storeName} 예약이 확정되었습니다!`,
    STARTED: `${storeName} 나눔이 시작되었어요!`,
  };

  return (
    <div className="bg-secondary mb-3 flex items-center gap-5 rounded-[10px] p-2 sm:mb-5 sm:p-5">
      <div className="bg-main-300 flex h-8 w-8 min-w-8 items-center justify-center rounded-full sm:h-12.5 sm:w-12.5 sm:min-w-12.5">
        <RiNotification3Line className="text-main w-5 sm:w-6.25" />
      </div>

      <div className="max-w-[90%] text-sm font-medium break-keep sm:text-base">
        <p>{messageMap[type]}</p>

        {type === "REJECTED" && reason && (
          <p>
            <span className="text-main">사유</span> : {reason}
          </p>
        )}
      </div>
    </div>
  );
}
