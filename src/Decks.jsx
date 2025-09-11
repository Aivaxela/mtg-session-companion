import React, { useState, useEffect } from "react";
import { db } from "./firebase";

function Decks() {
  const [decks, setDecks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDecks = async () => {
      try {
        const querySnapshot = await db
          .collection("decks")
          .orderBy("name", "asc")
          .get();
        const decksData = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setDecks(decksData);
      } catch (error) {
        console.error("Error fetching decks:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchDecks();
  }, []);

  const getColorIcon = (color) => {
    const colorMap = {
      red: "🔴",
      white: "⚪",
      blue: "🔵",
      green: "🟢",
      black: "⚫",
      colorless: "⚪",
    };
    return colorMap[color] || "⚪";
  };

  const getColorClass = (color) => {
    const colorMap = {
      red: "text-red-400",
      white: "text-gray-200",
      blue: "text-blue-400",
      green: "text-green-400",
      black: "text-gray-600",
      colorless: "text-gray-400",
    };
    return colorMap[color] || "text-gray-400";
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-700 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-300">Loading decks...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-700">
      <div className="mb-6 px-4">
        <h1 className="text-2xl font-bold text-gray-200 mb-2">Decks</h1>
      </div>

      {decks.length === 0 ? (
        <div className="bg-slate-600 border border-slate-500 p-6 text-center">
          <p className="text-gray-300 text-sm">No decks found.</p>
        </div>
      ) : (
        <div className="space-y-0">
          {decks.map((deck, index) => (
            <div
              key={deck.id}
              className="bg-slate-600 border border-slate-500 p-4 hover:bg-slate-500 transition-colors cursor-pointer"
            >
              <div className="flex flex-col mb-3 space-y-3">
                <div className="flex-1">
                  <h3 className="text-base font-semibold text-gray-200 mb-1">
                    {deck.name}
                  </h3>
                  <p className="text-sm text-gray-400 mb-2">{deck.owner}</p>
                  <p className="text-xs text-gray-300 mb-2">
                    {deck.description}
                  </p>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <span className="text-xs text-gray-400">Colors:</span>
                    {deck.colors.map((color, colorIndex) => (
                      <span
                        key={colorIndex}
                        className={`text-sm ${getColorClass(color)}`}
                        title={color}
                      >
                        {getColorIcon(color)}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center space-x-4 text-xs">
                    <span className="text-green-400">{deck.wins}W</span>
                    <span className="text-red-400">{deck.losses}L</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Decks;
