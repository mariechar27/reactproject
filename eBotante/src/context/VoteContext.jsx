import React, { createContext, useReducer, useContext, useEffect } from "react";

//Initialize context
const VoteContext = createContext();

//Define the initial state
const initialState = {
  selectedCandidates: JSON.parse(localStorage.getItem("votes")) || [],
  votingHistory: JSON.parse(localStorage.getItem("votingHistory")) || [],
};

//Reducer function to manage state updates
const voteReducer = (state, action) => {
  switch (action.type) {
    case "SET_CANDIDATES":
      return { ...state, selectedCandidates: action.payload };
    case "ADD_VOTE":
      const updatedHistory = [...state.votingHistory, action.payload];
      return { ...state, votingHistory: updatedHistory };
    default:
      console.warn(`Unhandled action type: ${action.type}`);
      return state;
  }
};

//Context provider component
export const VoteProvider = ({ children }) => {
  const [state, dispatch] = useReducer(voteReducer, initialState);

  //Sync selected candidates and voting history to localStorage
  useEffect(() => {
    localStorage.setItem("votes", JSON.stringify(state.selectedCandidates));
  }, [state.selectedCandidates]);

  useEffect(() => {
    localStorage.setItem("votingHistory", JSON.stringify(state.votingHistory));
  }, [state.votingHistory]);

  return (
    <VoteContext.Provider value={{ state, dispatch }}>
      {children}
    </VoteContext.Provider>
  );
};

//Hook to use the VoteContext
export const useVote = () => {
  const context = useContext(VoteContext);
  if (!context) {
    throw new Error("useVote must be used within a VoteProvider");
  }
  return context;
};
