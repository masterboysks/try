import React, { useState } from "react";
import { Checkbox, Input } from "../components/fields";
import logo from "../assets/logoHeader.png";
import { PrimaryButton } from "../components/Buttons";
import AdminRoutes from "../AdminRoutes";
import StudentRoutes from "../StudentRoutes";
import TeacherRoutes from "../TeacherRoutes";
export default function Base() {
  const [username, setUsername] = useState("");
  const [errorUsername, setErrorUsername] = useState(false);
  const [password, setPassword] = useState("");
  const [errorPassword, setErrorPassword] = useState(false);
  const [remember, setRemember] = useState(false);

  const handleSubmit = () => {
    console.log(username);
    switch (username) {
      case "admin":
        <AdminRoutes></AdminRoutes>;
        break;
      case "student":
      case "parent":
        <StudentRoutes />;
        break;
      case "teacher":
        <TeacherRoutes />;
        break;
      default:
        setErrorPassword(true);
        setErrorUsername(true);
    }
  };
  return (
    <div className="min-w-[100vw] min-h-[100vh] flex items-center justify-center flex-col text-primary-grey-600">
      <div className="container-md box-border">
        <h1 className="flex items-center  container-md  justify-between">
          <img src={logo} alt="" className="w-3/12 " />
          <span className="w-8/12">
            Amrit College Of Science And Technology
          </span>
        </h1>
        <div className=" mx-auto  px-3 py-4 bg-primary-grey-100 rounded-lg box-border my-3">
          <Input
            placeholder="username"
            value={username}
            setValue={setUsername}
            label="Login"
            error={errorUsername}
            setError={setErrorUsername}
            dontShowErrorText={true}
          />
          <br />
          <Input
            placeholder="Password"
            value={password}
            setValue={setPassword}
            type="password"
            error={errorPassword}
            setError={setErrorPassword}
            errorText="Invalid credentials."
          />
          <br />

          <Checkbox
            label="Remember me:"
            selected={remember}
            setSelected={setRemember}
            className="mt-4"
            id="remember_me"
          />
          <br />
          <PrimaryButton onClick={handleSubmit}>Login</PrimaryButton>
        </div>
        <p className="text-center max-w-full break-words">
          Use the application according to <br /> policy rules. Any kinds of
          violations will <br /> be subject to sanctions.
        </p>
      </div>
    </div>
  );
}
