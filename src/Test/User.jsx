import { useState } from "react"
import { UserContext } from "./Context"
import Consumer from "./Consumer"

export default function Users() {
  const [user, setUser] = useState({
    email: "nick@gmail.com",
    password: "12345",
  });

  return (
    <UserContext.Provider value={user}>
      <Consumer />
    </UserContext.Provider>
  );
}
