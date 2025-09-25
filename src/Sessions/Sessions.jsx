import React, { useState } from "react";
import { sessionsData } from "../staticData";
import DateCard from "./DateCard";
import FloatingActionButton from "./FloatingActionButton";
import AddSessionModal from "./AddSessionModal";

function Sessions() {
  const [sessions, setSessions] = useState(() =>
    [...sessionsData].sort((a, b) => new Date(b.date) - new Date(a.date))
  );
  const [isModalOpen, setIsModalOpen] = useState(false);

  const groupedSessions = sessions.reduce((groups, session) => {
    const date = session.date;
    if (!groups[date]) {
      groups[date] = [];
    }
    groups[date].push(session);
    return groups;
  }, {});

  const groupedSessionsArray = Object.entries(groupedSessions).map(
    ([date, sessions]) => ({ date, sessions })
  );

  const handleAddSession = (newSession) => {
    setSessions((prevSessions) => {
      const updatedSessions = [...prevSessions, newSession];
      return updatedSessions.sort(
        (a, b) => new Date(b.date) - new Date(a.date)
      );
    });
  };

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-slate-700 p-4">
      {groupedSessionsArray.length === 0 ? (
        <div className="bg-slate-600 border border-slate-500 rounded-lg p-6 text-center shadow-lg">
          <p className="text-gray-300 text-lg">No sessions found.</p>
        </div>
      ) : (
        <div className="space-y-4">
          {groupedSessionsArray.map(({ date, sessions }) => (
            <DateCard key={date} date={date} sessions={sessions} />
          ))}
        </div>
      )}

      <FloatingActionButton onClick={handleOpenModal} />
      <AddSessionModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onSubmit={handleAddSession}
      />
    </div>
  );
}

export default Sessions;
