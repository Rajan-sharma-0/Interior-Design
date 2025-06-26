import React, { useState } from "react";
import Navbar from "./Components/Navbar/Navbar";
import { Outlet } from 'react-router-dom';

function App() {
  const [user, setUser] = useState(null);

  return (
    <>
      <Navbar user={user} />
      <Outlet context={{ setUser }} />

    </>
  );
}

export default App;
