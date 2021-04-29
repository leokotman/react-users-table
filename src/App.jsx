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
        setUsersList([...usersList, {id: id,
          registry_date: registryDate,
          last_activity_date: lastActivityDate},
        ]);
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
      setUsersList(response.data);
    });
  };

  function dateDiffinDays(date2, date1) {
    debugger;
    let time2 = date2.getTime();
    let time1 = date1.getTime();

    return parseInt((time2 - time1) / (24 * 3600 * 1000));
  }

  function rollingRetention7days (users = {lastActivityDate, registryDate}) {
    debugger;
    //Rolling Retention X day = (количество пользователей, вернувшихся в систему в X-ый день или позже) / (количество пользователей, установивших приложение X дней назад или раньше) * 100%.
    let now = new Date();
    //фильтр списка пользователей числителя
    let activeUsersArr = users.filter(user => {
      return dateDiffinDays(user.lastActivityDate, user.registryDate) >= 7;
    });
    console.log('пользователи зашли спустя более 7 дней' + activeUsersArr);
    // фильтр пользователей знаменателя
    let old7daysUsersArr = users.filter(user => {
      return dateDiffinDays(user.registryDate, now) >= 7;
    });
    console.log('пользователи регистрировались больше 7 дней назад' + old7daysUsersArr);

    // формула с проверкой на 0
    if (old7daysUsersArr.length === 0) {
      return "В базе данных нет пользователей с RR 7 дней";
    } else {
      return (activeUsersArr.length / old7daysUsersArr.length) * 100;
    }
  };
  // let renderRR = rollingRetention7days(usersList);

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
        Save to Database
      </button>
      <button type="button" onClick={getUsers}>
        Show users
      </button>
      <section>
        <h1>Users:</h1>
          {usersList.map((value, key) => {
            return (
              <p id="users">
                  <span>UserID: {value.id}</span>
                  <span>
                    Date of Registration: {value.registry_date}
                  </span>
                  <span>
                    Last activity date: {value.last_activity_date}
                  </span>
                </p>
            );
          })}
      </section>
        <button type="button" onClick={rollingRetention7days(usersList)}>Calculate Rolling Retention</button>
        <p>{rollingRetention7days(usersList)}</p>
    </div>
  );
}

export default App;
