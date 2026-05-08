import { useNotification } from "../context/NotificationContext";
import NavBar from "../Components/NavBar";
import SideBar from "../Components/SideBar";

function NotificationsPage() {
  const { notifications, clearNotifications } = useNotification();

  return (
    <div className="flex min-h-screen bg-gray-900 text-white">

      <SideBar />

      <div className="flex-1 flex flex-col">

        <NavBar />

        <div className="p-6">

          {/* HEADER */}
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-3xl font-bold">
              🔔 Notifications
            </h1>

            <button
              onClick={clearNotifications}
              className="bg-red-500 hover:bg-red-600 px-4 py-2 rounded-lg"
            >
              Clear All
            </button>
          </div>

          {/* LIST */}
          <div className="space-y-3">
            {notifications.length === 0 ? (
              <p className="text-gray-400">
                No notifications yet 🚀
              </p>
            ) : (
              notifications.map((n) => (
                <div
                  key={n.id}
                  className="bg-white/10 border border-white/20 p-4 rounded-xl flex justify-between items-center"
                >
                  <div>
                    <p className="text-sm">{n.message}</p>
                    <p className="text-xs text-gray-400">{n.time}</p>
                  </div>

                  <span
                    className={
                      n.type === "success"
                        ? "text-green-400"
                        : n.type === "info"
                        ? "text-blue-400"
                        : "text-yellow-400"
                    }
                  >
                    ●
                  </span>
                </div>
              ))
            )}
          </div>

        </div>
      </div>
    </div>
  );
}

export default NotificationsPage;