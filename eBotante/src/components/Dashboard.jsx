import { useState, useEffect, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { useVote } from "../context/VoteContext";

const Dashboard = () => {
  const { state, dispatch } = useVote();
  const navigate = useNavigate();

  const currentUser = localStorage.getItem("currentUser");

  const [username, setUsername] = useState(currentUser || "User");
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [profileImage, setProfileImage] = useState(null);
  const [rawVotingHistory, setRawVotingHistory] = useState([]);

  useEffect(() => {
    if (currentUser) {
      setFullName(
        localStorage.getItem(`fullName_${currentUser}`) || "No Name Provided"
      );
      setEmail(
        localStorage.getItem(`email_${currentUser}`) || "No Email Provided"
      );
      setProfileImage(
        localStorage.getItem(`profileImage_${currentUser}`) || null
      );
      setRawVotingHistory(
        JSON.parse(localStorage.getItem(`votingHistory_${currentUser}`)) || []
      );
    }
  }, [currentUser]);

  const votingHistory = useMemo(() => rawVotingHistory, [rawVotingHistory]);

  //Handle Profile Image Upload
  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileImage(reader.result);
        localStorage.setItem(`profileImage_${currentUser}`, reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  //Remove Profile Image
  const removeProfileImage = () => {
    setProfileImage(null);
    localStorage.removeItem(`profileImage_${currentUser}`);
  };

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-2xl font-bold text-white text-center mb-6">
        User Dashboard
      </h2>

      <div className="flex items-center border rounded-lg shadow-md p-4 bg-gray-100 mb-6">
        <div className="relative">
          <label className="cursor-pointer">
            {profileImage ? (
              <img
                src={profileImage}
                alt="Profile"
                className="w-16 h-16 rounded-full object-cover"
              />
            ) : (
              <div className="w-16 h-16 bg-gray-300 rounded-full flex items-center justify-center">
                <span>Profile</span>
              </div>
            )}
            <input
              type="file"
              accept="image/*"
              className="hidden"
              onChange={handleImageUpload}
            />
          </label>
          {profileImage && (
            <button
              onClick={removeProfileImage}
              className="text-red-500 text-sm mt-2"
            >
              Remove
            </button>
          )}
        </div>

        <div className="ml-4">
          <h3 className="text-lg font-semibold">{username}</h3>
          <p className="text-sm text-gray-600">{fullName}</p>
          <p className="text-sm text-gray-600">{email}</p>
        </div>
      </div>

      <div className="border rounded-lg shadow-md p-4 bg-gray-100">
        <h3 className="text-lg font-semibold mb-4">Voting History</h3>
        {votingHistory.length === 0 ? (
          <p className="text-sm text-gray-600">No voting history available.</p>
        ) : (
          <div>
            <table className="w-full border-collapse border border-gray-300">
              <thead>
                <tr className="bg-gray-200">
                  <th className="border p-2">Poll Name</th>
                  <th className="border p-2">Date</th>
                  <th className="border p-2">Selected Candidates</th>
                  <th className="border p-2">Actions</th>
                </tr>
              </thead>
              <tbody>
                {votingHistory.map((vote, index) => (
                  <tr key={index} className="border">
                    <td className="border p-2">{vote.pollName}</td>
                    <td className="border p-2">{vote.date}</td>
                    <td className="border p-2">
                      <ol className="list-decimal pl-4">
                        {vote.selection.map((candidate, idx) => (
                          <li key={idx}>{candidate.name}</li>
                        ))}
                      </ol>
                    </td>
                    <td className="border p-2">
                      <button
                        className="text-red-500 hover:underline"
                        onClick={() => {
                          const updatedHistory = rawVotingHistory.filter(
                            (_, i) => i !== index
                          );
                          setRawVotingHistory(updatedHistory);
                          localStorage.setItem(
                            `votingHistory_${currentUser}`,
                            JSON.stringify(updatedHistory)
                          );
                        }}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <button
              className="mt-4 px-4 py-2 bg-red-500 text-white rounded"
              onClick={() => {
                setRawVotingHistory([]);
                localStorage.removeItem(`votingHistory_${currentUser}`);
              }}
            >
              Clear Voting History
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
