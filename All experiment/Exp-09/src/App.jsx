import { useEffect, useState } from "react";
import "./App.css";

const initialForm = {
  name: "",
  email: "",
  password: "",
};

const indianNames = ["Aarav Sharma", "Ananya Verma", "Rohan Gupta", "Priya Nair"];

function App() {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");
  const [registeredUsers, setRegisteredUsers] = useState([]);
  const [apiUsers, setApiUsers] = useState([]);
  const [apiStatus, setApiStatus] = useState("Loading API users...");

  useEffect(() => {
    let isMounted = true;

    async function fetchUsers() {
      try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");

        if (!response.ok) {
          throw new Error("API request failed");
        }

        const data = await response.json();

        if (isMounted) {
          setApiUsers(data.slice(0, 4));
          setApiStatus("");
        }
      } catch (error) {
        if (isMounted) {
          setApiStatus("Could not load API users right now.");
        }
      }
    }

    fetchUsers();

    return () => {
      isMounted = false;
    };
  }, []);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((previousForm) => ({
      ...previousForm,
      [name]: value,
    }));
  };

  const validateForm = () => {
    const validationErrors = {};

    if (!form.name.trim()) {
      validationErrors.name = "Name is required.";
    }

    if (!form.email.trim()) {
      validationErrors.email = "Email is required.";
    } else if (!form.email.includes("@")) {
      validationErrors.email = "Enter a valid email address.";
    }

    if (!form.password.trim()) {
      validationErrors.password = "Password is required.";
    } else if (form.password.length < 4) {
      validationErrors.password = "Password should be at least 4 characters.";
    }

    return validationErrors;
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const validationErrors = validateForm();
    setErrors(validationErrors);
    setSuccessMessage("");

    if (Object.keys(validationErrors).length > 0) {
      return;
    }

    setRegisteredUsers((previousUsers) => [
      ...previousUsers,
      {
        name: form.name.trim(),
        email: form.email.trim(),
      },
    ]);

    setSuccessMessage("Registration successful!");
    setForm(initialForm);
  };

  return (
    <main className="pageShell">
      <section className="headerCard">
        <p className="eyebrow">Experiment 9</p>
        <h1>Registration Form with useEffect</h1>
        <p className="introText">
          A simple first-year-friendly React practical with form validation,
          state management, and API data fetching.
        </p>
      </section>

      <section className="cardGrid">
        <article className="panel formPanel">
          <h2>Registration Form</h2>
          <form onSubmit={handleSubmit} noValidate>
            <label>
              Name
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Enter Name"
              />
            </label>
            {errors.name && <p className="errorText">{errors.name}</p>}

            <label>
              Email
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Enter Email"
              />
            </label>
            {errors.email && <p className="errorText">{errors.email}</p>}

            <label>
              Password
              <input
                type="password"
                name="password"
                value={form.password}
                onChange={handleChange}
                placeholder="Enter Password"
              />
            </label>
            {errors.password && <p className="errorText">{errors.password}</p>}

            <button type="submit" className="primaryButton">
              Register
            </button>

            {successMessage && <p className="successText">{successMessage}</p>}
          </form>
        </article>

        <article className="panel apiPanel">
          <h2>Fetched API Users</h2>
          <p className="panelHint">Loaded using <code>useEffect</code></p>

          {apiStatus ? (
            <p className="emptyText">{apiStatus}</p>
          ) : (
            <ul className="userList">
              {apiUsers.map((user, index) => (
                <li key={user.id} className="userItem">
                  <span className="userName">{indianNames[index % indianNames.length]}</span>
                  <span className="userEmail">{user.email}</span>
                </li>
              ))}
            </ul>
          )}
        </article>

        <article className="panel resultsPanel">
          <h2>Registered Users</h2>
          {registeredUsers.length === 0 ? (
            <p className="emptyText">No users registered yet.</p>
          ) : (
            <ul className="userList">
              {registeredUsers.map((user, index) => (
                <li key={`${user.email}-${index}`} className="userItem registeredItem">
                  <span className="userName">{user.name}</span>
                  <span className="userEmail">{user.email}</span>
                </li>
              ))}
            </ul>
          )}
        </article>
      </section>
    </main>
  );
}

export default App;