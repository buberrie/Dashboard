/* eslint-disable react/prop-types */
import emptyNotification from "./assets/empty-notification.png";

const NotificationModal = () => {

  return (
    <div className="box dark-text flex items-center flex-col w-full p-6 text-center rounded-lg bg-bg_white">
      <img src={emptyNotification} alt="No message" className="w-24" />
      <h2 className="text-[1.125rem] font-semibold pb-3">No Notification(s)</h2>
      <p className="text-[0.75rem] icon-text w-full leading-5 tracking-wide pb-3">
        Stay tuned! Notifications about your activites will show up here.
      </p>
    </div>
  );
};

export default NotificationModal;
