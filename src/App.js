import React from "react";
import User from "./components/User";

const App = () => {
  return (
    <div>
      <User render={(isLoggedIn) => (isLoggedIn ? "Fahim" : "Visitor")} />
    </div>
  );
};

export default App;
