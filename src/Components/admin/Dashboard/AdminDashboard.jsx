import React from "react";
import {
  SavingsIcon,
  CustomerService01Icon,
  UserListIcon,
} from "hugeicons-react";

import { LineChart } from "../Charts/LineChart";
import { PieChart } from "../Charts/PieChart";

export const AdminDashboard = () => (
  <>
    <div className="dashboard flex flex-col gap-5">
      <h1 className="text-[1.8rem] font-bold">Dashboard</h1>
      <div className="cards grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3">
        <div className="card px-5 py-5 bg-[#ffffff] w-full md:w-full rounded-lg flex flex-col justify-center gap-4 shadow-md">
          <SavingsIcon color="#06b6d4" size={36} />
          <div className="content flex flex-col -space-y-1">
            <h2 className="text-[1.5rem] font-[900]">200</h2>
            <span className="text-[1.1rem]">Service Requests</span>
          </div>
        </div>
        <div className="card px-5 py-5 bg-[#ffffff] w-full md:w-full rounded-lg flex flex-col justify-center gap-4 shadow-md">
          <CustomerService01Icon color="#06b6d4" size={36} />
          <div className="content flex flex-col -space-y-1">
            <h2 className="text-[1.5rem] font-[900]">1200</h2>
            <span>Contact Requests</span>
          </div>
        </div>
        <div className="card px-5 py-5 bg-[#ffffff] w-full md:w-full rounded-lg flex flex-col justify-center gap-4 shadow-md">
          <UserListIcon color="#06b6d4" size={36} />
          <div className="content flex flex-col -space-y-1">
            <h2 className="text-[1.5rem] font-[900]">1500</h2>
            <span>Registered Users</span>
          </div>
        </div>
      </div>

      <div className="flex xl:space-x-5 flex-col xl:flex-row space-y-4 xl:space-y-0 w-full mb-5">
        <div className="xl:w-2/3">
          <LineChart />
        </div>
        <div className="xl:w-1/3">
          <PieChart />
        </div>
      </div>
    </div>
  </>
);
