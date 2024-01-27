import emptyNotification from "./assets/empty-notification.png"

const NotificationModal = (props) => {
  const handleCloseModal = (e) => {
    // Close the modal only if the click is on the overlay (outside the modal content)
    if (e.target) {
        props.onClose();
      }
    console.log(e.target);
  };

  return (
      <div
        className={`fixed ${
          props.openModal
            ? "opacity-100 lg:top-0 md:top-[17rem] top-0"
            : "opacity-0 -top-[30rem] pointer-events-none"
        } transition-all duration-300 xxl:right-[30%] md:right-60 right-0 flex justify-end items-start w-full lg:w-[25rem] md:w-[55%] h-full xxl:h-[30%] md:h-[55%] modal bg-transparent`}
        onMouseLeave={handleCloseModal}
        onClick={handleCloseModal}>
      <div className="box dark-text flex items-center flex-col relative lg:top-20 md:top-7 top-[17rem] right-8 p-6 text-center rounded-lg bg-bg_white w-[18rem] max-w-[70%]">
          <img src={emptyNotification} alt="No message"className="md:w-28 w-16" />
          <h2 className="text-[1.125rem] text-bold pb-2">No notification</h2>
          <p className="text-[.85rem] w-[80%]"> Stay tuned! Notifications about your activites will show up here.</p>
        </div>
      </div>
  );
};

export default NotificationModal;
