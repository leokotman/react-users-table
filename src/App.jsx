import {useState} from "react";
import "./App.css";
import Axios from "axios";

function App() {
  const [id, setId] = useState(0);
  const [registryDate, setRegistryDate] = useState(new Date());
  const [lastActivityDate, setLastActivityDate] = useState(new Date());

  const addUser = () => {
    Axios.post("http://localhost:3001/create", {
      id: id,
      registryDate: registryDate,
      lastActivityDate: lastActivityDate,
    }).then(() => {
      console.log("axios post success");
    });
  };

  return (
    <div className="App">
      <table>
        <thead>
          <tr>
            <th>UserID</th>
            <th>Date Registration</th>
            <th>Date last activity</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>
              <input
                type="number"
                min="0"
                name=""
                id=""
                onChange={(event) => {
                  setId(event.target.value);
                }}
              />
            </td>
            <td>
              <input
                type="date"
                onChange={(event) => {
                  setRegistryDate(event.target.value);
                }}
              />
            </td>
            <td>
              <input
                type="date"
                onChange={(event) => {
                  setLastActivityDate(event.target.value);
                }}
              />
            </td>
          </tr>
          <tr>
            <td>
              <input
                type="number"
                min="0"
                name=""
                id=""
                onChange={(event) => {
                  setId(event.target.value);
                }}
              />
            </td>
            <td>
              <input
                type="date"
                onChange={(event) => {
                  setRegistryDate(event.target.value);
                }}
              />
            </td>
            <td>
              <input
                type="date"
                onChange={(event) => {
                  setLastActivityDate(event.target.value);
                }}
              />
            </td>
          </tr>
          <tr>
            <td>
              <input
                type="number"
                min="0"
                name=""
                id=""
                onChange={(event) => {
                  setId(event.target.value);
                }}
              />
            </td>
            <td>
              <input
                type="date"
                onChange={(event) => {
                  setRegistryDate(event.target.value);
                }}
              />
            </td>
            <td>
              <input
                type="date"
                onChange={(event) => {
                  setLastActivityDate(event.target.value);
                }}
              />
            </td>
          </tr>
          <tr>
            <td>
              <input
                type="number"
                min="0"
                name=""
                id=""
                onChange={(event) => {
                  setId(event.target.value);
                }}
              />
            </td>
            <td>
              <input
                type="date"
                onChange={(event) => {
                  setRegistryDate(event.target.value);
                }}
              />
            </td>
            <td>
              <input
                type="date"
                onChange={(event) => {
                  setLastActivityDate(event.target.value);
                }}
              />
            </td>
          </tr>
          <tr>
            <td>
              <input
                type="number"
                min="0"
                name=""
                id=""
                onChange={(event) => {
                  setId(event.target.value);
                }}
              />
            </td>
            <td>
              <input
                type="date"
                onChange={(event) => {
                  setRegistryDate(event.target.value);
                }}
              />
            </td>
            <td>
              <input
                type="date"
                onChange={(event) => {
                  setLastActivityDate(event.target.value);
                }}
              />
            </td>
          </tr>
        </tbody>
      </table>
      <button type="submit" onClick={addUser}>
        Save
      </button>
      <button type="reset">Clear</button>
    </div>
  );
}

export default App;
