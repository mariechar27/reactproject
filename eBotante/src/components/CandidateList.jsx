import React, { useState, useEffect } from "react";
import { useVote } from "../context/VoteContext";
import candidatesData from "../data/candidatesData";

const CandidateList = () => {
  //Context and state management
  const { state, dispatch } = useVote();
  const [candidates, setCandidates] = useState([]);
  const [selectedCandidates, setSelectedCandidates] = useState([]);
  const [partyFilter, setPartyFilter] = useState("");
  const [allianceFilter, setAllianceFilter] = useState("");
  const [expandedCandidateId, setExpandedCandidateId] = useState(null);
  const [previousVoter, setPreviousVoter] = useState(state.previousVoter || "");

  //Load candidate data on component mount
  useEffect(() => {
    setCandidates(candidatesData);
  }, []);

  //Reset selection when a different voter logs in
  useEffect(() => {
    if (state.previousVoter !== previousVoter) {
      setSelectedCandidates([]);
      setPreviousVoter(state.previousVoter);
    }
  }, [state.previousVoter, previousVoter]);

  //Function to toggle candidate selection
  const toggleSelection = (candidate) => {
    setSelectedCandidates((prevSelected) =>
      prevSelected.some((c) => c.id === candidate.id)
        ? prevSelected.filter((c) => c.id !== candidate.id)
        : prevSelected.length < 12
        ? [...prevSelected, candidate]
        : (alert("You can only select up to 12 candidates."), prevSelected)
    );
  };

  //Function to expand or collapse candidate details
  const toggleCandidateDetails = (candidateId) => {
    setExpandedCandidateId(
      expandedCandidateId === candidateId ? null : candidateId
    );
  };

  //Function to save selected candidates
  const handleSave = () => {
    dispatch({ type: "SET_CANDIDATES", payload: selectedCandidates });
    localStorage.setItem(
      "selectedCandidates",
      JSON.stringify(selectedCandidates)
    );
    alert("Saved!");
  };

  //Filtering candidates based on party or alliance selection
  const filteredCandidates = candidates.filter(
    (candidate) =>
      (!partyFilter || candidate.party === partyFilter) &&
      (!allianceFilter || candidate.alliance === allianceFilter)
  );

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-2xl text-white font-bold text-center mb-6">
        Select Candidates
      </h2>
      <p className="text-2xl text-white text-center mb-6">
        The Commission on Elections (Comelec) initially approved 66 candidates
        for the 2025 Philippine senatorial elections, including incumbent
        senators, former lawmakers, local officials, activists, and media
        personalities. However, some candidates have since withdrawn from the
        race, reducing the final number of contenders.
      </p>
      <br />

      {/* Filters */}
      <div className="flex justify-center gap-4 mb-4">
        <select
          className="p-2 border rounded bg-white"
          value={partyFilter}
          onChange={(e) => setPartyFilter(e.target.value)}
        >
          <option value="">All Parties</option>
          {[...new Set(candidates.map((c) => c.party))].map((party) => (
            <option key={party} value={party}>
              {party}
            </option>
          ))}
        </select>
        <select
          className="p-2 border rounded bg-white"
          value={allianceFilter}
          onChange={(e) => setAllianceFilter(e.target.value)}
        >
          <option value="">All Alliances</option>
          {[...new Set(candidates.map((c) => c.alliance))].map((alliance) => (
            <option key={alliance} value={alliance}>
              {alliance}
            </option>
          ))}
        </select>
      </div>

      {/* Candidate List */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredCandidates.map((candidate) => (
          <div
            key={candidate.id}
            className={`relative p-4 border rounded-lg shadow-md transition-all duration-300 ease-in-out ${
              expandedCandidateId === candidate.id
                ? "col-span-full bg-gray-50 scale-105 z-10"
                : "bg-white hover:bg-gray-100"
            } ${
              selectedCandidates.some((c) => c.id === candidate.id)
                ? "border-blue-500"
                : "border-gray-300"
            }`}
          >
            <div className="flex flex-col items-center">
              {/* Candidate Image and Basic Info */}
              <img
                className={`w-24 h-24 rounded-full object-cover mb-3 transition-all ${
                  expandedCandidateId === candidate.id ? "w-36 h-36" : ""
                }`}
                src={candidate.image}
                alt={candidate.name}
              />
              <h3
                className={`text-lg font-semibold text-center transition-all ${
                  expandedCandidateId === candidate.id ? "text-xl" : ""
                }`}
              >
                {candidate.name}
              </h3>
              <p className="text-sm text-gray-600 text-center">
                Party: {candidate.party}
              </p>
              <p className="text-sm text-gray-600 text-center mb-3">
                Alliance: {candidate.alliance}
              </p>

              {/* Expanded Candidate Details */}
              {expandedCandidateId === candidate.id && (
                <div className="w-full mt-4 text-left space-y-4">
                  <div>
                    <h4 className="font-semibold text-lg border-b pb-2">
                      Biography
                    </h4>
                    <p className="text-sm text-gray-700 mt-2">
                      {candidate.bio}
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-lg border-b pb-2">
                      Accomplishments
                    </h4>
                    <ul className="text-sm text-gray-700 mt-2 list-disc pl-5">
                      {candidate.accomplishments
                        .split(";")
                        .map((accomplishment, index) => (
                          <li key={index}>{accomplishment.trim()}</li>
                        ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-lg border-b pb-2">
                      Previous Position
                    </h4>
                    <p className="text-sm text-gray-700 mt-2">
                      {candidate.previousPosition}
                    </p>
                  </div>
                </div>
              )}

              {/* Action Buttons */}
              <div className="flex flex-wrap justify-center gap-2 mt-3">
                <button
                  className={`px-4 py-2 text-white rounded ${
                    selectedCandidates.some((c) => c.id === candidate.id)
                      ? "bg-red-500 hover:bg-red-600"
                      : "bg-green-500 hover:bg-green-600"
                  }`}
                  onClick={() => toggleSelection(candidate)}
                >
                  {selectedCandidates.some((c) => c.id === candidate.id)
                    ? "Deselect"
                    : "VOTE"}
                </button>
                <button
                  className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                  onClick={() => toggleCandidateDetails(candidate.id)}
                >
                  {expandedCandidateId === candidate.id
                    ? "Hide Details"
                    : "More Details"}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Save Button */}
      <div className="flex justify-center mt-6">
        <button
          onClick={handleSave}
          className="bg-green-500 text-white px-6 py-2 rounded-md hover:bg-green-600"
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default CandidateList;
