import React, { useState, useEffect } from "react";
import { db } from "./firebase";

function Sessions() {
  const [sessions, setSessions] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSessions = async () => {
      try {
        const querySnapshot = await db
          .collection("sessions")
          .orderBy("date", "desc")
          .get();
        const sessionsData = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setSessions(sessionsData);
      } catch (error) {
        console.error("Error fetching sessions:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchSessions();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading sessions...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-700">
      <div className="mb-6 px-4">
        <h1 className="text-2xl font-bold text-gray-200 mb-2">Sessions</h1>
      </div>

      {sessions.length === 0 ? (
        <div className="bg-slate-600 border border-slate-500 p-6 text-center">
          <p className="text-gray-300 text-sm">No sessions found.</p>
        </div>
      ) : (
        <div className="space-y-0">
          {sessions.map((session, index) => (
            <div
              key={index}
              className={`bg-slate-600 border border-slate-500 p-4 relative ${
                session.contenderOneWon
                  ? "bg-gradient-to-r from-green-500/20 via-green-500/10 to-transparent"
                  : "bg-gradient-to-l from-green-500/20 via-green-500/10 to-transparent"
              }`}
            >
              <div className="flex flex-col mb-3 space-y-3">
                <div className="flex-1">
                  <h3 className="text-base font-semibold text-gray-200 mb-1">
                    {new Date(session.date).toLocaleDateString("en-US", {
                      weekday: "long",
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </h3>
                </div>
              </div>
              <div className="flex items-center justify-between text-xs text-gray-300 pt-2 border-t border-slate-500">
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
                    !session.contenderOneWon
                      ? "text-green-200"
                      : "text-gray-300"
                  }`}
                >
                  {session.contenderTwo}
                </span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Sessions;
