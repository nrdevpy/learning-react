import React, { useState } from 'react';

import AddUser from './components/Users/AddUser'
import UsersList from './components/Users/UsersList';

function App() {
  const [usersList, setUsersList] = useState([]);

  const addUserHandler = (uName, uAge) => {
    setUsersList(prevUserList => {
      return [...prevUserList, {
        id: Math.random(),
        name: uName,
        age: uAge,
      }];
    });
  };
  return (
    <main>
      <AddUser onAddUser={addUserHandler} />
      <UsersList users={usersList} />
    </main>
  );
}

export default App;
