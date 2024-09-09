/* eslint-disable react/prop-types */
import { MdOutlineLocalPrintshop } from "react-icons/md";
import { PiDownloadBold } from "react-icons/pi";
import { useRef } from "react";
import generatePDF from 'react-to-pdf';
import { useReactToPrint } from 'react-to-print';

const Invoice = (props) => {
  const handleOverlayClick = (e) => {
    // Close the modal only if the click is on the overlay (outside the modal content)
    if (e.target.classList.contains("modal-overlay")) {
      props.onClose();
    }
  };

  const contentRef = useRef(null);
  const handlePrint = useReactToPrint({
    documentTitle: "Sales Invoice",
    removeAfterPrint: true,
  });

  return (
    <div
      className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 z-20 modal-overlay"
      onClick={handleOverlayClick}>
      <div className=" rounded-md box dark-text w-[85%] max-w-[30rem]">
        <div className="flex justify-end pt-7 px-7">
          <button className="font-bold base:text-[1rem] text-sm border base:w-8 base:h-8 w-7 h-7 rounded-full" onClick={props.onClose}>
            X
          </button>
        </div>
        <div ref={contentRef} className="m-auto py-10 px-8 w-full">
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
        </div>
        
        <div className="flex-between px-8 pb-8">
        <p >
            <span style={{ color: `${props.color}` }}>{props.amount}</span>
            <span className="ml-2"> {props.status}</span>
        </p>
        <p className="flex ">
           <button onClick={() => {
        handlePrint(null, () => contentRef.current);
      }} className="cursor-pointer mr-4 pt-4 flex justify-center items-center w-full flex-col invoice-action-btn transition-all duration-300"> <MdOutlineLocalPrintshop size={20} className=" icon-color"/><small className="opacity-0">Print</small></button>
           <button onClick={() => generatePDF(contentRef, {filename: 'sales-invoice.pdf'})} className="cursor-pointer flex pt-4 justify-center items-center w-full flex-col invoice-action-btn transition-all duration-300"> <PiDownloadBold size={20} className=" icon-color"/><small className="opacity-0">Download</small></button>
        </p>
        </div>
      </div>
    </div>
  );
};

export default Invoice;
