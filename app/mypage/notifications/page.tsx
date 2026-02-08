import { PageSection } from "../components/PageSection";
import NotificationItem from "./components/NotificationItem";
import clsx from "clsx";
import { mockNotifications, emptyNotifications } from "./data/mockData";

export default function NotificationsPage() {
  const notifications = mockNotifications;

  return (
    <PageSection title="알림 내역" className={clsx(notifications.length !== 0 && "bg-white")}>
      {notifications.length === 0 ? (
        <div className="sm:text-md py-5 text-center text-sm font-medium">알림 내역이 없습니다.</div>
      ) : (
        <div>
          {notifications.map(item => (
            <NotificationItem
              key={item.id}
              storeName={item.storeName}
              type={item.type}
              reason={item.reason}
            />
          ))}
        </div>
      )}
    </PageSection>
  );
}
