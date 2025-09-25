import React, { useState } from "react";

function AddSessionModal({ isOpen, onClose, onSubmit }) {
  const [formData, setFormData] = useState({
    date: new Date().toISOString().split("T")[0],
    contenderOne: "",
    contenderTwo: "",
    winner: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.contenderOne || !formData.contenderTwo || !formData.winner) {
      alert("Please fill in all fields and select a winner");
      return;
    }

    const newSession = {
      id: `session-${Date.now()}`,
      date: formData.date,
      contenderOne: formData.contenderOne,
      contenderTwo: formData.contenderTwo,
      contenderOneWon: formData.winner === "contenderOne",
    };

    onSubmit(newSession);
    onClose();

    setFormData({
      date: new Date().toISOString().split("T")[0],
      contenderOne: "",
      contenderTwo: "",
      winner: "",
    });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-slate-600 rounded-lg p-6 w-full max-w-md mx-4 shadow-xl">
        <h2 className="text-xl font-bold text-gray-200 mb-4">
          Add New Session
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">
              Date
            </label>
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              className="w-full px-3 py-2 bg-slate-700 border border-slate-500 rounded-md text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">
              Contender 1
            </label>
            <input
              type="text"
              name="contenderOne"
              value={formData.contenderOne}
              onChange={handleChange}
              placeholder="Enter player name"
              className="w-full px-3 py-2 bg-slate-700 border border-slate-500 rounded-md text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">
              Contender 2
            </label>
            <input
              type="text"
              name="contenderTwo"
              value={formData.contenderTwo}
              onChange={handleChange}
              placeholder="Enter player name"
              className="w-full px-3 py-2 bg-slate-700 border border-slate-500 rounded-md text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Winner
            </label>
            <div className="space-y-2">
              <label className="flex items-center">
                <input
                  type="radio"
                  name="winner"
                  value="contenderOne"
                  checked={formData.winner === "contenderOne"}
                  onChange={handleChange}
                  className="mr-2 text-blue-500"
                />
                <span className="text-gray-300">
                  {formData.contenderOne || "Contender 1"}
                </span>
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="winner"
                  value="contenderTwo"
                  checked={formData.winner === "contenderTwo"}
                  onChange={handleChange}
                  className="mr-2 text-blue-500"
                />
                <span className="text-gray-300">
                  {formData.contenderTwo || "Contender 2"}
                </span>
              </label>
            </div>
          </div>

          <div className="flex justify-end space-x-3 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 bg-slate-500 text-gray-200 rounded-md hover:bg-slate-400 transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
            >
              Add Session
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddSessionModal;
