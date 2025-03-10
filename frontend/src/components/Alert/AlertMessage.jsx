import React from "react";
import {
  AiOutlineCheckCircle,
  AiOutlineCloseCircle,
  AiOutlineLoading3Quarters,
} from "react-icons/ai";

import './Alert Mesage.css';

const AlertMessage = ({ type, message }) => {
  let icon;
  let bgColor;
  let textColor;
  let borderLeftColor;

  switch (type) {
    case "error":
      icon = <AiOutlineCloseCircle  id="AiOutlineCloseCircle"/>;
      bgColor = "bg-red-100";
      textColor = "text-red-800";
      borderLeftColor = "border-l-4 border-red-600";
      break;
    case "success":
      icon = <AiOutlineCheckCircle   id="AiOutlineCheckCircle"/>;
      bgColor = "bg-green-100";
      textColor = "text-green-800";
      borderLeftColor = "border-l-4 border-green-600";
      break;
    case "loading":
      icon = (
        <AiOutlineLoading3Quarters   id="AiOutlineLoading3Quarters" />
      );
      bgColor = "bg-blue-100";
      textColor = "text-blue-800";
      borderLeftColor = "border-l-4 border-blue-600";
      break;
    default:
      icon = null;
      bgColor = "";
      textColor = "";
      borderLeftColor = "";
  }

  return (
    <div
      className={`flex items-center p-4 rounded-lg shadow-md ${bgColor} ${textColor} ${borderLeftColor} space-x-3`}
    >
      {icon}
      <span id="Alertmassage">{message}</span>
    </div>
  );
};

export default AlertMessage;
