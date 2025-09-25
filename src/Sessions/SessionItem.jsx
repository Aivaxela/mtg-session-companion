import React from "react";

function SessionItem({ session }) {
  return (
    <div
      className={`p-4 relative ${
        session.contenderOneWon
          ? "bg-gradient-to-r from-green-500/30 to-transparent"
          : "bg-gradient-to-l from-green-500/30 to-transparent"
      }`}
    >
      <div className="flex items-center justify-between text-sm text-gray-300">
        <span
          className={`font-medium truncate pr-2 ${
            session.contenderOneWon ? "text-green-200" : "text-gray-300"
          }`}
        >
          {session.contenderOne}
        </span>
        <span className="text-gray-400 flex-shrink-0 px-2">vs</span>
        <span
          className={`font-medium truncate pl-2 ${
            !session.contenderOneWon ? "text-green-200" : "text-gray-300"
          }`}
        >
          {session.contenderTwo}
        </span>
      </div>
    </div>
  );
}

export default SessionItem;
