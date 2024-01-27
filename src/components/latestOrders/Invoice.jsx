import { MdOutlineLocalPrintshop } from "react-icons/md";
import { PiDownloadBold } from "react-icons/pi";

const Invoice = (props) => {
  const handleOverlayClick = (e) => {
    // Close the modal only if the click is on the overlay (outside the modal content)
    if (e.target.classList.contains("modal-overlay")) {
      props.onClose();
    }
  };

  return (
    <div
      className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 z-20 modal-overlay"
      onClick={handleOverlayClick}>
      <div className=" p-8 rounded-md box dark-text w-[80%] max-w-[30rem]">
        <div className="flex justify-end">
          <button className="font-bold text-[1rem] border w-8 h-8 rounded-full" onClick={props.onClose}>
            X
          </button>
        </div>
        <h2 className="border-b pb-4 mb-5">
          Invoice issued to
          <span className="font-bold text-[1.125rem] ml-1">{props.name}</span>
        </h2>
        <p>Transaction Date: {props.date}</p>
        <p className="my-5">
        Total wait time: {props.delay}secs
        </p>
        <p className="my-5">
        Order Amount: {props.amount}
        </p>
        <p className="my-5 border-b pb-4" >
        Order Status: <span style={{ color: `${props.color}` }}>{props.status}</span>
        </p>
        <div className="flex-between">
        <p >
            <span style={{ color: `${props.color}` }}>{props.amount}</span>
            <span className="ml-2"> {props.status}</span>
        </p>
        <p className="flex ">
           <span className="cursor-pointer hover:scale-110 mr-4 pt-4 flex justify-center items-center w-full flex-col"> <MdOutlineLocalPrintshop size={20} className=" icon-color"/><small className="opacity-0 hover:opacity-100 ">Print</small></span>
           <span className="cursor-pointer hover:scale-110 flex pt-4 justify-center items-center w-full flex-col"> <PiDownloadBold size={20} className=" icon-color"/><small className="opacity-0 hover:opacity-100 ">Download</small></span>
        </p>
        </div>
      </div>
    </div>
  );
};

export default Invoice;
