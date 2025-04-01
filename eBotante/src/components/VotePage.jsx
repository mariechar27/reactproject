import { useNavigate } from "react-router-dom";
import { useVote } from "../context/VoteContext";
import { useState, useEffect, useCallback } from "react";

const VotePage = () => {
  const { state, dispatch } = useVote();
  const navigate = useNavigate();
  const currentUser = localStorage.getItem("currentUser");
  //Set the official election date
  const electionDate = new Date("2025-05-12T00:00:00");
  const [timeLeft, setTimeLeft] = useState("Calculating...");
  const [currentTime, setCurrentTime] = useState(
    new Date().toLocaleTimeString()
  );
  const [hoverMessage, setHoverMessage] = useState("");

  // Function to calculate and update the countdown to the election
  const updateCountdown = useCallback(() => {
    const now = new Date();
    const difference = electionDate.getTime() - now.getTime();

    if (difference <= 0) {
      setTimeLeft("Election Day is here!");
      return;
    }

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    setTimeLeft(`${days} DAYS LEFT BEFORE ELECTION`);
  }, [electionDate]);

  useEffect(() => {
    updateCountdown();
    const timer = setInterval(updateCountdown, 86400000);
    return () => clearInterval(timer);
  }, [updateCountdown]);

  useEffect(() => {
    const clockInterval = setInterval(() => {
      setCurrentTime(new Date().toLocaleTimeString());
    }, 1000);
    return () => clearInterval(clockInterval);
  }, []);

  // Function to remove a selected candidate from the list
  const removeCandidate = useCallback(
    (indexToRemove) => {
      const updatedCandidates = state.selectedCandidates.filter(
        (_, index) => index !== indexToRemove
      );
      dispatch({ type: "SET_CANDIDATES", payload: updatedCandidates });
    },
    [state.selectedCandidates, dispatch]
  );

  // Function to handle the vote submission process
  const handleSubmit = useCallback(() => {
    if (state.selectedCandidates.length === 0) {
      alert("You must select at least one candidate before submitting.");
      return;
    }

    const pollName = "Example Poll";
    const voteDate = new Date().toISOString().split("T")[0];

    const newVote = {
      pollName,
      date: voteDate,
      selection: state.selectedCandidates,
    };

    // Save vote to localStorage under the current user's history
    const existingVotes =
      JSON.parse(localStorage.getItem(`votingHistory_${currentUser}`)) || [];
    const updatedVotes = [...existingVotes, newVote];

    localStorage.setItem(
      `votingHistory_${currentUser}`,
      JSON.stringify(updatedVotes)
    );

    // Clear selected candidates after submission
    dispatch({ type: "SET_CANDIDATES", payload: [] });
    navigate("/dashboard");
  }, [state.selectedCandidates, currentUser, dispatch, navigate]);

  return (
    <div className="flex flex-row justify-center items-center min-h-screen p-6">
      <section className="flex flex-col items-center w-full max-w-md bg-white bg-opacity-80 p-6 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-gray-700 mb-6">Vote Page</h1>
        {state.selectedCandidates.length > 0 ? (
          <ul className="w-full bg-white shadow-lg rounded-lg p-4">
            {state.selectedCandidates.map((candidate, index) => (
              <li
                key={candidate.id}
                className="flex items-center justify-between border-b py-3 last:border-b-0"
              >
                <div>
                  <p className="text-lg font-semibold text-gray-700">
                    {candidate.name}
                  </p>
                  <p className="text-sm text-gray-500">{candidate.party}</p>
                </div>
                <button
                  onClick={() => removeCandidate(index)}
                  className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 transition"
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-lg text-gray-600">No candidates selected.</p>
        )}
        <div className="mt-6 flex gap-4 w-full">
          <button
            onClick={() => navigate(-1)}
            className="flex-1 px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
          >
            Go Back
          </button>
          <button
            onClick={handleSubmit}
            className="flex-1 px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition"
          >
            Submit Vote
          </button>
        </div>
      </section>
      <section
        className="ml-6 bg-white bg-opacity-75 p-4 rounded-lg shadow-md border border-gray-300 text-center cursor-pointer transition-transform duration-300 ease-in-out hover:scale-105"
        onMouseEnter={() =>
          setHoverMessage("Your Voice, Your Vote, Your Future!")
        }
        onMouseLeave={() => setHoverMessage("")}
        onClick={() => setHoverMessage("Your Voice, Your Vote, Your Future!")}
      >
        <h2 className="text-xl font-semibold text-gray-700">🗓 {timeLeft}</h2>
        <p className="text-lg text-blue-500 font-bold mt-2">⏰ {currentTime}</p>
        {hoverMessage && (
          <p className="text-md text-red-500 font-semibold mt-2 animate-fade-in">
            {hoverMessage}
          </p>
        )}
      </section>
    </div>
  );
};

export default VotePage;
