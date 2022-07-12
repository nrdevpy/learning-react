import React from 'react';

import AddUser from './components/Users/AddUser'
import UsersList from './components/Users/UsersList';

function App() {
  return (
    <main>
      <AddUser />
      <UsersList users={[]}/>
    </main>
  );
}

export default App;
