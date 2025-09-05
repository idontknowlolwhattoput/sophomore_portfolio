import { useState, useContext } from "react"
import { UserContext } from "./Context"

export default function Consumer() {
    const data = useContext(UserContext);

  return (
    <div className="w-screen h-screen bg-blue-500 flex items-center justify-center">
      <p className="text-white text-2xl">
        Email: {data.email}
      </p>
    </div>
  );
}