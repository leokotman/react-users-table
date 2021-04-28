import {useState} from "react";
import "./App.css";
import Axios from "axios";

function App() {
  const [id, setId] = useState([]);
  const [registryDate, setRegistryDate] = useState([]);
  const [lastActivityDate, setLastActivityDate] = useState([]);
  const [usersList, setUsersList] = useState([]);

  const addUser = () => {
    Axios.post("http://localhost:3001/create", {
      id: id,
      registry_date: registryDate,
      last_activity_date: lastActivityDate,
    })
      .then(() => {
        console.log("axios post success");
        document.getElementById("#users").innerHTML = "users infos";
      })
      .catch(() => {
        alert(
          "Вы ввели данные неверно, попробуйте проверить и отправить еще раз"
        );
      });
  };
  const getUsers = () => {
    Axios.get("http://localhost:3001/users").then((response) => {
      console.log(response);
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
                onBlur={(event) => {
                  setId((id) => [...id, event.target.value]);
                }}
              />
            </td>
            <td>
              <input
                type="date"
                onBlur={(event) => {
                  setRegistryDate((registryDate) => [
                    ...registryDate,
                    event.target.value,
                  ]);
                }}
              />
            </td>
            <td>
              <input
                type="date"
                onBlur={(event) => {
                  setLastActivityDate((lastActivityDate) => [
                    ...lastActivityDate,
                    event.target.value,
                  ]);
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
                onBlur={(event) => {
                  setId((id) => [...id, event.target.value]);
                }}
              />
            </td>
            <td>
              <input
                type="date"
                onBlur={(event) => {
                  setRegistryDate((registryDate) => [
                    ...registryDate,
                    event.target.value,
                  ]);
                }}
              />
            </td>
            <td>
              <input
                type="date"
                onBlur={(event) => {
                  setLastActivityDate((lastActivityDate) => [
                    ...lastActivityDate,
                    event.target.value,
                  ]);
                }}
              />
            </td>
          </tr>
        </tbody>
      </table>
      <button type="submit" onClick={addUser}>
        Save
      </button>
      <button type="button" onClick={getUsers}>
        Show users
      </button>
      <section>
        <h1>Users:</h1>
        <p id="users"></p>
      </section>
    </div>
  );
}

export default App;
