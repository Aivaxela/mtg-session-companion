import React from "react";
import SessionItem from "./SessionItem";

function DateCard({ date, sessions }) {
  return (
    <div className="bg-slate-600 border border-slate-500 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-200">
      <div className="p-4 border-b border-slate-500">
        <h3 className="text-md font-semibold text-gray-200/60">
          {new Date(date).toLocaleDateString("en-US", {
            month: "2-digit",
            day: "2-digit",
            year: "numeric",
          })}
        </h3>
      </div>
      <div className="divide-y divide-slate-500">
        {sessions.map((session, index) => (
          <SessionItem key={index} session={session} />
        ))}
      </div>
    </div>
  );
}

export default DateCard;
