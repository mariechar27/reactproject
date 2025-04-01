import { useReducer } from "react";
import { useNavigate } from "react-router-dom";

//Initial state for the login form
const initialState = {
  username: "",
  password: "",
  error: "",
  submitted: false,
};

//Reducer function to handle state changes
const reducer = (state, action) => {
  switch (action.type) {
    case "SET_CREDENTIALS":
      return { ...state, [action.field]: action.value, error: "" };
    case "SET_ERROR":
      return { ...state, error: action.error };
    case "SET_SUBMITTED":
      return { ...state, submitted: true };
    case "LOG_OUT":
      return initialState;
    default:
      return state;
  }
};

const Login = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const navigate = useNavigate();

  //Handle input field changes
  const handleChange = (e) => {
    dispatch({
      type: "SET_CREDENTIALS",
      field: e.target.name,
      value: e.target.value,
    });
  };

  //Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const storedUsers = JSON.parse(localStorage.getItem("users")) || [];

    const validUser = storedUsers.find(
      (user) =>
        user.username === state.username && user.password === state.password
    );

    if (validUser) {
      localStorage.setItem("currentUser", validUser.username);
      localStorage.setItem(
        `fullName_${validUser.username}`,
        validUser.fullName
      );
      localStorage.setItem(`email_${validUser.username}`, validUser.email);

      dispatch({ type: "SET_SUBMITTED" });
      navigate("/dashboard");
    } else {
      dispatch({ type: "SET_ERROR", error: "Invalid username or password." });
    }
  };

  //Handle logout button click
  const handleLogout = () => {
    const currentUser = localStorage.getItem("currentUser");
    if (currentUser) {
      localStorage.removeItem(`fullName_${currentUser}`);
      localStorage.removeItem(`email_${currentUser}`);
      localStorage.removeItem(`profileImage_${currentUser}`);
      localStorage.removeItem(`votingHistory_${currentUser}`);
    }
    localStorage.removeItem("currentUser");
    dispatch({ type: "LOG_OUT" });
    navigate("/");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6">
      {/* Login Form */}
      <form
        onSubmit={handleSubmit}
        className="flex flex-col space-y-4 p-6 rounded-lg shadow-lg border border-gray-300 bg-white w-96"
      >
        {/* Form title */}
        <h2 className="text-2xl font-semibold text-center text-gray-700">
          User Login
        </h2>

        {/* Username Field */}
        <div className="flex flex-col">
          <label className="mb-1 text-gray-700 font-medium">Username</label>
          <input
            type="text"
            name="username"
            placeholder="Enter your username"
            value={state.username}
            onChange={handleChange}
            className="p-2 border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        {/* Password Field */}
        <div className="flex flex-col">
          <label className="mb-1 text-gray-700 font-medium">Password</label>
          <input
            type="password"
            name="password"
            placeholder="Enter your password"
            value={state.password}
            onChange={handleChange}
            className="p-2 border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        {/* Error Message */}
        {state.error && (
          <p className="text-red-500 text-sm text-center">{state.error}</p>
        )}

        {/* Buttons for Login and Logout */}
        <div className="flex space-x-4">
          <button
            type="submit"
            className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
          >
            Login
          </button>
          <button
            type="button"
            onClick={handleLogout}
            className="px-6 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
          >
            Log Out
          </button>
        </div>
      </form>

      {/* Success Message */}
      {state.submitted && (
        <p className="mt-4 text-lg font-semibold text-green-600">
          Ready to Vote
        </p>
      )}

      {/* Login Reminder */}
      <p className="mt-4 text-sm text-black-600">
        Log in anytime to check your voting record.
      </p>
    </div>
  );
};

export default Login;
