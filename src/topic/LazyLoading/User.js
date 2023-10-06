import React, { Suspense, lazy, useState } from "react";
// import UserCard from "./UserCard";

function User() {
  const [isUser, setIsUser] = useState(false);

  const UserCard = lazy(() => import("./UserCard"));
  return (
    <div className="block">
      <h3>User</h3>
      <button onClick={() => setIsUser(() => !isUser)}>Show user</button>
      {isUser && (
        <Suspense>
          <UserCard />
        </Suspense>
      )}
    </div>
  );
}

export default User;
