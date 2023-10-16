import React from "react";
import { UserConsumer } from "../utls/userContext";

export const Comp4 = () => {
  return (
    <div>
      <UserConsumer>
        {(user) => {
          return (
            <h1>
              Name: {user.name}, age: {user.age}
            </h1>
          );
        }}
      </UserConsumer>
    </div>
  );
};
