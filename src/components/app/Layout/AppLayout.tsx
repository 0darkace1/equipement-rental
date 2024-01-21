import Image from "next/image";
import React from "react";

import { IoIosNotifications, IoIosCog, IoIosPerson } from "react-icons/io";

function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ display: "flex", backgroundColor: "yellow" }}>
      <div
        className="w-1/5"
        style={{
          //   width: 345,
          paddingRight: 46,
          paddingLeft: 46,
          paddingTop: 50,
          paddingBottom: 50,
          backgroundColor: "#4D44B5",
        }}
      >
        <div
          className="flex flex-1 flex-row items-center justify-center"
          style={{ paddingBottom: 46 }}
        >
          <Image
            src={"/icon.png"}
            width={54}
            height={54}
            style={{ borderRadius: 16, marginRight: 16 }}
            alt="apps logo"
          />
        </div>

        <div style={{ display: "flex", flex: 1, backgroundColor: "red" }}>
          menus
        </div>
      </div>

      <div className="h-screen w-full flex flex-col bg-blue-50">
        <div className="flex flex-row h-1/6 w-full pt-12 pl-12 pr-12 pb-10 items-center justify-between">
          <h1 className="text-2xl">Dashboard</h1>

          <div className="flex flex-row gap-5 ">
            <a className="h-10 w-10 flex items-center justify-center bg-white rounded-full">
              <IoIosNotifications size={28} color="#c38ccb" />
            </a>
            <a className="h-10 w-10 flex items-center justify-center bg-white rounded-full">
              <IoIosCog size={28} color="#c38ccb" />
            </a>
            <a className="flex flex-col justify-center">
              <p className="text-purple-900 font-semibold">Nabila A.</p>
              <p className="text-gray-400 font-regular text-right">Admin</p>
            </a>

            <a className="h-10 w-10 flex items-center justify-center bg-purple-400 rounded-full">
              <IoIosPerson size={28} color="#fff" />
            </a>
          </div>
        </div>

        {children}
      </div>
    </div>
  );
}

export default AppLayout;
