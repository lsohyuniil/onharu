export type NotificationType = "REJECTED" | "APPROVED" | "STARTED";

export interface Notification {
  id: number;
  storeName: string;
  type: NotificationType;
  reason?: string;
}
