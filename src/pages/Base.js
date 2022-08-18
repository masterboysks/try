import React from "react";
import { Input } from "../components/fields";

export default function Base() {
  const [username, setUsername] = useState("");
  return (
    <div className="min-w-[100vw] min-h-[100vh] flex items-center justify-center">
      <h1>Amrit College Of Science And Technology</h1>
      <div className="w-11/12 mx-auto lg:w-6/12 md:w-8/12 px-2 py-4">
        <Input
          placeholder="user4556"
          value={username}
          setValue={setUsername}
          label="Login"
        />
      </div>
    </div>
  );
}
