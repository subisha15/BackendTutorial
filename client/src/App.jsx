import "./App.css";
import { useState } from "react";
import axios from "axios";

function App() {
  const [employeeId, setEmployeeId] = useState("");
  const [employee, setEmployee] = useState(null);

  const handleSearch = async (e) => {
    try {
      e.preventDefault();
      const response = await axios.get(
        `http://localhost:3000/users/${employeeId}`
      );
      setEmployee(response.data.user);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <main className="bg-lime-400 p-8 min-h-screen flex flex-col  justify-center items-center gap-3">
        <h1 className="font-bold">Welcome Employee</h1>
        <form className="flex flex-col justify-center items-center gap-3">
          <label className="p-2">
            Enter Employee Id
            <input
              className="p-2 m-3"
              type="text"
              value={employeeId}
              onChange={(e) => setEmployeeId(e.target.value)}
            ></input>
          </label>
          <button
            className=" bg-green-700 rounded-md font-medium p-2"
            onClick={(e) => handleSearch(e)}
          >
            Search
          </button>
        </form>
        {employee && (
          <>
            <p className="mt-4 p-4 bg-green-400">Name:{employee.name}</p>
            <p className=" p-4 bg-green-400">Age:{employee.age}</p>
          </>
        )}
      </main>
    </>
  );
}

export default App;
