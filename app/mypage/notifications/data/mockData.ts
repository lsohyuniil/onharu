import { Notification } from "../types";

export const mockNotifications: Notification[] = [
  {
    id: 1,
    storeName: "행복 제육볶음",
    type: "REJECTED",
    reason: "그 날 개인사정으로 임시 휴무에요. 다음에 다시 예약주세요.",
  },
  {
    id: 2,
    storeName: "행복 제육볶음",
    type: "APPROVED",
  },
  {
    id: 3,
    storeName: "최배달의 떡순튀",
    type: "STARTED",
  },
];

export const emptyNotifications: Notification[] = [];
