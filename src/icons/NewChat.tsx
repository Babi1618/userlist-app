import React from 'react'
export const NewChat = ({ onClick }: any) => {
  return (
    <svg
      width="42"
      height="42"
      viewBox="0 0 42 42"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onClick={onClick}
    >
      <rect x="1" y="1" width="40" height="40" rx="20" fill="white" />
      <path
        d="M21 20.3334V17L21 20.3334V21H21.6666H25L21.6666 21H21V21.6667V25L21 21.6667V21H20.3333H17L20.3333 21H21V20.3334Z"
        fill="#7A8194"
        stroke="#7A8194"
        strokeWidth="1.33333"
      />
      <rect
        x="1"
        y="1"
        width="40"
        height="40"
        rx="20"
        stroke="#DEE2E8"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeDasharray="1 3"
      />
    </svg>
  );
};

export const NewChatOnlineUsers = ({ onClick }: any) => {
  return (
    <svg
      width="26"
      height="26"
      viewBox="0 0 26 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onClick={onClick}
    >
      <rect x="1" y="1" width="24" height="24" rx="12" fill="white" />
      <path
        d="M13 12.3334V9.00004L13 12.3334V13H13.6667H17L13.6667 13H13V13.6667V17L13 13.6667V13H12.3334H9.00004L12.3334 13H13V12.3334Z"
        fill="#7A8194"
        stroke="#B7BAC8"
        strokeWidth="1.33333"
      />
      <rect
        x="1"
        y="1"
        width="24"
        height="24"
        rx="12"
        stroke="#DEE2E8"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeDasharray="1 3"
      />
    </svg>
  );
};
