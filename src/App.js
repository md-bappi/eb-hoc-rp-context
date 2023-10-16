import React from "react";
import { UserProvider } from "./utls/userContext";
import { Comp1 } from "./components/Comp1";

const App = () => {
  const user = {
    name: "fahim",
    age: 20,
  };
  return (
    <div>
      <UserProvider value={user}>
        <Comp1 />
      </UserProvider>
    </div>
  );
};

export default App;
