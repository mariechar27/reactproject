import { useReducer } from "react";
import { useNavigate } from "react-router-dom";

// Initial state for the form
const initialState = {
  fullName: "",
  username: "",
  email: "",
  password: "",
  confirmPassword: "",
  errors: {},
};

// Reducer function to manage form state
const reducer = (state, action) => {
  switch (action.type) {
    case "SET_FIELD":
      return {
        ...state,
        [action.field]: action.value,
        errors: { ...state.errors, [action.field]: "" },
      };
    case "SET_ERRORS":
      return { ...state, errors: action.errors };
    case "RESET_FORM":
      return initialState;
    default:
      return state;
  }
};

const Signup = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const navigate = useNavigate();

  // Retrieve existing users from local storage
  const existingUsers = JSON.parse(localStorage.getItem("users")) || [];
  const existingEmails = existingUsers.map((user) => user.email);
  const existingUsernames = existingUsers.map((user) => user.username);

  // Handle input change
  const handleChange = (e) => {
    dispatch({
      type: "SET_FIELD",
      field: e.target.name,
      value: e.target.value,
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    let newErrors = {};

    // Validate required fields
    Object.keys(state).forEach((key) => {
      if (!state[key] && key !== "errors") {
        newErrors[key] = "Please fill out this field";
      }
    });

    // Validate email uniqueness
    if (existingEmails.includes(state.email)) {
      newErrors.email = "Email already exists";
    }

    // Validate username uniqueness
    if (existingUsernames.includes(state.username)) {
      newErrors.username = "Username already exists";
    }

    // Validate password match
    if (state.password !== state.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    // If there are errors, update state and stop submission
    if (Object.keys(newErrors).length > 0) {
      dispatch({ type: "SET_ERRORS", errors: newErrors });
      return;
    }

    // Save new user to local storage
    const newUser = {
      fullName: state.fullName,
      username: state.username,
      email: state.email,
      password: state.password,
    };

    const updatedUsers = [...existingUsers, newUser];
    localStorage.setItem("users", JSON.stringify(updatedUsers));

    // Store user-specific information
    localStorage.setItem("currentUser", state.username);
    localStorage.setItem(`fullName_${state.username}`, state.fullName);
    localStorage.setItem(`email_${state.username}`, state.email);

    alert("Signup successful! You can now log in to vote.");
    dispatch({ type: "RESET_FORM" });
    navigate("/dashboard");
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <h1 className="text-2xl font-bold text-center mb-6">Sign Up</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Render input fields dynamically */}
          {["fullName", "username", "email", "password", "confirmPassword"].map(
            (field) => (
              <div key={field}>
                <label className="block text-sm font-medium capitalize">
                  {field
                    .replace(/([A-Z])/g, " $1")
                    .replace(/^./, (str) => str.toUpperCase())}
                </label>
                <input
                  type={field.includes("password") ? "password" : "text"}
                  name={field}
                  placeholder={field
                    .replace(/([A-Z])/g, " $1")
                    .replace(/^./, (str) => str.toUpperCase())}
                  value={state[field]}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded-lg"
                />
                {state.errors[field] && (
                  <p className="text-red-500 text-sm">{state.errors[field]}</p>
                )}
              </div>
            )
          )}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600 transition"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
